import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPost } from "./actions/actionCreators";

function JournalList(props) {
  const history = useHistory();

  useEffect(() => {
    props.getPost();
  }, []);

  const onLogout = e => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      <h3> Your Feed </h3>
      <Link to="/addpost">
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">Add New Journal</button>
      </Link>
      <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray" onClick={onLogout}>Log out</button>
      <br></br>
      {props.journals.map(item => (
        <Link
          to={`/postlist/${item.id}`}
          key={item.id}>
          <div className="center mw5 mw6-ns hidden ba mv4">
            <p className="f4 bg-near-black white mv0 pv2 ph3">
            🚕: {item.last_name} {item.first_name}
            </p>
            <p>🌏: {item.location}</p>
            <p>💬: {item.message}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    journals: state.journalListReducer.journals
  };
};

export default connect(mapStateToProps, { getPost })(JournalList);

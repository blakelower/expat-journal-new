import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPost } from "../actions/actionCreators";
import './styles/tachyon.css';


function PostList(props) {
  const history = useHistory();

  useEffect(() => {
    props.getPost();
  }, []);

  const onLogout = e => {
    localStorage.removeItem("token");
    history.push("/");
  };


  return (
    <div className="back">
      <h2>Welcome</h2>
      <h3> Your Feed </h3>
      <Link to="/addpost">
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">Add New Journal Entry</button>
      </Link>
      <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray" onClick={onLogout}>Log out</button>
      <br></br>
      {props.journals.map(state => (
        <Link
          to={`/postlist/${state.id}`}
          key={state.id}
          style={{ textDecoration: "none" }}>
          <div className="center mw5 mw6-ns hidden ba mv4">
            <p className="f4 bg-near-black white mv0 pv2 ph3">
            {state.last_name} {state.first_name}
            </p>
            <img alt={state.location} src={state.image_url} style={{width:'400px', height: '400px', objectFit: 'cover'}}/>
            <p>{state.location}</p>
            <p>{state.message}</p>
            <p>{state.caption}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    journals: state.postListReducer.journals
  };
};

export default connect(mapStateToProps, { getPost })(PostList);

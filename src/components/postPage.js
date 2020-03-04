import React, { useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getIdPost, deletePost } from "./actions/actionCreators";

function JournalPage(props) {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    props.getIdPost(id);
  }, [id]);

  function deletePost(id) {
    props.deletePost(id);
    history.go(-1);
  }

  function edit(e) {
    e.preventDefault();
    history.push(`/updatepost/${id}`);
  }

  return (
    <div>
        <Link to={"/postlist"}>
          <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">Go Home</button>
        </Link>
        <h4>Want To Edit or Delete Your Post?</h4>
      <div className="center mw5 mw6-ns hidden ba mv4">
        <p className="f4 bg-near-black white mv0 pv2 ph3">
          User Name: {props.journal.last_name} {props.journal.first_name}
        </p>
        <p> Location: {props.journal.location}</p>
        <p> Caption: {props.journal.message}</p>
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray" onClick={edit}>Edit</button>
        <br/>
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray" onClick={() => deletePost(id)}>Delete</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    journal: state.journalPageReducer.journal
  };
};

export default connect(mapStateToProps, { getIdPost, deletePost })(
  JournalPage
);

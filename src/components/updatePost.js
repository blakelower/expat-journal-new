import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import {updateEditPost, updatePostChange} from "../actions/actionCreators";
import { connect } from "react-redux";

function UpdatePost(props) {
  const history = useHistory();
  const { id } = useParams();

  const onChange = e => {
    props.updatePostChange({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    props.updateEditPost({
      id,
      message: props.message,
      location: props.location,
      image_url: props.image_url,
      caption: props.caption
    });
    history.go(-1);
  };
  return (
    <div>
      <h3>Update Post</h3>
      <form onSubmit={onSubmit}>
        <label className="f4 fw6 ph0 mh0">
          Message: 
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="message"
            placeholder="Update message"
            value={props.message}
            onChange={onChange}
          />
        </label>
        <label className="f4 fw6 ph0 mh0">
          Location: <br></br>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="location"
            placeholder="Update location"
            value={props.location}
            onChange={onChange}
          />
        </label>
        <label className="f4 fw6 ph0 mh0">
          Image: <br></br>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="url"
            name="image_url"
            placeholder="Change Image"
            value={props.image_url}
            onChange={onChange}
          />
        </label>
        <label className="f4 fw6 ph0 mh0">
          Caption: <br></br>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="caption"
            placeholder="Update caption"
            value={props.caption}
            onChange={onChange}
          />
        </label>
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">Update</button>
        <Link to="/postlist" className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">Go Home</Link>
      </form>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    message: state.addPostReducer.message,
    location: state.addPostReducer.location,
    caption: state.addPostReducer.caption,
    image_url: state.addPostReducer.image_url
  };
};
export default connect(mapStateToProps,{
  updateEditPost,
  updatePostChange
})(UpdatePost);

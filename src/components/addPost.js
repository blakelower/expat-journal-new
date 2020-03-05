import React from "react";
import { useHistory, Link } from "react-router-dom";
import { createNewPost, addPost } from "../actions/actionCreators";
import { connect } from "react-redux";

function AddPost(props) {
  const history = useHistory();

  const onChange = e => {
    props.addPost({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.createNewPost({
      message: props.message,
      location: props.location
    });
    history.push("/postlist");
  };

  return (
    <div>
      <h3> Add A New Post From Your Super Fun Adventure! </h3>
      <form onSubmit={onSubmit}>
        <label className="f4 fw6 ph0 mh0"> 
          Share your message 
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="message"
            placeholder="Enter message"
            value={props.message}
            onChange={onChange}
          />
        </label>
        <label className="f4 fw6 ph0 mh0">
          Add your Location
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="location"
            placeholder="Enter location"
            value={props.location}
            onChange={onChange}
          />
        </label>
        <label className="f4 fw6 ph0 mh0">
          Add an Image
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="url"
            name="image_url"
            placeholder="Enter Image URL"
            value={props.image_url}
            onChange={onChange}
          />
        </label>
        <label className="f4 fw6 ph0 mh0">
          Add an Caption
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="caption"
            placeholder="Enter Caption"
            value={props.caption}
            onChange={onChange}
          />
        </label>
        <br/>
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">Post</button>
        <br/>
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

export default connect(mapStateToProps, { createNewPost, addPost })(
  AddPost
);

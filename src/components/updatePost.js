import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { updateEditPost, updatePostChange } from "../actions/actionCreators";
import { connect } from "react-redux";
import axios from "axios";

function UpdatePost(props) {
  const history = useHistory();
  const { id } = useParams();

  const formElement = React.createRef();
  const [uploading, setUploading] = React.useState(false);
  const [image_url, setImage_url] = React.useState("");
  const upload = e => {
    e.persist();
    setUploading(true);
    const token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://expat-journals.herokuapp.com/api/v1/journals/upload",
      headers: {
        "Content-Type": "application/form-data",
        Authorization: token
      },
      data: new FormData(formElement.current)
    })
      .then(res => {
        setImage_url(res.data.image_url);
        setUploading(false);
      })
      .catch(err => {
        setUploading(false);
      });
  };
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
      location: props.location
    });
    history.go(-1);
  };
  return (
    <div>
      <h3>Update Post</h3>
      <form onSubmit={onSubmit}>
        <form ref={formElement}>
          <input name="image_url" type="file" onChange={upload} />
        </form>
        {uploading && <p>uploading now...</p>}
        {image_url && <img src={image_url} alt="imageup" />}
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
        {/* <label className="f4 fw6 ph0 mh0">
          Image: <br></br>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="url"
            name="image_url"
            placeholder="Change Image"
            value={props.image_url}
            onChange={onChange}
          />
        </label> */}
        {/* <label className="f4 fw6 ph0 mh0">
          Caption: <br></br>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="caption"
            placeholder="Update caption"
            value={props.caption}
            onChange={onChange}
          />
        </label> */}
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">
          Update
        </button>
        <Link
          to="/postlist"
          className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray"
        >
          Go Home
        </Link>
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
export default connect(mapStateToProps, {
  updateEditPost,
  updatePostChange
})(UpdatePost);

import React from "react";
import { useHistory, Link } from "react-router-dom";
import { createNewPost, addPost } from "../actions/actionCreators";
import { connect } from "react-redux";
import axios from "axios";

function AddPost(props) {
  const history = useHistory();

  const formElement = React.createRef();
  const [uploading, setUploading] = React.useState(false);
  const [image_url, setImage_url] = React.useState('');
  const upload = e => {
    e.persist();
    setUploading(true)
    const token = localStorage.getItem('token')
    axios({
      method: "post",
      url: "https://expat-journals.herokuapp.com/api/v1/journals/upload",
      headers: {
        "Content-Type": "application/form-data",
        Authorization: token
      },
      data: new
      FormData(formElement.current)
    })
    .then(res => {
      setImage_url(res.data.image_url)
        setUploading(false)
    })
    .catch(err => {
      setUploading(false)
    })
  }

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
      location: props.location,
      image_url
    });
    history.push("/postlist");
  };

  return (
    <div>
      <h3> Add A New Post From Your Super Fun Adventure! </h3>
      <form ref={formElement}>
        <input name="image_url" type="file" onChange={upload}/>
      </form>
      {uploading && (<p>uploading now...</p>)}
      {image_url && <img src={image_url} alt="imageup" />}
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

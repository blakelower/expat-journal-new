import React from "react";
import { signup, signInput } from "./actions/actionCreators";
import { connect } from "react-redux";
import { useHistory, Link} from "react-router-dom";

function SignUp(props) {
  const history = useHistory();

  const handleChange = e => {
    props.signInput({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onSign = e => {
    e.preventDefault();
    props.signup({
      first_name: props.first_name,
      last_name: props.last_name,
      email: props.email,
      password: props.password,
      confirm_password: props.confirm_password
    });
    history.push("/login");
  };

  return (
    <div className="pa4 black-80">
      <h3>New to Expat Journal? Signup Today!</h3>
      <form className="measure center" onSubmit={onSign}>
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <label className="f4 fw6 ph0 mh0">
            First Name:
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="first_name"
              placeholder="Enter F Name"
              value={props.first_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="f4 fw6 ph0 mh0">
            Last Name:
            <input   
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="last_name"
              placeholder="Enter L Name"
              value={props.last_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="f4 fw6 ph0 mh0">
            Email
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={props.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="f4 fw6 ph0 mh0">
            Password:
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={props.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="f4 fw6 ph0 mh0">
            Confirm Password: <br></br>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={props.confirm_password}
              onChange={handleChange}
            />
          </label>
          <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">Sign Up </button>
        </fieldset>
        <Link to="/login" class="f6 link dim black db">
            Already have an account? Login!
          </Link>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    email: state.signupReducer.signUpInput.email,
    password: state.signupReducer.signUpInput.password,
    confirm_password: state.signupReducer.signUpInput.confirm_password,
    first_name: state.signupReducer.signUpInput.first_name,
    last_name: state.signupReducer.signUpInput.last_name
  };
};

export default connect(mapStateToProps, { signInput, signup })(SignUp);

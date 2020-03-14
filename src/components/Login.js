import React from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { changeLogin, login } from "../actions/actionCreators";
import Loader from "react-loader-spinner";

function Login(props) {
  const history = useHistory();

  const handleChange = e => {
    props.changeLogin({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onLogin = e => {
    e.preventDefault();
    props.login({
      email: props.email,
      password: props.password
    });
    history.push("/postlist");
  };

  return (
    <div className="pa4 black-80">
       <Loader
        type="Puff"
        color="#00BFF"
        height={100}
        width={100}
        timeout={3000}
      />
      <h3> Missed Us? Log Right Back In! </h3>
      <form className="measure center" onSubmit={onLogin}>
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <div className="mt3" />
          <label className="f4 fw6 ph0 mh0">
            Email:
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="email"
              placeholder="Enter Email"
              value={props.email}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <div className="mt3" />
          <label className="f4 fw6 ph0 mh0">
            Password: <br></br>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={props.password}
              onChange={handleChange}
            />
          </label>
          <br></br>
        </fieldset>
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">
          Log In
        </button>
        <div class="lh-copy mt3">
          <Link to="/signup" class="f6 link dim black db">
            Don't have an account? Sign Up!
          </Link>
        </div>
      </form>
    </div>
    );
  }


const mapStateToProps = state => {
  return {
    email: state.loginReducer.loginInput.email,
    password: state.loginReducer.loginInput.password
  };
};

export default connect(mapStateToProps, { changeLogin, login })(Login);

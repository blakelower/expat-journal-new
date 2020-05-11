// import React  from "react";
// import { connect } from "react-redux";
// import { useHistory, Link } from "react-router-dom";
// import { signup, signInput } from "../actions/actionCreators";

// function SignUp(props) {
//   const history = useHistory();

//   const handleChange = e => {
//     props.signInput({
//       inputName: e.target.name,
//       inputValue: e.target.value
//     });
//   };

//   const onSign = e => {
//     e.preventDefault();
//     props.signup({
//       first_name: props.first_name,
//       last_name: props.last_name,
//       email: props.email,
//       password: props.password,
//       confirm_password: props.confirm_password
//     });
//     history.push("/login");
//   };

//   return (
//     <div className="login-card">
//       <h3>New to Expat Journal? Signup Today!</h3>
//       <form className="measure center" onSubmit={onSign}>
//         <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
//           <label className="f4 fw6 ph0 mh0">
//             First Name:
//             <input
//               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//               type="text"
//               name="first_name"
//               placeholder="Enter F Name"
//               value={props.first_name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label className="f4 fw6 ph0 mh0">
//             Last Name:
//             <input
//               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//               type="text"
//               name="last_name"
//               placeholder="Enter L Name"
//               value={props.last_name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label className="f4 fw6 ph0 mh0">
//             Email
//             <input
//               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={props.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label className="f4 fw6 ph0 mh0">
//             Password:
//             <input
//               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               value={props.password}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label className="f4 fw6 ph0 mh0">
//             Confirm Password: <br></br>
//             <input
//               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//               type="password"
//               name="confirm_password"
//               placeholder="Confirm Password"
//               value={props.confirm_password}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray">
//             Sign Up{" "}
//           </button>
//         </fieldset>
//         <Link to="/login" class="f6 link dim black db">
//           Already have an account? Login!
//         </Link>
//       </form>
//       </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     email: state.signupReducer.signUpInput.email,
//     password: state.signupReducer.signUpInput.password,
//     confirm_password: state.signupReducer.signUpInput.confirm_password,
//     first_name: state.signupReducer.signUpInput.first_name,
//     last_name: state.signupReducer.signUpInput.last_name
//   };
// };

// export default connect(mapStateToProps, { signInput, signup })(SignUp);

import React from "react";
import "./styles/nav.css";
import {connect} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {signup, signInput} from "../actions/actionCreators";

function SignUp(props) {
  const history = useHistory();

  const handleChange = e => {
    props.signInput({
      inputName: e.target.name,
      inputValue: e.target.value
    })
  }
  const onSign = e => {
    e.preventDefault();
    props.signup({
      first_name: props.first_name,
      last_name: props.last_name,
      email: props.email,
      password: props.password,
      confirm_password: props.confirm_password
    });
    history.push("/login")
  }
  return (
    <section className="login-card">
      <article className="hello-world-section">
        <img
          src="https://i.ibb.co/Ptgq5fb/Woman-Striding.png"
          alt="woman standing"
          style={{height: '100px'}}
        />
        <h1>Sign Up Today</h1>
        <p>
          Document your journey today, let's not forget these memories!
        </p>
        <p id="credit">Illustration created by Leni Kauffman.</p>
      </article>
      <article className="login-section">
        <form className="login-form" onSubmit={onSign}>
          <div className="username">
            <label for="username"></label>
            <input
              type="text"
              id="username"
              name="first_name"
              placeholder="Enter First Name"
              value={props.first_name}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div class="password">
            <label for="pass"></label>
            <input
               type="text"
               name="last_name"
               placeholder="Enter Last Name"
               value={props.last_name}
               onChange={handleChange}
               required
            />
          </div>
          <div class="password">
            <label for="pass"></label>
            <input
               type="text"
               name="email"
               placeholder="Enter Email"
               value={props.email}
               onChange={handleChange}
               required
            />
          </div>
          <div class="password">
            <label for="pass"></label>
            <input
               type="password"
               name="password"
               placeholder="Enter Password"
               value={props.password}
               onChange={handleChange}
               required
            />
          </div>
          <div class="password">
            <label for="pass"></label>
            <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={props.confirm_password}
                onChange={handleChange}
                required
            />
          </div>
          <input type="submit" value="Sign in" id="submit-btn"></input>
          <Link to="/login" id="submit-btn">Already have an account? Sign in!</Link>
        </form>
      </article>
    </section>
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
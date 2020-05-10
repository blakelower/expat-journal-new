import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";
import SignUp from "./components/signup";
import Login from "./components/Login";
import PostList from "./components/postList";
import PrivateRoute from "./components/privateRoute";
import PostPage from "./components/postPage";
import AddPost from "./components/addPost";
import UpdatePost from "./components/updatePost";
// import NavBar from './components/navabr';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/postlist">
          <PostList />
        </PrivateRoute>
        <PrivateRoute exact path="/postlist/:id">
          <PostPage />
        </PrivateRoute>
        <PrivateRoute exact path="/addpost">
          <AddPost />
        </PrivateRoute>
        <PrivateRoute exact path="/updatepost/:id">
          <UpdatePost />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;

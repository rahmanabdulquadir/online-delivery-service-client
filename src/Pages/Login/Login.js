import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/UseTitle";
import loginImg from "../../images/login/undraw_on_the_way_re_swjt.svg";

const Login = () => {

  const {login, googleSignIn} = useContext(AuthContext)
  useTitle('Login')

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .then(err => console.error(err))
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .then(err => console.error(err))
  }

  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col grid md:grid-cols-2 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center pb-4">New to this delivery service app? <Link className="text-blue-600 font-bold" to={'/signup'}>Sign Up Here</Link></p>
          <button onClick={handleGoogleSignIn} className="btn btn-accent">Sign in With Google</button>

        </div>
      </div>
    </div>
  );
};

export default Login;

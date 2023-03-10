import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/UseTitle';
import loginImg from "../../images/login/undraw_on_the_way_re_swjt.svg";

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  useTitle('SignUp')

  const handleSignUp = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => console.error(err))
  }

  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col grid md:grid-cols-2 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                placeholder="password"
                className="input input-bordered"
                <span className="label-text"> Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center pb-4">Already have an account? <Link className="text-blue-600 font-bold" to={'/login'}>Please Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
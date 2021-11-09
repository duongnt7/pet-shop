import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DOMAIN } from '../const'
export default function Login({setIsHidden}) {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function onChangeUsename(event) {
    setUsername(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function loginAction() {
    axios({
      method: 'post',
      url: `${DOMAIN}/authenticate/login`,
      headers: {},
      data: {
        userName: username,
        password
      }
    }).then(function (response) {
      const data = response.data
      const token = data.jwtToken
      localStorage.setItem('jwtToken', token)
      setIsHidden(false)
      console.log("tokne", token)
    })
      .catch(function (error) {
        console.log(error);
      });


  }

  return (
    <div className="container login-area">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div id="first">
            <div className="myform form  mt-4">
              <div className="logo mb-3">
                <div className="col-md-12 text-center">
                  <h1>Login</h1>
                </div>
              </div>
              <div className=" mt-4">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input value={username} onChange={onChangeUsename} type="username" name="username" className="form-control" id="username" placeholder="Username" />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input value={password} onChange={onChangePassword} type="password" name="password" id="password" className="form-control" placeholder="Password" />
              </div>
              <div className="col-md-12 text-center mt-4">
                <button onClick={() => loginAction()} className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
              </div>
              <div className="col-md-12 ">
                <div className="login-or">
                  <hr className="hr-or" />
                </div>
              </div>
              <div className="form-group">
                <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
              </div>
              <div className="col-md-12 text-center mt-4">
                <button onClick={() => setIsHidden(false)} className=" btn btn-block mybtn btn-primary tx-tfm">Cancel</button>
              </div>
            </div>

          </div>
          {/* <div id="second">
            <div className="myform form ">
              <div className="logo mb-3">
                <div className="col-md-12 text-center">
                  <h1>Signup</h1>
                </div>
              </div>
              <form action="#" name="registration">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input type="text" name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Last Name</label>
                  <input type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                </div>
                <div className="col-md-12 text-center mb-3">
                  <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                </div>
                <div className="col-md-12 ">
                  <div className="form-group">
                    <p className="text-center"><a href="#" id="signin">Already have an account?</a></p>
                  </div>
                </div>
              </form></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

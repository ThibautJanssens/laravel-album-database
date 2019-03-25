import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    import Axios from 'axios';

    class Login extends Component {
        handleLogin(e){
            Axios.post('/api/login');
        }
        render () {
            return (
                <React.Fragment>
                    <div class="container-fluid">
                        <div class="row no-gutter">
                            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
                            </div>
                                <div class="col-md-8 col-lg-6">
                                    <div class="login d-flex align-items-center py-5">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-9 col-lg-8 mx-auto">
                                                    <h3 class="login-heading mb-4">Welcome back!</h3>
                                                    <form onSubmit={handleLogin} method="post">
                                                        <div class="form-label-group">
                                                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                                                            <label for="inputEmail">Email address</label>
                                                        </div>
                                                        <div class="form-label-group">
                                                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                                                            <label for="inputPassword">Password</label>
                                                        </div>
                                                        <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </React.Fragment>
            )
        }
    }

    export default Login

    import axios from 'axios';
    import React, { Component } from 'react';
    import { Link } from 'react-router-dom';

    class Login extends Component {
        render () {
            return (
                <React.Fragment>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
                    <link rel="stylesheet" type="text/css" href="./css/login.css"></link>
                    <div class="container">
                        <div class="d-flex justify-content-center h-100">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Welcome Back !</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                            </div>
                                            <input type="email" class="form-control" placeholder="email"/>

                                        </div>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                                            </div>
                                            <input type="password" class="form-control" placeholder="password"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Register" class="btn float-right login_btn"/>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex justify-content-center links">
                                        Don't have an account?<Link to='/register'>Sign Up</Link>
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

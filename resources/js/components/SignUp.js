    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class SignUp extends Component {
        componentDidUpdate(){
            axios.post('/api/register', {
                firstName: materialLoginFormEmail,
                lastName: materialLoginFormPassword
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        render () {
            return (
                <React.Fragment>
                    <link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="./css/register.css" />

                    <div class="container">
                        <div class="col-sm-8 col-sm-offset-2 main">
                            <div class="col-sm-6 left-side">
                                <h1>Join our</h1><br></br><h1>community !</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique justo
                                    eget nibh convallis pharetra.</p>
                            </div>
                            <div class="col-sm-6 right-side">
                                <h1>Login</h1>
                                <div class="form">
                                    <div class="form-group">
                                        <label for="form2">Your email</label>
                                        <input type="text" id="form2" class="form-control"/>

                                    </div>
                                    <div class="form-group">
                                        <label for="form4">Your password</label>
                                        <input type="password" id="form4" class="form-control"/>

                                    </div>
                                    <div class="text-xs-center">
                                        <a href="http://deepak646.blogspot.in/" target="_blank"
                                            class="btn btn-deep-purple">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

    export default SignUp

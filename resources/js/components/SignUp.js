    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class SignUp extends Component {
        componentDidUpdate(){
            axios.post('/api/register', {

              })
              .catch(function (error) {
                console.log(error);
              });
        }

        render () {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }
    }

    export default SignUp

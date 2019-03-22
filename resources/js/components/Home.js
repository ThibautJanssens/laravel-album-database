    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class Home extends Component {
      render () {
        return (
            <div class="main-content">
                <div class="row m-0 justify-content-center">
                <div class="card-container col-lg-6">
                    <div class="card card-articles">Latest Albums
                        <div class="card-body">
                            <h5 class="card-title title"></h5>
                            <h6 class="card-author author"></h6>
                            <div class="card-text content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
    }

    export default Home

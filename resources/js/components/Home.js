    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class Home extends Component {
      render () {
        return (
            <div className="main-content">
                <div className="row m-0 justify-content-center">
                <div className="card-container col-lg-6">
                    <div className="card card-articles">Latest Albums
                        <div className="card-body">
                            <h5 className="card-title title"></h5>
                            <h6 className="card-author author"></h6>
                            <div className="card-text content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
    }

    export default Home

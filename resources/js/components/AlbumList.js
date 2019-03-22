import axios from 'axios'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AlbumList extends Component {
    constructor() {
        super()
        this.state = {
            bands: []
        }
    }

    componentDidMount() {
        axios.get('/api/bands').then(response => {
            this.setState({
                bands: response.data
            })
        })
    }

    render() {
        const {bands} = this.state
        return (
            <section id="team" class="pb-5" >
                <link rel="stylesheet" href="./css/flip.css"/>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <div class="container">
                    <h5 class="section-title h1"> All Albums</h5>
                    <div class="row">
                        { bands.map(band => (
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div class="mainflip">
                                        <div class="frontside">

                                            <div class="card">
                                                <div class="card-body text-center">
                                                    <h4 class="card-title"> {band.name} </h4>
                                                    <p class="card-text"> This is basic card with image on top, title, description and button. </p>
                                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="backside">
                                            <div class="card">
                                                <div class="card-body text-center mt-4">
                                                    <h4 class="card-title"> {band.name} </h4>
                                                    <p class="card-text"> This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default AlbumList

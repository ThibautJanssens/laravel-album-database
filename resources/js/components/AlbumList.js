import axios from 'axios'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import flip from '../../../public/script/flip';
import { watchFile } from 'fs';

class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            bands: []
        }
    }

    componentDidMount() {
        axios.get('/api/band').then(response => {
            this.setState({
                bands: response.data
            })
            console.log(bands)
        })
    }

    render() {
        const {bands} = this.state
        return (
                <section className="container">
                    <link rel="stylesheet" href="./css/flip.css"/>
                    {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script> */}
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <div className="row active-with-click">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            { bands.map(band => (
                                <div className="material-card Red">
                                    <h2>
                                        <span>The Sin And The Sentence</span>
                                        <strong>
                                            <i className="fa fa-fw fa-star"></i>
                                                <Link to='/albums'>{band.name} </Link>
                                        </strong>
                                    </h2>
                                    <div className="mc-content">
                                        <div className="img-container">
                                            <img className="img-responsive" src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-christopher-walken.jpg"/>
                                        </div>
                                        <div className="mc-description">
                                            song list
                                        </div>
                                    </div>
                                    <a className="mc-btn-action" id="btn-action">
                                        <i className="fa fa-bars"></i>
                                    </a>
                                    <div className="mc-footer">
                                        <h4>
                                            Social
                                        </h4>
                                        <a className="fa fa-fw fa-facebook"></a>
                                        <a className="fa fa-fw fa-twitter"></a>
                                        <a className="fa fa-fw fa-linkedin"></a>
                                        <a className="fa fa-fw fa-google-plus"></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <script src={flip}></script>
                </section>
        )
    }
}

export default AlbumList

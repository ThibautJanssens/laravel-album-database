    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class Albums extends Component {
        constructor() {
            super()
            this.state = {
                albums: []
            }
        }
        componentDidMount() {
            axios.get('/api/albums').then(response => {
                this.setState({
                    albums: response.data
                })
            })
        }
        render () {
            const {albums} = this.state;
            return (
                <React.Fragment>
                    <link rel="stylesheet" type="text/css" href="./css/albums.css"></link>
                    <section id="team" class="pb-5">
                        <div class="container">
                            <h5 class="section-title h1">ALBUMS</h5>
                            <div class="row">
                            { albums.map(album => (
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                        <div class="mainflip">
                                            <div class="frontside">
                                                <div class="card">
                                                    <div class="card-body text-center">
                                                        <p><img class=" img-fluid" src={album.pochette} alt="card image"/></p>
                                                        <h4 class="card-title">{album.nom_album}</h4>
                                                        <p class="card-text">{album.nom_artiste}, {album.prodyear}</p>
                                                        <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="backside">
                                                <div class="card">
                                                    <div class="card-body text-center mt-4">
                                                        <Link to={"/album/"+album.id}>
                                                            <h4 class="card-title">{album.nom_album}</h4>
                                                        </Link>
                                                        <p class="card-text">{album.songs}</p>
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item">
                                                                <i>{album.genre}</i>
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <strong>{album.label}</strong>
                                                            </li>
                                                            <li>
                                                                Note: {album.note}/5
                                                            </li>
                                                        </ul>
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
                </React.Fragment>
            )
      }
    }

export default Albums

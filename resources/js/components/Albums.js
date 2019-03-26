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
                    <section id="team" className="pb-5">
                        <div className="container">
                            <h5 className="section-title h1">ALBUMS</h5>
                            <div className="row">
                            { albums.map(album => (
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src={album.pochette} alt="card image"/></p>
                                                        <h4 className="card-title">{album.nom_album}</h4>
                                                        <p className="card-text">{album.nom_artiste}, {album.prodyear}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <Link to={"/album/"+album.id}>
                                                            <h4 className="card-title">{album.nom_album}</h4>
                                                        </Link>
                                                        <p className="card-text">{album.songs}</p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <i>{album.genre}</i>
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

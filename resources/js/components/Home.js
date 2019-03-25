import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Home extends Component {
    constructor () {
        super();
        this.state = {
          albums: []
        }
    }

    componentDidMount () {
        axios.get('/api/albums').then(response => {
            this.setState({
                albums: response.data
          })
        })
    }

    render () {
        const {albums} = this.state;
        return (
            <div className="main-content">
                <div className="row m-0 justify-content-center">
                    <div className="card-container col-lg-6">
                        <div className="card card-articles">Albums
                            {albums.map(album => (
                                <div className="card-body">
                                    <h5 className="card-title title">{album.nom_album}</h5>
                                    <h6 className="card-author author">{album.nom_artiste}</h6>
                                    <div className="card-text content">
                                        {album.songs}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

export default Home

    import React, { Component } from 'react'

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
                <div class="main-content">
                    <div class="row m-0 justify-content-center">
                    <div class="card-container col-lg-6">
                        <div class="card card-articles">Albums
                        { albums.map(album => (
                            <div class="card-body">
                                <h5 class="card-title title">{album.nom_album}</h5>
                                <h6 class="card-author author">{album.nom_artiste}</h6>
                                <div class="card-text content">
                                    <p>Note: {album.note}</p>
                                    <p>Genre: {album.genre}</p>
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

export default Albums

import React, { Component } from 'react'

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        axios.get('/api/albums/'+this.props.match.params.id).then(response => {
            this.setState({
                album: response.data
            })
        })
    }

    handleDelete(e){
        axios.delete('/api/albums/'+this.props.match.params.id).then(response =>{
            this.props.history.push('/albums');
        })
    }

    render () {
        const {album} = this.state;
        return (
            <React.Fragment>
                <div className="container section">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>
                                {album.nom_album}
                            </h3>
                            <p>Artist: {album.nom_artiste}</p>
                            <p>Genre: {album.genre}</p>
                            <p>Label: {album.label}</p>
                            <p>Year of release: {album.yearprod}</p>
                            <p>Score: {album.note} / 5</p>
                            <p>
                                {album.songs}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={album.pochette} height='300px' width='300px'/>
                        </div>
                    </div>
                    <button onClick={this.handleDelete}>Delete this album</button>
                </div>
            </React.Fragment>
        )
  }
}

export default Album

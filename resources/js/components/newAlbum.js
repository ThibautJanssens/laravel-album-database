import axios from 'axios';
import React, { Component } from 'react';

class newAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pochette : '',
            nom_artiste : '',
            nom_album : '',
            genre : '',
            prodyear : '',
            label : '',
            songs : '',
            note : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        const form = {
            pochette : this.state.pochette,
            nom_artiste : this.state.nom_artiste,
            nom_album : this.state.nom_album,
            genre : this.state.genre,
            prodyear : this.state.prodyear,
            label : this.state.label,
            songs : this.state.songs,
            note : this.state.note
        }
        axios.post('/api/albums', form)
            .then(function (response) {
                this.props.history.push('/albums');
            }).catch(function (error) {
                console.log(error);
            });

        this.setState({
            pochette : '',
            nom_artiste : '',
            nom_album : '',
            genre : '',
            prodyear : '',
            label : '',
            songs : '',
            note : ''
        })
    }

    render () {
        return (
            <React.Fragment>
                <link rel="stylesheet" type="text/css" href="./css/newAlbum.css"></link>
                <div class="container">
                    <p class="h2 text-center">Add an album</p>
                    <form action={this.handleSubmit} method="post">
                        <div class="preview text-center">
                            <img class="preview-img" src="http://simpleicon.com/wp-content/uploads/account.png"
                                alt="Preview Image" width="200" height="200" />
                            <div class="browse-button">
                                <i class="fa fa-pencil-alt"></i>
                                <input onChange={this.handleChange} class="browse-input" type="file" required name="pochette"
                                    id="pochette" />
                            </div>
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <label>Artist Name:</label>
                            <input onChange={this.handleChange} class="form-control" type="text" name="nom_artiste" required
                                placeholder="Name of the artist" />
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <label>Album Name:</label>
                            <input onChange={this.handleChange} class="form-control" type="text" name="nom_album" required
                                placeholder="Name of the album" />
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <label>Genre:</label>
                            <input onChange={this.handleChange} class="form-control" type="text" name="genre" required
                                placeholder="Genre" />
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <label>Year of release:</label>
                            <input onChange={this.handleChange} class="form-control" type="text" name="prodyear" required
                                placeholder="Year of release" />
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <label>Label:</label>
                            <input onChange={this.handleChange} class="form-control" type="text" name="label" required
                                placeholder="Label releasing the album" />
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <label>Score ( /5):</label>
                            <input onChange={this.handleChange} class="form-control" type="text" name="note" required
                                placeholder="Score" />
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <label>Song List:</label>
                            <input onChange={this.handleChange} class="form-control" type="text" name="songs" required
                                placeholder="Songs" />
                            <span class="Error"></span>
                        </div>
                        <div class="form-group">
                            <button onClick={this.onSubmit} class="btn btn-primary btn-block" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default newAlbum

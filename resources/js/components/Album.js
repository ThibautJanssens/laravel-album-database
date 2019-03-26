import React, { Component } from 'react'

class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            album: []
        }
    }
    componentDidMount() {

        axios.get('/api/albums/'+this.props.match.id).then(response => {
            this.setState({
                album: response.data
            })
        })
    }
    render () {
        const {album} = this.state;
        return (
            <React.Fragment>

            </React.Fragment>
        )
  }
}

export default Albums

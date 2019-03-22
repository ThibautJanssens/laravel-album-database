import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class SongList extends Component {
      constructor () {
        super()
        this.state = {
          bands: []
        }
      }

      componentDidMount () {
        axios.get('/api/bands').then(response => {
          this.setState({
            bands: response.data
          })
        })
      }

      render () {
        const { bands } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>All Bands</div>
                  <div className='card-body'>
                    <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Add new band
                    </Link>
                    <ul className='list-group list-group-flush'>
                      {bands.map(band => (
                        <Link
                          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                          to={`/band/${band.id}`}
                          key={band.id}
                        >
                          {band.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    export default SongList

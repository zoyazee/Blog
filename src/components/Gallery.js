import React from 'react'
import Photo from './Photo'
 
class Gallery extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(response => {
            this.setState({
                photos: response.slice(0, 5)
            })
        })
    }

    render() {
        return (
            <section>
									<header>
										<h2>Gallery</h2>
										<p>Best Photos</p>
									</header>
									<div className="content">
										<div className="gallery">
											{
                                                this.state.photos.map(photo => {
                                                    return <Photo key={photo.id} photo={photo} />
                                                })
                                            }
										</div>
									</div>
								</section>
        )

    }
}

export default Gallery
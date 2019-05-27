
import React, { Component } from 'react'

/*import using the package.json in Tour folder*/
import Tour from '../Tour'
import './tourlist.scss'
/* import data, for the state */
import { tourData } from '../../tourData'

export default class TourList extends Component {

    state = {
        toursArr: tourData
    }

    removeTour = (id) => {
        let tours = this.state.toursArr.filter((tour) => {
            console.log(tour)
            return id !== tour.id
        })
        this.setState({
            toursArr: [...tours]
        })
    }

    render() {
        //console.log(this.state)
        let tours = this.state.toursArr.map((tour) => {
            return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
        })
        
        return (
            <section className="tourlist">
                { tours }
            </section>
        )
    }
}


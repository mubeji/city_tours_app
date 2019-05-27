import React, { Component } from 'react'
import './tour.scss'

export default class Tour extends Component {

    state = {
        showInfo:false
    }

    handleInfoDisplay = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    
    render() {
        //console.log('Tour props', this.props)
        const { id, city, name, img, info  } = this.props.tour
        const { removeTour } = this.props
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour_image"/>
                    <span onClick={()=> removeTour(id)} className="close-btn">
                        {/* font-awsome icon */}
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "}
                        <span onClick={this.handleInfoDisplay}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>

                    {this.state.showInfo && (
                        <p>{info}</p>
                    )}
                
                </div>
            </article>
        )
    }
}

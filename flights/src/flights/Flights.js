import React, {Component} from 'react';

import {flightsData} from './data';

import './flights.css';

class Flights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : '',
        }

    }


    handleChange = (event) => {
        this.setState({ date: event.target.value })
    };

    handleSubmit = () => {
        const filteredData = flightsData.filter(flightInfo => flightInfo.date === this.state.date );
        this.setState({ flightData : filteredData });
    }

    render() {
        return (
            <div>
                <div className="flights-info">
                    <div className="flights-info--dates flex alignCenter justifyCenter">
                        <p>Search for availablity of flights</p>
                        <input type="date" onChange={this.handleChange} value={this.state.date} required/>
                        <button onClick={this.handleSubmit}>Search</button>
                    </div>
                    <div className="flights-info--data">
                        <div className="flights-records">
                            {
                                this.state.flightData ?
                                    this.state.flightData.length ? this.state.flightData.map((data) => {
                                        return (

                                            <div key={data.id} className="flights-records__results">
                                                <div className="flex spaceBetween alignCenter">
                                                    <p className="flightName">{data.name}</p>
                                                    <span className="location">{data.location.from}</span>
                                                </div>
                                                <div className="flex spaceBetween alignCenter">
                                                    <span className="duration">{data.duration}</span>
                                                    <span className="cost">{data.cost}</span>
                                                </div>

                                            </div>
                                        );
                                    }) : <div>No result Found</div>
                                        :null
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flights;

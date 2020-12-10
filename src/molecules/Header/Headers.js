import React, { Component } from 'react'
import './style.css'

export default class Index extends Component {
    render() {
        // th`is.props //ini menerima data dari luar
        return (
            <div className="box">
                <ul>
                    <li><a href="#">Qtemu</a></li>
                    <li><a href="#">Create Meetup</a></li>
                    <li><a href="#">Explore</a></li>
                    <li className="float-right"><a href="#">Login</a></li>
                </ul>
            </div>
        )
    }
}

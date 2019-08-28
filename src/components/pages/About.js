import React, { Component } from 'react';
import Header from '../Common/Header';
import Timeline from '../Common/Timeline'
import Team from '../Common/Team'
import image from '../assets/image/header-bg.jpg'

export default class About extends Component {

    render() {
        return (
            <div>
                <Header
                    title="About Us"
                    subtitle="It's been a jolly ride"
                    showButton={false}
                    image={image}
                />
                <Timeline />
                <Team />
            </div>

        )
    }
}
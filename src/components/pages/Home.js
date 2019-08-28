import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/image/header-bg.jpg'

// Reusable Compenents
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team'
import Timeline from '../Common/Timeline';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to My Website!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell Me More"
                    link="/Services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <Timeline />
                <Team />

            </div>
        )
    }
}
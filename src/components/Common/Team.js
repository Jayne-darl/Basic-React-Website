import React, { Component } from 'react';
import TeamMember from './TeamMember';

import img1 from '../assets/image/team/1.jpg';
import img2 from '../assets/image/team/2.jpg';
import img3 from '../assets/image/team/3.jpg'

const members = [
    { name: 'Kay Garland', role: "Lead Designer", image: img1 },
    { name: 'Larry Parker', role: "Lead Marketer", image: img2 },
    { name: 'Diana Pertersen', role: "Lead Developer", image: img3 }
]

export default class Team extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {members.map((member, index) => {
                            return <TeamMember {...member} key={index} />
                        })}

                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
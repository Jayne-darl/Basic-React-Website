import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

import img1 from '../assets/image/portfolio/01-thumbnail.jpg';
import img2 from '../assets/image/portfolio/02-thumbnail.jpg';
import img3 from '../assets/image/portfolio/03-thumbnail.jpg';
import img4 from '../assets/image/portfolio/04-thumbnail.jpg';
import img5 from '../assets/image/portfolio/05-thumbnail.jpg';
import img6 from '../assets/image/portfolio/06-thumbnail.jpg';

const portfolio = [
    { title: 'Threads', subtitle: 'Illustraion', image: img1 },
    { title: 'Explore', subtitle: 'Graphic Design', image: img2 },
    { title: 'Finish', subtitle: 'Identity', image: img3 },
    { title: 'Line', subtitle: 'Branding', image: img4 },
    { title: 'SouthWest', subtitle: 'Website Design', image: img5 },
    { title: 'Window', subtitle: 'Photography', image: img6 }
]

export default class Portfolio extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index) => {
                            return <PortfolioItem {...item} key={index} />
                        })}

                    </div>
                </div>
            </section>
        )
    }
}
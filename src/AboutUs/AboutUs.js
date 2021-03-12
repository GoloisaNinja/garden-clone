import React, { Component } from 'react'
import "./AboutUs.css"

export default class AboutUs extends Component {
    render() {
        return (
            <div className='about-us-page'>
                <h1 className='title'>About the Gainful Team</h1>
                <div className='bioCard'>
                    <img className='bio-pic' alt='Nicole' src='/bio-nicole.png' />
                    <p><strong>Nicole (she/her)</strong> <br />is a full stack software engineer located in Portland, OR. She enjoys working with computers and collaborating on fun and impactful projects that will help the planet, animals, and all humans. Also a huge fan of vegan food, coffee and being outside in the beautiful Pacific Northwest with her dog, Cooper. Her favorite part of gardening is getting to cook and eat all the tasty homegrown veggies!</p>
                    <br /><a href='https://github.com/nicole-m-martin'>My Github</a>
                    <br /><a href='https://www.linkedin.com/in/nicolemartinpdx/'>My LinkedIn</a>
                </div>
                <div className='bioCard'>
                    <img className='bio-pic' alt='Katrina' src='/bio-katrina.jpg' />
                    <p><strong>Katrina (she/her)</strong> <br /> is a full stack software engineer in Portland, transplanted from Ohio, and setting strong roots. She enjoys coding, design, painting, and gardening. She most recently planted sunflower seeds with her two girls and they have been having a great time watching them sprout!</p>
                    <br /><a href='https://github.com/KatrinaCloyd?tab=repositories'>My Github</a>
                    <br /><a href='https://www.linkedin.com/in/katrinacloyd/'>My LinkedIn</a>
                </div>
                <div className='bioCard'>
                    <img className='bio-pic' alt='KB' src='/bio-kb.jpg' />
                    <p><strong>KB (she/her)</strong><br /> is a software engineer in the city of roses, Portland, OR. She spends her days playing video games or reading with her legion of snake plants. She grows beets and radishes in her garden and dreams of the day her rosemary bush gets massive!</p>
                    <br /><a href='https://github.com/katrinkajb'>My Github</a>
                    <br /><a href='https://www.linkedin.com/in/katy-boyles/'>My LinkedIn</a>
                </div>
                <div className='bioCard'>
                    <img className='bio-pic' alt='Kat' src='/bio-kat.jpg' />
                    <p><strong>Kat (they/them)</strong><br /> is a dancer and choreographer turned full-stack software engineer. They love combining art and tech and aim to create apps that make being the best citizen possible... a little more possible. They have about 40 plants in their home and enjoy propagating plants for friends. Share the greens!</p>
                    <br /><a href='https://github.com/kat-sauma'>My Github</a>
                    <br /><a href='https://www.linkedin.com/in/kat-sauma/'>My LinkedIn</a>
                </div>
            </div>
        )
    }
}

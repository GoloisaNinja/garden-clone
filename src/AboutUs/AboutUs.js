import React, { Component } from 'react'
import "./AboutUs.css"

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1>About the Gainful Team</h1>
                <div className='bioCard'>
                    <img className='bio-pic-long' alt='Nicole' src='/bio-nicole.png' />
                    <p>Nicole (she/her) is a full stack software engineer located in Portland, OR. She enjoys working with computers and collaborating on fun and impactful projects that will help the planet, animals, and all humans. Also a huge fan of vegan food, coffee and being outside in the beautiful Pacific Northwest with her dog, Cooper. Her favorite part of gardening is getting to cook and eat all the tasty homegrown veggies!</p>
                    <a href='https://github.com/nicole-m-martin'>My Github</a>
                    <a href='https://www.linkedin.com/in/nicolemartinpdx/'>My LinkedIn</a>
                </div>
                <div className='bioCard'>
                    <img className='bio-pic' alt='Katrina' src='/bio-katrina.jpg' />
                    <p>Katrina (she/her) is a full stack software engineer in Portland, transplanted from Ohio, and setting growing strong roots. She enjoys coding, design, painting, and gardening. She most recently planted sunflower seeds with her two girls and they have been having a great time watching them sprout!</p>
                    <a href='https://github.com/KatrinaCloyd?tab=repositories'>My Github</a>
                    <a href='https://www.linkedin.com/in/katrinacloyd/'>My LinkedIn</a>
                </div>
                <div className='bioCard'>
                    <img className='bio-pic-long' alt='KB' src='/bio-kb.jpg' />
                    <p>KB (she/her) is a software engineer in the city of roses, Portland, OR. She loves to grow beets in her garden and dreams of the day her rosemary plant gets massive!</p>
                    <a href='https://github.com/katrinkajb'>My Github</a>
                    <a href='https://www.linkedin.com/in/katy-boyles/'>My LinkedIn</a>
                </div>
                <div className='bioCard'>
                    <img className='bio-pic' alt='Kat' src='/bio-kat.png' />
                    <p>Kat (they/them) bio</p>
                    <a href='https://github.com/kat-sauma'>My Github</a>
                    <a href='https://www.linkedin.com/in/kat-sauma/'>My LinkedIn</a>
                </div>
            </div>
        )
    }
}

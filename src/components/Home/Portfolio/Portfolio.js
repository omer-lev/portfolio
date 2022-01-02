import './Portfolio.css';

import natureeye from '../../../img/natureeye.png';
import chatApp from '../../../img/chat-app.png';
import runiz from '../../../img/runiz.png';
import shabbat from '../../../img/shabbat.png';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>PORTFOLIO</h1>

            <div className="tabs">
                <p>ALL</p>
                <p>DEVELOPMENT</p>
                <p>WEB DESIGN</p>
            </div>

            <div className="previews">
                <img src={natureeye} onClick={() => { window.open('https://www.natureeye.com/', '_blank') }} />
                <img src={runiz} onClick={() => { window.open('https://runiz.netlify.app/', '_blank') }} />
                <br />
                <img src={chatApp} onClick={() => { window.open('https://chat-app-omer.herokuapp.com/', '_blank') }} />
                <img src={shabbat} onClick={() => { window.open('https://shabbat-times.herokuapp.com/Lincoln%20Square/New%20York/5344994/', '_blank') }} />
            </div>
        </div>
    )
}

export default Portfolio;

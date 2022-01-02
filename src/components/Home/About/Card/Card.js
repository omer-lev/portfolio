import './Card.css';
import cardHead from '../../../../img/ryan-head.jpg';

const Card = () => {
    return (
        <div className="card">
            <div className="info">
                <img src={cardHead} />

                <p><span>Full Name :</span>Omer Lev</p>
                <p><span>Birthday :</span>6 January 2005</p>
                <p><span>Phone Number :</span>(+972) 054 948 9409</p>
                <p><span>E-Mail :</span>omerlev66@gmail.com</p>
            </div>

            <div className="skills">
                <h3>SKILLS</h3>

                <div>
                    <p>HTML5 & CSS3</p>
                    <div>
                        <span>95%</span>
                    </div>
                </div>

                <div>
                    <p>React</p>
                    <div>
                        <span>83%</span>
                    </div>
                </div>

                <div>
                    <p>Node JS</p>
                    <div>
                        <span>90%</span>
                    </div>
                </div>

                <div>
                    <p>AWS</p>
                    <div>
                        <span>88%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact">
            <h1>CONTACT</h1>

            <div className="panel">
                <div className='icons'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <FontAwesomeIcon icon={faLink} />
                </div>

                <div className="icon-desc">
                    <div>
                        <h3>ADDRESS</h3>
                        <p>Vaitsman 53, Bat Yam, IL</p>
                    </div>

                    <div>
                        <h3>PHONE NUMBER</h3>
                        <p>(+972) 054 948 9409</p>
                    </div>

                    <div>
                        <h3>WEBSITE</h3>
                        <p>fiverr.com/omerlev66</p>
                    </div>
                </div>
            </div>

            <form>
                <div className="inputs">
                    <input type="text" placeholder='Name*:' autoComplete='none' required />
                    <input type="email" placeholder='Email*:' autoComplete='none' required />
                </div>
                <textarea id="comment" placeholder='comment*:' autoComplete='none'></textarea>

                <button>SEND MESSAGE</button>
            </form>
        </div>
    )
}

export default Contact;
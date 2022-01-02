import Header from '../components/Home/Header/Header';
import About from '../components/Home/About/About';
import Portfolio from '../components/Home/Portfolio/Portfolio';
import Contact from '../components/Home/Contact/Contact';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home;

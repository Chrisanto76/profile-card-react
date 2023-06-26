import Infos from './components/Infos';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div className='container'>
                <Infos />
                <About />
                <Interests />
                <Footer />
            </div>
        </>
    );
}

export default App;

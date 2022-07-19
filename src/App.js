import './App.css';
import Header from "./components/header/Header";
import Description from "./components/section-description/Description";
import Skills from "./components/section-skills/Skills";
import Work from "./components/section-work/Work";
import Offer from "./components/section-offer/Offer";
import Contacts from "./components/section-contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Description/>
            <Skills/>
            <Work/>
            <Offer/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

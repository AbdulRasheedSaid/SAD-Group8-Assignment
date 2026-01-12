import BulletinBoard from "./components/BulletinBoard";
import CalendarNewsletter from "./components/CalendarNewsletter";
import Footer from "./components/Footer";
import HappeningAtSoA from "./components/HappeningAtSoA";
import Hero from "./components/Hero";

const App = () => {
    return (
        <>
            <Hero />
            <HappeningAtSoA />
            <BulletinBoard />
            <CalendarNewsletter />
            <Footer />
        </>
    );
};

export default App;

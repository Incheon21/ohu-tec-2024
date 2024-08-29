import Navbar from "./component-ohu/Navbar";
import VideoPlayer from "./component-ohu/VideoPlayer";
import Regis from "./component-ohu/Regis";
import Footer from "./component-ohu/Footer";
import Countdown from "./component-ohu/Countdown";
import Hero from "./component-ohu/Hero";
import Kegiatan from "./component-ohu/Kegiatan";
import Popup from "./component-ohu/Popup";
import Challenge from "./component-ohu/Challenge";

export default function Home() {
    
    return (
        <html className="overflow-x-hidden scroll-smooth">
            <section className="w-[100vw]  overflow-hidden h-fit">
                <Popup />
                <Hero />
                <Navbar />
                <VideoPlayer />
                {/* <Regis /> */}
                {/* <Kegiatan /> */}
                {/** <Countdown />*/}
                <Kegiatan />
                <Challenge></Challenge>
                <Footer />
            </section>
        </html>
    );
}

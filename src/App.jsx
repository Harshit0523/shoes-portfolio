import "./App.css";
import Hero from "./section/Hero"
import Navbar from "./componets/Navbar";
import Popularproduct from "./section/Popularproduct";
import SuperQuality from "./section/SuperQuality";

import Services from "./section/Services";
import Specialoffer from "./section/Specialoffer";
import Customerreview from "./section/Customerreview";
import Subscribe from "./section/Subscribe";
import Footer from "./section/Footer";


function App() {
  return (
    <main className="text-5xl  p-2 ">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding ">
       <Popularproduct/>
      </section>
      <section className="padding ">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10 ">
        <Services/>
      </section>
      <section className="padding ">
        <Specialoffer/>
      </section>
      <section className=" padding">
        <Customerreview/>
      </section>
      <section className=" padding-x">
        <Subscribe/>
      </section>
      <section className=" bg-black padding-x padding-t pb-8 text-white ">
        <Footer/>
      </section>
    </main>
  );
}

export default App;

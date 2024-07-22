import "./App.css";
import Hero from "./section/Hero"
import Navbar from "./componets/Navbar";
function App() {
  return (
    <main className="text-5xl  p-2 ">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding ">PopularProducts</section>
      <section className="padding ">PopularQuality</section>
      <section className="padding-x py-10 ">Services</section>
      <section className="padding ">Specialoffers</section>
      <section className=" padding">CustomerReview</section>
      <section className=" padding-x">Subscribe</section>
      <section className="padding-x padding-t ">Footer</section>
    </main>
  );
}

export default App;

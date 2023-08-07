import Avatar from "./components/Avatar";
import BookNow from "./components/BookNow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Buy from "./components/Buy";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Others from "./components/others/Others";
import Nearby from "./components/nearby/Nearby";
import RightSide from "./components/rightSide/RightSide";
import Team from "./components/Team";
function App() {
  return (
    <section >

      <main className="relative">
        <Header />
        <section>
          <Avatar />
        </section>
        <div className="relative lg:flex w-full">
          <div className="lg:w-8/12 ">
            <section className="my-12 px-3">
              <Services />
            </section>
            <section className="my-12 px-3">
              <Team />
            </section>
            <section className="my-12 px-5">
              <Reviews />
            </section>
            <section className="my-12 px-5">
              <Buy />
            </section>
            <section className="my-12 px-5">
              <About />
            </section>
          </div>
          <section className="sticky top-0 right-0 w-4/12 pr-4 lg:block hidden">
            <RightSide />
          </section>
        </div>
        <section className="my-12 px-5">
          <Nearby />
        </section>
        <section className="my-12 px-5">
          <Others />
        </section>
        <BookNow />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;

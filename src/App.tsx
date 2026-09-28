import Nav from "./components/Nav.tsx";
import Hero from "./components/Hero.tsx";
import AboutFlit from "./components/AboutFlit.tsx";
import History from "./components/History.tsx";
import Programme from "./components/Programme.tsx";
import Details from "./components/Details.tsx";
import Registration from "./components/Registration.tsx";
import Team from "./components/Team.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutFlit />
        <History />
        <Programme />
        <Details />
        <Registration />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

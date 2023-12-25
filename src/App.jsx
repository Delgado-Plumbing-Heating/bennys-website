import "./App.css";
import TopHeader from "./components/TopHeader";
import SecondHeader from "./components/SecondHeader";
import MainImage from "./components/MainImage";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <TopHeader />
      <SecondHeader />
      <MainImage />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;

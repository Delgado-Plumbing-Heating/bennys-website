import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={MainImage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

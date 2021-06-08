import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Pages />
      </Router>
    </>
  );
}

export default App;

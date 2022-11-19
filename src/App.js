import Routes from "./routes";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Pages/About";
import Erorr from "./Pages/Erorr";
import Header from "./templates/Header";
import Relocation from "./templates/Relocation";
import Approval from "./Pages/Approval";
import Publications from "./Pages/Publications";
import Footer from "./templates/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<About />} />
              <Route path="/*" element={<Relocation />} />
              <Route path="/error" element={<Erorr />} />
              <Route path="/approval" element={<Approval />}/>
              <Route path="/publications" element={<Publications />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

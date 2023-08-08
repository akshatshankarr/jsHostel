import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Profile from './components/profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import CabRec from './components/cabrec';
import Directory from './components/directory';
import About from './components/about'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="/cabshare" element={<CabRec />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
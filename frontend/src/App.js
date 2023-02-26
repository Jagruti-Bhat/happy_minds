import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {Home, Apple, Navbar, Header, Cards,
  Footer, Sos,Angry, Communities,Addnew,Archive,Journal, Resources,
  Fixsleep,Story1,Story2,Story3,Story4,Story5,Story6,Register,
FirstPage,} from "./components"
import {Link} from "react-router-dom"

import { UserProvider } from "./context/UserContext";



function App() {
  return (
    <><Navbar /><BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/apple" element={<p>apple</p>} /> */}
        <Route path="/fp" element={<FirstPage />} />
        <Route path="/" element={<Register />} />
        <Route path="/Sos" element={<Sos />} />
        <Route path="/Angry" element={<Angry/>} />
        <Route path="/Communities" element={<Communities/>}/>
        <Route path="/Journal" element={<Journal />} />
        <Route path="/Addnew" element={<Addnew />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Resources" element={<Resources/>}/>
        <Route path="/Fixsleep" element={<Fixsleep />} />
        <Route path="/Story1" element={<Story1 />} />
        <Route path="/Story2" element={<Story2 />} />
        <Route path="/Story3" element={<Story3 />} />
        <Route path="/Story4" element={<Story4 />} />
        <Route path="/Story5" element={<Story5 />} />
        <Route path="/Story6" element={<Story6 />} />
      </Routes>
      </UserProvider>
    </BrowserRouter></>
      
      
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Alert from './components/layout/Alert'
import { AlertProvider } from './context/github/alert/AlertContext'

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import {GithubProvider} from './context/github/GithubContext'


function App() {
  return (
    <GithubProvider >
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />

        <main className='comtainer mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
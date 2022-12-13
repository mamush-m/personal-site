import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/contact/Contact';
import { useState } from 'react';
// import { Display } from './components/display/Display';
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [menu, setMenu] = useState(false);

  // const toggle = () => {
  //   setMenu(false)
  // }

  return (
    <div className="App" >
     {/* <Navigation content={content} updater={updater}/> */}
     <Navigation menu={menu} setMenu={setMenu}/>


     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
     </Routes>


     {/* <Home/> */}
     {/* <Display content={content}/> */}
    </div>
  );
}

export default App;

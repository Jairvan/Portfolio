import Navbar from './Components/NavBar/navbar';
import Intro from './Components/Intro/intro';
import Project from './Components/Project/project';
import Skills from './Components/Skills/skills';

import './App.css';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Intro />
      break
    case "/intro":
      component = <Intro />
      break
    case "/project":
      component = <Project />
      break
    case "/skills":
      component = <Skills />
      break
  }
  return (
  <>
    <Navbar />
    <div className='container'>{ component }</div>
  </>
  )
      
}

export default App;

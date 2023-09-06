import AboutMe from "./component/AboutMe"
import Intro from "./component/Intro"
import SectionTitle from "./component/SectionTitle"

function App() {
  return (
     <>
     <Intro/>
     <SectionTitle subTitle="Get To Know More" mainTitle='About Me' ></SectionTitle>
     <AboutMe/>
     <SectionTitle subTitle="Explore My" mainTitle='Experience'/>
     </>
   
  )
}

export default App

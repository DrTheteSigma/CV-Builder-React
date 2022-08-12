import EduExp from "./components/EduExp";
import Geninfo from "./components/Geninfo";
import WorkExp from "./components/WorkExp";


function App() {
  return (
    
    <div className="main">
  
      <div className="center" style={{fontSize: "36px"} } >CV Builder</div>
      <div className="center" style={{fontSize: "32px"}}>General Information</div>
      <Geninfo></Geninfo>

      <div className="center" style={{fontSize: "32px"} }>Educational Experience</div>
      <EduExp></EduExp>

      
      <div className="center" style={{fontSize: "32px"} }>Work Experience</div>
      <WorkExp></WorkExp>

      

    </div>
  );
}

export default App;

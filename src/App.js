import logo from './logo.svg';
import './App.css';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import JobInformation from "./components/JobInformation";
import PersonalInformationComponent from "./components/PersonalInformationComponent";
import EmergencyContactInformationComponent from './components/EmergencyContactInformationComponent';
function App() {
  return (
    <div>
      <HeaderComponent />
      <div>
        <JobInformation />
      </div>
      <div>
        <PersonalInformationComponent />
      </div>
      <div>
        <EmergencyContactInformationComponent />
      </div>
      <div>
        <br />
      </div>
      <div>
        <SaveComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
      
    </div>
  );
}

export default App;


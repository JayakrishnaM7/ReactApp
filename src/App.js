import logo from './logo.svg';
import './App.css';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import JobInformation from "./components/JobInformation";
import PersonalInformationComponent from "./components/PersonalInformationComponent";
import EmergencyContactInformationComponent from './components/EmergencyContactInformationComponent';
import SaveComponent from './components/SaveEmployeeComponent';
import SaveEmployeeComponent from './components/SaveEmployeeComponent';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div>
      <CreateEmployee />
      
      <div>
        <FooterComponent />
      </div>
      
    </div>
  );
}

export default App;


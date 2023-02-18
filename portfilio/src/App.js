import "./App.css";
import MatrixRain from "./Components/MatrixRain";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      {/* <MatrixRain /> */}
      <PortfolioContainer />
    </div>
  );
}

export default App;

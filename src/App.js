import './App.css';
import Overlay from './component/Overlay'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <div className="App">

          <BrowserRouter>
            <Overlay />
          </BrowserRouter>

    </div>
  );
}

export default App;

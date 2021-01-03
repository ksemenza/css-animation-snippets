import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Home Page Container</h1>
      <div className='contact-wrap'>
        <div className='test tool-test' data-tooltip={'781-866-1073'}>
        <div className='test tool-test' data-tooltip={'ksemenza.247@gmail.com'}>
            <div className='test tool-test' data-tooltip={'Kim Semenza'}>
              <p className='test hover-test'>About</p>
              </div>
          
        </div>
        </div>
        </div>
        

      <div className='envelope' data-tooltip='Project Title' >
        <div className='hidden-content'>
          <h3>Projects</h3>
          <p>This Is A test Just a test</p>
        </div>
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import { HashRouter, Routes ,Route,} from 'react-router-dom'
import './App.css';
import Test from './test/Test';
import Main from './test/Main';
import Result from './test/Result';

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/result" element={<Result/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
            <Route path="/" element={<Main/>}></Route>
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;

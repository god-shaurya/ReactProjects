
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = ()=> {
 const [progress, setprogress] = useState(0)
  
  
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress} />

          <Routes>
            <Route path="/" element={<News setProgress={setprogress} key='general' pageSize={5} country='in' category='general' />}></Route>
            <Route path="/Business" element={<News setProgress={setprogress} key='business' pageSize={5} country='in' category='business' />}></Route>
            <Route path="/entertainment" element={<News setProgress={setprogress} key='entertainment' pageSize={5} country='in' category='entertainment' />}></Route>
            <Route path="/general" element={<News setProgress={setprogress} key='general' pageSize={5} country='in' category='general' />}></Route>
            <Route path="/health" element={<News setProgress={setprogress} key='health' pageSize={5} country='in' category='health' />}></Route>
            <Route path="/science" element={<News setProgress={setprogress} key='science' pageSize={5} country='in' category='science' />}></Route>
            <Route path="/sports" element={<News setProgress={setprogress} key='sports' pageSize={5} country='in' category='sports' />}></Route>
            <Route path="/technology" element={<News setProgress={setprogress} key='technology' pageSize={5} country='in' category='technology' />}></Route>

          </Routes>
        </Router>
      </div>
    )
  
}
export default App;


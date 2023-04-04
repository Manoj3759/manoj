import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Read from './CURD/Read';
import Create from './CURD/Create';
import Update from './CURD/Update';

const App = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Create/>}/>
              <Route path="/view" element={<Read />}/>
              <Route path="/update/:id" element={<Update/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
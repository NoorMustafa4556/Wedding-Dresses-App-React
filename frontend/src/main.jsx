

//import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowAll from './ShowAll.jsx';
import AddDress from './AddDress.jsx';
import UpdateDress from './UpdateDress';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowAll />} />
        <Route path="/adddress" element={<AddDress />} />
        <Route path="/updatedress/:DressID" element={<UpdateDress />} /> {/* Ensure parameter matches */}
      </Routes>
    </BrowserRouter>
  //</StrictMode>,
);

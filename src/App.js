import logo from "./logo.svg";
import "./App.css";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="page1" element={<Page1/>} />
        <Route path="page2" element={<Page2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import App8 from "./components/App8";
import App9 from "./components/App9";
import App10 from "./components/App10";
import App11 from "./components/App11";
import App12 from "./components/App12";
import Main from "./components/Main";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="app1">App1</Link>
      <Link to="app2">App2</Link>
      <Link to="app3">App3</Link>
      <Link to="app4">App4</Link>
      <Link to="app5">App5</Link>
      <Link to="app6">App6</Link>
      <Link to="app7">App7</Link>
      <Link to="app8">App8</Link>
      <Link to="app9">App9</Link>
      <Link to="app10">App10</Link>
      <Link to="app11">App11</Link>
      <Link to="app12">App12</Link>
      {/* <Link to="app12">Main</Link>
      <Link to="Child1">Child1</Link>
      <Link to="Child2">Child2</Link> */}
    </div>
    <hr></hr>
    <div>
      <Routes>
        <Route index element={<App1/>}></Route>
        <Route path="app1" element={<App1/>}></Route>
        <Route path="app2" element={<App2/>}></Route>
        <Route path="app3" element={<App3/>}></Route>
        <Route path="app4" element={<App4/>}></Route>
        <Route path="app5" element={<App5/>}></Route>
        <Route path="app6" element={<App6/>}></Route>
        <Route path="app7" element={<App7/>}></Route>
        <Route path="app8" element={<App8/>}></Route>
        <Route path="app9" element={<App9/>}></Route>
        <Route path="app10" element={<App10/>}></Route>
        <Route path="app11" element={<App11/>}></Route>
        <Route path="app12" element={<App12/>}></Route>
        {/* <Route path="Main" element={<Main/>}></Route>
        <Route path="app12" element={<App12/>}></Route>
        <Route path="app12" element={<App12/>}></Route> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App
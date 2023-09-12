// import './App.css';
import React from 'react';

import {RouterProvider,createBrowserRouter, createHashRouter} from'react-router-dom';
import Layout from "./Components/Layout/Layout";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';




let routers=createHashRouter([
  {
    path:'',element:<Layout/>,children:[
      { index:true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> },

    ]
  }
])
export default function App(){

  return <RouterProvider router={routers}></RouterProvider>
}





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
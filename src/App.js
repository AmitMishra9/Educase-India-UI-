import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Main from "./main/Main";
import Registered from "./Registered/Registered";
import Login from "./Login/Login";
import User from "./Registered/User";

const routeConfig = [
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Registered/>,
  },
  {
    path: "/user",
    element: <User/>,
  },
];


const routes=createBrowserRouter(routeConfig);

function App() {
  return (
    <div className="layout">
        
      <RouterProvider router={routes}/>      
      
      

    </div>
    
  );
}

export default App;

 /*<Login/> <Registered/>  <Main/>  */

import Body from './components/Body';
import Header from './components/Header';
import Search from './components/Search';
import MainContainer from './components/MainContainer';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
     {
      path:'search',
      element:<Search/>
     }
    ]
  },
 
  
]);
function App() {
  return (
    <div>
        <Header></Header>
        <RouterProvider router = {router}/>

    </div>
  );
}



export default App;

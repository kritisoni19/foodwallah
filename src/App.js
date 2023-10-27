
import Body from './components/Body';
import Header from './components/Header';
import Search from './components/Search';

import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
        <Header></Header>
        <RouterProvider router ={router}/>
        <Outlet></Outlet>
    </div>
  );
}
const router = createBrowserRouter([
  {
      path:'/',
      element:<Body/>,
      children:[
          {
              path:'/search',
              element:<Search/>
          }
      ]
  }
])

export default App;


import Body from './components/Body';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Contact from './components/Contact';
import TopRestaurant from './components/TopRestaurant';
import RestaurantMenu from './components/RestaurantMenu';

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <TopRestaurant />,
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      }
    ]
  }
 
  
]);
function App() {

  return (
    <div>
        <RouterProvider router = {approuter}/>
    </div>
  );
}



export default App;

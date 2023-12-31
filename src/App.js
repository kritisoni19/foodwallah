
import Body from './components/Body';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Contact from './components/Contact';
import TopRestaurant from './components/TopRestaurant';
import RestaurantMenu from './components/RestaurantMenu';
// import Help from './components/Help';
import { Provider } from 'react-redux';
import store from './utils/store';
import {lazy,Suspense} from 'react';

const Help = lazy(()=>import('./components/Help'));

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
      path:'/help',
      element:<Suspense><Help/></Suspense>
    },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      },
      
    ]
  }
 
  
]);
function App() {

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router = {approuter}/>
      </Provider>
       
    </div>
  );
}



export default App;

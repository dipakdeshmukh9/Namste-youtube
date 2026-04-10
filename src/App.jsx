import { Provider } from "react-redux"
import Body from "./components/Body"
import Head from "./components/Head"
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    children : [
      {
        path : "/",
        element : <VideoContainer/>
      },
      {
        path : "/watch",
        element : <WatchPage/>
      }
    ]
  },
  
])



function App() {

  return (
    <Provider store={store}>
    <div>
    <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>

  )
}

export default App

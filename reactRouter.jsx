import React from "react";
import Route, {RouterProvider}, {createBrowserRouter}, {createRoutesFromElement} from 'react-router-dom'

const router= createBrowserRouter(createRoutesFromElement(
    <Route path="/" element={<Todo/>}>
<Route path='' element={<Home/>}/>
<Route path='saved' element={<Saved/>}/>
<Route path='user/:userId' element={<User/>}
errorElement={<NotFoundPage/>}/>
    </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(
    
        <React.StrictMode>
<RouterProvider router={router}/>
        </React.StrictMode>

)
import React from "react";
import { Outlet} from "react-router-dom";
import NavMenu from './components/NavMenu'




export default function App() {
    return(
     <>
     <NavMenu />
      <main className="mx-3">
        <Outlet />
      </main>
     </>
      
    )

}



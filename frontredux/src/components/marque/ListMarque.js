import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMarques } from "../../features/marqueSlice";
import AfficheMarques from "./AfficheMarques";


const ListMarques = () => {
    

    const dispatch = useDispatch();
    
    useEffect(() => {
    
   dispatch(getMarques());
   console.log("L'action getMarques() a été dispatchée !");
   
    },[dispatch]);

  return (
    <div>
              <AfficheMarques/>
    </div>
  )
}

export default ListMarques

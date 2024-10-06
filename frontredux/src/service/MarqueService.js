
import Axios from "../Axios/Api"
const Marque_API="/marque"
   


    export const fetchMarques=async()=> {
        return await Axios.get(Marque_API)
         
        }

       
     export const fetchMarqueById=async(marqueID)=> {
        return await Axios.get(Marque_API + '/' + marqueID);
        }
    export const delMarque=async(marqueID) =>{
        return await Axios.delete(Marque_API + '/' + marqueID);
        }
     export const addMarque=async(marque)=> { 
        return await Axios.post(Marque_API, marque);
    
        }    
     export const editMarque=(_id,marque) =>{ 
        return Axios.put(Marque_API + '/' + _id, marque);
    
        }
        
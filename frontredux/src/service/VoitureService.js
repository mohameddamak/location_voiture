import Axios from "../Axios/Api"
const Voiture_API="/voiture"
   


    export const fetchVoitures=async()=> {
        return await Axios.get(Voiture_API)
         
        }

       
     export const fetchVoitureById=async(voitureID)=> {
        return await Axios.get(Voiture_API + '/' + voitureID);
        }
    export const delVoiture=async(voitureID) =>{
        return await Axios.delete(Voiture_API + '/' + voitureID);
        }
     export const addVoiture=async(voiture)=> { 
        return await Axios.post(Voiture_API, voiture);
    
        }    
     export const editVoiture=(_id,voiture) =>{ 
        return Axios.put(Voiture_API + '/' + _id, voiture);
    
        }
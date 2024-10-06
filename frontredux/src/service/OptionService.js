import Axios from "../Axios/Api"
const Option_API="/option"
   


    export const fetchOptions=async()=> {
        return await Axios.get(Option_API)
         
        }

       
     export const fetchOptionById=async(optionID)=> {
        return await Axios.get(Option_API + '/' + optionID);
        }
    export const delOption=async(optionID) =>{
        return await Axios.delete(Option_API + '/' + optionID);
        }
     export const addOption=async(option)=> { 
        return await Axios.post(Option_API, option);
    
        }    
     export const editOption=(_id,option) =>{ 
        return Axios.put(Option_API + '/' + _id, option);
    
        }
        
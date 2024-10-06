import Axios from "../Axios/Api"
const Reservation_API="/reservation"
   


    export const fetchReservations=async()=> {
        return await Axios.get(Reservation_API)
         
        }

       
     export const fetchReservationById=async(reservationID)=> {
        return await Axios.get(Reservation_API + '/' + reservationID);
        }
    export const delReservation=async(reservationID) =>{
        return await Axios.delete(Reservation_API + '/' + reservationID);
        }
     export const addReservation=async(reservation)=> { 
        return await Axios.post(Reservation_API, reservation);
    
        }    
        export const confirmReservation = async (reservationID) => {
         return await Axios.post(Reservation_API +'/'+ reservationID);
     }
     export const editReservation=(_id,reservation) =>{ 
        return Axios.put(Reservation_API + '/' + _id, reservation);
    
        }
        


export function AddeventAction(UserDate:any){
    return{
    type:'selected_date',
    payload: UserDate
    }
}
export const selectDate=(selectedDate:any)=>{
    return{
     type:'selected_date',
     payload: selectedDate
     }
 }

 export const incdate = (date : any) => {
    return {
    type : "IncDateclick",
    payload : date.target.dataset.val
    }
   }

   export const decdate = (date : any) => {
    return {
    type : "DecDateclick",
    payload : date.target.dataset.val
    }
   }
    export const addEvent = (event : any) => {
        let eventObj = {
        startDate : new Date(getTimezoneDifference(event.target["1"].valueAsNumber)) || "",
        endDate : new Date(getTimezoneDifference(event.target["2"].valueAsNumber)) || "",
        title : event.target["0"].value || ""
        
    }
    return {
    type : "Addevent",
    payload : eventObj
    }
   }

   export const deleteEvent = (event : any) =>{
    return {
        type : "deleteEvent",
        payload : event
    }
}

export const updateEvent = (event : any) => {
    return {
        type : "updateEvent",
        payload : event
    }
}


   export const getTimezoneDifference = (time : any) =>{
      return time + new Date().getTimezoneOffset()*60*1000
    }
       

    export const adjustDatepickerTime = (date : any) => {
    let myDate = new Date(date);
    let month = (myDate.getMonth() + 1) < 10 ? `0${myDate.getMonth() + 1}` : `${myDate.getMonth() + 1}`
    let hours = (myDate.getHours()) < 10 ? `0${myDate.getHours()}` : `${myDate.getHours()}`
    let minuts = (myDate.getMinutes()) < 10 ? `0${myDate.getMinutes()}` : `${myDate.getMinutes()}`
    let seconds = (myDate.getSeconds()) < 10 ? `0${myDate.getSeconds()}` : `${myDate.getSeconds()}`
    return `${myDate.getFullYear()}-${month}-${myDate.getDate()}T${hours}:${minuts}:${seconds}.${myDate.getMilliseconds()}`
}
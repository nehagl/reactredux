
// import Moment from 'moment';
// import moment = require("moment");
import {getTimezoneDifference} from '../actions/index'; 

const Data= [
    {
        "startTime": "Jan 22 2019 09:30:00",
        "endTime": "Jan 22 2019 11:00:00",
        "title": "Event 1",
        "id": 1
    },
    {
        "startTime": "Jan 22 2019 10:30:00",
        "endTime": "Jan 22 2019 11:00:00",
        "title": "Event 2",
        "id": 2
    },
    {
        "startTime": "Jan 23 2019 10:30:00",
        "endTime": "Jan 23 2019 12:15:00",
        "title": "Event 3",
        "id": 3
    },
    {
        "startTime": "Jan 21 2019 12:30:00",
        "endTime": "Jan 21 2019 01:15:00",
        "title": "Event 4",
        "id": 4
    },
    {
        "startTime": "Jan 21 2019 02:30:00",
        "endTime": "Jan 21 2019 03:15:00",
        "title": "Event 4",
        "id": 5
    },
    {
        "startTime": "Jan 21 2019 4:30:00",
        "endTime": "Jan 21 2019 5:15:00",
        "title": "Event 4",
        "id": 6
    }
]

export default function (state:any=Data, action:any){
{
    switch(action.type)
    {
  
    case "Addevent" :
        let startDate = new Date(action.payload.startDate)
        let endDate = new Date(action.payload.endDate)
        console.log("hello");
        let eventObj = {
        startTime : startDate.toString(),
        endTime : endDate.toString(),
        // id : state.events
        // [state.events.length -1 ].id + 1,
        title : action.payload.title,
        // agenda : action.payload.agenda
        id : state[state.length -1].id + 1,
        } 
        state = [...state, eventObj]
        return  state

    case "deleteEvent" : 
        state = state.filter((ele :any) => ele.id != parseInt(action.payload.id))
        return state


    case "updateEvent" : 
         let updateObj = {
         startDate : new Date(getTimezoneDifference(action.payload.target["1"].valueAsNumber)).toString() || "",
         endDate : new Date(getTimezoneDifference(action.payload.target["2"].valueAsNumber)).toString() || "",
         title : action.payload.target["0"].value || "",
         id : parseInt(action.payload.target["3"].value) || ""
        }
        let foundItem = state.find((ele :any)=> ele.id == updateObj.id)
        foundItem.id = updateObj.id;
        foundItem.startTime = updateObj.startDate;
        foundItem.endTime = updateObj.endDate;
        foundItem.title = updateObj.title
        state = state.filter((ele : any)=> ele.id != updateObj.id)
         return [...state, foundItem]
        default :
      return state
 }
}


}
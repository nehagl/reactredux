import * as React from "react";
import { addEvent } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { adjustDatepickerTime } from "../actions/index"

const updateComponent = (event: any, updateFun : any) => {
    let startPickerValue = adjustDatepickerTime(event.location.params.event.startTime)
    let endPickerValue = adjustDatepickerTime(event.location.params.event.endTime)
    let handleSubmit = (data :any) => {
        try {
            event.location.params.updateFun(data)
            event.history.push('/');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="divstyle">
  <h1 className="headclass">Update Event</h1>
  <form onSubmit={handleSubmit} className="formclass">
     <label>Title</label>
     <input required type="text" placeholder="Title"  defaultValue={event.location.params.event.title}/><br />
     <label>Enter start date</label>
     <input type="datetime-local" defaultValue={adjustDatepickerTime(event.location.params.event.startTime)}/>
     <label>Enter end date</label>
     <input type="datetime-local" defaultValue={adjustDatepickerTime(event.location.params.event.endTime)}/>
     <input type="text" value={event.location.params.event.id}></input>
     <input type="submit" className="buttonclass" value="submit"/>
    {/* <button className="buttonclass" >Submit Event</button><br></br> */}
  </form>
  </div>
    )   
}

const mapDispatchToProps = (dispatch : any) => {
    // return bindActionCreators({updateFun : this.updateFun}, dispatch)
}

export default connect(null,mapDispatchToProps)(updateComponent)
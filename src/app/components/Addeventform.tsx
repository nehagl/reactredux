
import * as React from 'react';
import  './customstyle.css';
import {bindActionCreators} from 'redux';
import {addEvent} from '../actions/index';

import {connect} from 'react-redux';


interface IProps {
  addEvent ? (event : any):any,

  history:any
}
class addeventform extends React.Component<IProps, {}> {

   render() {
     const handlesubmit=(event:any)=>
     {
       this.props.addEvent(event)
       this.props.history.push('/');
       console.log(event);
     }
     
   return (
  <div className="divstyle">
  <h1 className="headclass">Create Event</h1>
  <form onSubmit={handlesubmit} className="formclass">
     <label>Title</label>
     <input required type="text" placeholder="Title" /><br />
     <label>Enter start date</label>
     <input type="datetime-local"/>
     <label>Enter end date</label>
     <input type="datetime-local" />
  
     <input type="submit" className="buttonclass" value="submit"/>
    {/* <button className="buttonclass" >Submit Event</button><br></br> */}
  </form>
  </div>
   );
  }
}


// const mapStateToProps=(state:any)=>{
//   return {
//      todaysdate:state.todaysdate
//   };
// }

const mapDispatchToProps=(dispatch:any)=>{
  return bindActionCreators({addEvent:addEvent},dispatch);
 
  }
  export default connect(null,mapDispatchToProps)(addeventform)
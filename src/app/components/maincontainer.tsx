import * as React from 'react';
//import Header from './header';
//import Container from './container';
// import {AddForm} from './Addform';
//import {eventlist} from './eventlist';
import  './customstyle.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route,Link, withRouter } from 'react-router-dom';
import {deleteEvent, updateEvent} from '../actions/index';

import {bindActionCreators} from 'redux';
import valueList from './valuelistcom';
import { element } from 'prop-types';

interface IProps {
  eventList:any,
  todaysdate:any,
  valueList:any,
  listFilter1:any,
  deleteEvent:any,
  updateEvent:any,

}
class Maincontainer extends React.Component<IProps,{}> {
   constructor(props:any){
      super(props);
   }

 filterdata = () => { 
    return this.props.listFilter1.filter((ele:any)=>{
      // return new Date(ele.startTime)==this.props.todaysdate;
      return new Date(ele.startTime).toDateString()==this.props.todaysdate.toDateString();
    });
   }
   componentWillMount(){
     console.log( this.props.eventList);
   }

   render() {
   
             let list = this.filterdata()
              return list.map((ele:any) =>{
                let x = `${new Date(ele.startTime).getHours()} : ${new Date(ele.startTime).getMinutes()}`
                let y = `${new Date(ele.endTime).getHours()}: ${new Date(ele.endTime).getMinutes()}`
                
                let count=0;
                count = count+1;
                console.log(count);
                let startTime = new Date(ele.startTime).getHours().toString();
                let endTime = new Date(ele.endTime).getHours().toString();
                let gapdistance = parseInt(endTime)-parseInt(startTime);
                let heightstyle=gapdistance*38;
                if(gapdistance==0)
                {
                  gapdistance=1;
                }
                let stringheight=heightstyle.toString()+'px';
                let shiftleft = 6*count;
                 console.log("startTime"+startTime+" EndTime="+endTime+" gapdistance="+gapdistance);
                return <div>
               <div>

               <div className="wrapper">
               <article className="main">
               <table className="td2" style={{height:heightstyle.toString()+'px',left:shiftleft.toString()+'%'}} >
               <tbody className="brclass">
               <tr className="trclass">
                 {/* <td>
                   {ele.title},{ele.startTime},{ele.endTime},{ele.id}
                </td> */}
                <td>
                     {ele.title},<br></br>{x},{y}
                     
                </td>

               <td> 
                  <Link to={{
                            pathname : "/update",
                            params : {event : ele, updateFun : this.props.updateEvent}
                            }}>  <button className="buttonclass">Edit</button></Link></td>
               
               <td> <button className="buttonclass" onClick={()=>this.delete(ele)}>Delete</button>
               
               </td>
               </tr>
               </tbody>
               </table>
               </article>
               </div> 

               
            </div>
         </div>
          });
   }

   delete=(ele:any)=>{
     this.props.deleteEvent(ele);
   }
}

const mapStateToProps=(state:any)=>{
   return {
   eventList: state.eventList,
   todaysdate: state.todaysdate,
   valueList:state.valueList,
  
   };
   }

   const mapDispatchToProps=(dispatch:any)=>{
    return bindActionCreators({deleteEvent : deleteEvent,updateEvent:updateEvent},dispatch);
   
    }
  
   export default connect(mapStateToProps,mapDispatchToProps)(Maincontainer)


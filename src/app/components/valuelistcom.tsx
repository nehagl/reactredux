import * as React from 'react';
import  './customstyle.css';
import {connect} from 'react-redux';
import Maincontainer from './maincontainer';
import { any } from 'prop-types';

interface IProps {
    eventList:any,
    todaysdate:any,
    valueList:any
}
export class ValueList extends React.Component<IProps, {}> {
    constructor(props:any){
        super(props);
     }
     filterdata = (list:any) => { 
        return list.filter((ele:any)=>{
          // return new Date(ele.startTime)==this.props.todaysdate;
          return new Date(ele.startTime).toDateString()==this.props.todaysdate.toDateString();
        });
       }

     filtertime = (list:any,time:any) => { 
        return list.filter((ele:any)=>{
          // return new Date(ele.startTime)==this.props.todaysdate;
          //return new Date(ele.startTime).getHours()==time.value;
          let hours=new Date(ele.startTime).getHours();
          let min=new Date(ele.startTime).getMinutes();
          let m= hours>=12 ? 'PM': 'AM';
          hours=hours % 12;
          return (hours==time.value && m ==time.zone);
        });
     }

     rendervalueListdata=()=>{
        console.log("list");
        let todaysEvent=this.filterdata(this.props.eventList);
        return this.props.valueList.map((ele:any)=>{
            let timeRange= this.filtertime(todaysEvent,ele);
            return ( 
            <div className="wrapper">
            <article className="main">
            <div className="timeAxis">{ele.value}{ele.zone}</div>
            <Maincontainer listFilter1={timeRange}/>
               {/* <div className="timeline"></div> */}
               </article>
          </div> 
         )
        });
      }
      render(){
          return <div>{this.rendervalueListdata()}</div>
      }

    }

const mapStateToProps=(state:any)=>{
    return {
    eventList: state.eventList,
    todaysdate: state.todaysdate,
    valueList:state.valueList,
    };
 }
 
    export default connect(mapStateToProps)(ValueList)
// export default PostForm;
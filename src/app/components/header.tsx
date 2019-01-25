import * as React from 'react';
 //import Moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import {bindActionCreators} from 'redux';
import {selectDate} from '../actions/index'; 
import {connect} from 'react-redux';
import  './customstyle.css';
import { BrowserRouter as Router, Route,Link, withRouter } from 'react-router-dom';
import { ReactReduxContext } from 'react-redux';
interface IProps {
   // reducerdate:any,
   todaysdate:any,
   selectDate:any
}
export  class Header extends React.Component<IProps,{}> {
   constructor(props:any){
         super(props);
      }

   render() {
      
      // var today = new Date();
      // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // var dateTime = date+' '+time;
          var formatDate = (date : Date) => {
          let month = date.toLocaleString('en-us',{month : 'short'})
          let day = date.getDate();
          let year = date.getFullYear();
          return `${day} ${month}, ${year}`
        }
      //   formatDate =  
      //   var d = new Date();
      //   var date = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() ;
      //   const currDate = date;

         // var moment = require('moment');
         // moment.locale('cs');
         // console.log(moment.locale());

      //   const moment = require('moment');

      //    let now = moment();
      //    console.log(now.format());

      //  var a = Moment(new Date).format('MMM Do YY');
      //  var b = a.add(1, 'week'); 
      // a.format();
    
   return ( <header className="header">
             <div className="alicenter">
           <button className="buttonclass" onClick={()=>{this.props.selectDate(new Date())}}>Today</button>
               <button  className="arrowclass" onClick={()=>{this.predate(-86400000)}}>&laquo;Previous</button>
               <button  className="arrowclass" onClick={()=>{this.predate(86400000)}}>&laquo;Next</button>
               {/* <div >{this.props.todaysdate.getDate()}</div> */}
             {/* <label className="labelclass"> {formatDate(new Date)}</label> */}
               <div className="buttonclass"><Moment format ="Do MMM YY">{this.props.todaysdate}</Moment></div> 
                {/* <label>{cdate}</label> */}
                {/* <button className="buttonclass">Add */}
                <Link to='/AddEvent' className="buttonclass">addEvent</Link>
                {/* </button>    */}
             </div>
          </header>)
        }
      predate =(data:number)=>
      {
         let l = this.props.todaysdate;
        // let m = this.props.newformatdate;
         let n = new Date(l.getTime() +data);
         this.props.selectDate(n);
        // formatDate(n);
      // let pdate =new Date(formatDate.getTime() +data);
      }
   }

 const mapStateToProps=(state:any)=>{
      return {
         todaysdate:state.todaysdate
      };
   }

 const mapDispatchToProps=(dispatch:any)=>{
      return bindActionCreators({selectDate:selectDate},dispatch);
     
      }
 //export default connect(mapStateToProps,mapDispatchToProps)(Header)
 
export default connect(mapStateToProps,mapDispatchToProps)(Header)

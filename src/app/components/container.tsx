import * as React from 'react';
import  './customstyle.css';
//import React from 'react';

//import { connect } from 'react-redux';

interface IProps {
  
}
export default class Container extends React.Component<IProps, {}> {
   constructor(props:any) {
      super(props);
      
    this.state = {
   eventList: [
         {
             "startTime": "Sun May 24 2017 01:00:00 GMT+0530 (IST)",
             "endTime": "Sun May 24 2017 01:30:00 GMT+0530 (IST)",
             "title": "Event 1",
             "id": 1
         },
         {
             "startTime": "Sun May 24 2017 04:00:00 GMT+0530 (IST)",
             "endTime": "Sun May 24 2017 06:00:00 GMT+0530 (IST)",
             "title": "Event 2",
             "id": 2
         },
         {
             "startTime": "Sat May 23 2017 20:00:00 GMT+0530 (IST)",
             "endTime": "Sat May 23 2017 21:30:00 GMT+0530 (IST)",
             "title": "Event 3",
             "id": 3
         },
         {
             "startTime": "Sat May 23 2017 21:30:00 GMT+0530 (IST)",
             "endTime": "Sat May 23 2017 22:15:00 GMT+0530 (IST)",
             "title": "Event 4",
             "id": 4
         }
       ],
     }
  
   }
   render() {
   return (<div className="wrapper">
  
   <article className="main">
      <table  className="td2">
		<tr>
        <td>  <label >1 AM:</label></td>
			<td className="spce">standup  9:30-10:30AM</td>
			<td> <button className="buttonclass">Edit</button></td>
         <td> <button className="buttonclass">Delete</button></td>
			
		</tr>
		<tr>
      <td> <label >2 AM:</label></td>
			<td className="spce">2-21</td>
			<td> <button className="buttonclass">Edit</button></td>
         <td> <button className="buttonclass">Delete</button></td>
			
		</tr>
      <tr>
      <td> <label >3 AM:</label></td>
			<td className="spce">Meeting 10:30-11:30AM</td>
			<td> <button className="buttonclass">Edit</button></td>
         <td> <button className="buttonclass">Delete</button></td>
			
		</tr>
		<tr>
      <td> <label >4 AM:</label></td>
			<td className="spce">2-21</td>
			<td> <button className="buttonclass">Edit</button></td>
         <td> <button className="buttonclass">Delete</button></td>
		</tr>
      <tr>
      <td> <label >5 AM:</label></td>
			<td className="spce">2-11</td>
			<td> <button className="buttonclass">Edit</button></td>
         <td> <button className="buttonclass">Delete</button></td>
			
		</tr>
		<tr>
      <td> <label >1 AM:</label></td>
			<td className="spce">2-21</td>
			<td> <button className="buttonclass">Edit</button></td>
         <td> <button className="buttonclass">Delete</button></td>
			
		</tr>
	
		</table>

   </article>
     <aside className="aside aside-1"></aside>
     <aside className="aside aside-2"></aside>
  
    </div>
   ) 
 
   }
}


 
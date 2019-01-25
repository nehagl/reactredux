export default function(state:any=new Date(),action:any){
    switch(action.type){
     case 'selected_date':
     return action.payload
     }
    return state
    
    }
    
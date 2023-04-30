import React,{useState,useEffect} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount:250,
    date:new Date(2021, 5 ,12)
  },
  {
    id: 'e2',
    title: 'Dress',
    amount:200,
    date:new Date(2021, 5 ,15)
  },
  {
    id: 'e3',
    title: 'Books',
    amount:350,
    date:new Date(2021, 5 ,11)
  },
  {
    id: 'e4',
    title: 'Pen',
    amount:50,
    date:new Date(2021, 5 ,16)
  },

];

const  App = () => {


  const [expenses , setExpenses] = useState(DUMMY_EXPENSE);
   
// GEt Request
                // function fetchData(){
                //   fetch('http://localhost/sample-api/api/read.php')
                //   .then(response => { return response.json(); })
                //   .then( data =>
                //                 { 
                //                    console.log(data);
                //                    setExpenses(data);
                //                 }
                //   );
                // }


    
  //     useEffect(() =>{
  //            fetchData()  
  //     },[]);
  
   
   const addExpenseHandler = (expense) =>{
            
        // now post to send and save data in database
        // fetch('url' , {
        //   method:'POST',
        //   body:JSON.stringify(expense),
        //   headers:{
        //     'content-Type' : 'application/Json'
        //   }
        // }).then(
        //   response =>{
        //     fetchData();
        //   }
        // );

         const updateExpense = [expense , ...expenses ];
         setExpenses(updateExpense);
   };

    return (
        <div>
          {/* <h1>Welcome!!😊😊</h1> */}
           <NewExpense onAddExpense ={ addExpenseHandler}/>  
          <Expenses item = {expenses}/>
    </div>
    );
}

export default App;
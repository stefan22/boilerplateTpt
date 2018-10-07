console.log('reduXpnsfy');
import { createStore, combineReducers } from 'redux';

// Expenses reducer
const expensesReducer = (state = [], action) => {
  switch (action.type) {
     default:
      return state;

  }// switch

};// expensesReducer




const store = createStore(
   combineReducers({
      expenses: expensesReducer
   })

); // store


console.log(store.getState());



// Filters reducer





// state store

const demoState = {
   expenses: [
      {
         id: 's1002bz',  //7-length
         description: 'June rent',
         note: 'final payment before moving out',
         amount: 150000,  //no decimal rent in pence - added twozeros
         createdAt: 0  //as timestamp
      }
   ],
   filters: {
      text: 'rent',
      sortBy: 'amount', //date or amount
      startDate: undefined //date range
   }

};
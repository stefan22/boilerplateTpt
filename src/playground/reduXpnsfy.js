console.log('redux iso');

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//reducers defaults
const expensesDefault = [];
const employeeDefault = [];
const filterDefault = {
   text: '',
   description: '',
   note: '',
   amount: 0,
   createAt: 0,
   id: uuid(),
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
};

// expensesReducer
const expensesReducer = (state = expensesDefault, action) => {
   switch (action.type) {
      case 'ADD_EXPENSE':
         return [
            ...state,action.expense
         ];
      default:
         return state;

   }//switch

};// expensesReducer


// filterReducer
const filterReducer = (state = filterDefault, action) => {
   switch (action.type) {
      case 'TEXT':
         return state;
      case 'SORT_BY':
         return state;
      case 'START_DATE':
         return state;
      case 'END_DATE':
         return state;
      default:
         return state;

   }// switch

}; // filterReducer


// employeeReducer
const employeeReducer = (state = employeeDefault, action) => {
   switch (action.type) {
      default:
         return state;

   }// switch

};// employeeReducer


// store
const store = createStore(combineReducers({
   expenses: expensesReducer,
   employee: employeeReducer,
   filter: filterReducer
}));

// subscribe
store.subscribe(() => {
   console.log(store.getState());
});

// action gen
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	},
});// addExpense

//add expense dispatch
const julyExpense = store.dispatch(addExpense({
   description: 'july rent',
   amount: 12000,
   note: 'paid in full'
}));

const juneExpense = store.dispatch(addExpense({
   description: 'june rent',
   amount: 12000,
   note: 'paid in full'
}));

const janExpense = store.dispatch(addExpense({
   description: 'january rent',
   amount: 14000,
   note: 'last month at old location'
}));

console.log(julyExpense);
console.log(janExpense);
console.log(juneExpense);




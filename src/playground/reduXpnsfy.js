console.log('redux iso');
import React from 'react';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/*
 reducers
--------
*/

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
            ...state,
            action.expense
         ];
      case 'REMOVE_EXPENSE':
         let narray = [];
         return state.filter((expense) => {
            if (expense.id !== action.id) {
               narray = [ ...expense];
               console.log(narray);
               return narray;
            }
         });

      case 'EDIT_EXPENSE':
         return state.map((expense) => {
            if (expense.id == action.id) {
               return {
                  ...expense,
                  ...action.updates
               }
            } else {
               return expense;
            }
         });

      default:
         return state;

   }//switch

};


// filterReducer
const filterReducer = (state = filterDefault, action) => {
   switch (action.type) {
		case 'SET_TEXT':
			if (action.text !== '') {
				return {
                ...state,
                text: action.text
            };
			} else {
            return state;
         }
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         }
		case 'SORT_BY_DATE':
			return {
            ...state,
            sortBy: 'date'
         }

		case 'START_DATE':
			return state;
		case 'END_DATE':
			return state;
		default:
			return state;
   }// switch

};


// employeeReducer
const employeeReducer = (state = employeeDefault, action) => {
   switch (action.type) {
      default:
         return state;

   }// switch

};



/*
 action generators
--------------------
*/

// addExpense
const addExpense = (
   { description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	},
});

// edit expense
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
   id,
	updates
});

// remove expense
const removeExpense = (id) => ({
   type: 'REMOVE_EXPENSE',
   id
});

// setText
const setText = () => ({
   type: 'SORT_BY_TEXT'

});

// sortByAmount
const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT'

});

// sortByDate
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});


// get visible expenses
const getVisibleExpenses = (expenses, filters) => {

   return expenses;

};


// store
const store = createStore(combineReducers({
   expenses: expensesReducer,
   employee: employeeReducer,
   filter: filterReducer
}));

// subscribe
const unsubscribe = store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses,state.filter);
   console.log(store.getState());
});







/*
 dispatch expenses
--------------------
*/

// julyExpense
const julyExpense = store.dispatch(addExpense({
   description: 'july rent',
   amount: 12000,
   note: 'paid in full'

}));

// juneExpense
const juneExpense = store.dispatch(addExpense({
   description: 'june rent',
   amount: 12000,
   note: 'paid in full'
}));

// janExpense
const janExpense = store.dispatch(addExpense({
   description: 'january rent',
   amount: 14000,
   note: 'last month at old location'
}));

// editJulyExpense
const editJulyExpense = store.dispatch(editExpense(
   julyExpense.expense.id, {
      description: 'rent discount',
      note: 'needs to be deducted from july',
      amount:500
}));

// removeJanuary
const removeJanuary = store.dispatch(removeExpense(janExpense.expense.id));

// setText
const textFilter = store.dispatch(setText({
   text: 'rent'
}));

// sortByAmount
const amountFilterBy = store.dispatch(sortByAmount({
   sortBy: 'amount'
}));

// sortByDate
const dateFilterBy = store.dispatch(sortByDate({
   sortBy: 'date'
}));




import { createStore } from 'redux';

const store = createStore((state={count:0}, action) => {
   switch (action.type) {
      case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
           count: state.count + incrementBy
        }
      case 'DECREMENT':
         const decreaseBy = typeof action.decreaseBy === 'number' ? action.decreaseBy : 0;
         return {
            count: state.count + decreaseBy
         }
      case 'SET':
         return {
            count: action.count
         }

      case 'RESET':
         const resetValue = typeof action.resetValue === 'number' ? action.resetValue : 0;
         return {
            count: state.count + resetValue
      };
      default:
         return state;
   }// switch

});// store

// store is registered
const unsubscribe = store.subscribe(() => {
   console.log(store.getState());
});


//actions
store.dispatch({
   type: 'INCREMENT',
   incrementBy: 5
});

store.dispatch({
	type: 'INCREMENT'
});



store.dispatch({
	type: 'RESET',
   resetValue: 100
});

store.dispatch({
	type: 'DECREMENT',
   decreaseBy: 10
});

store.dispatch({
   type: 'SET',
   count: 101
});


unsubscribe();

import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 5 } = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy,
	};
}; // incrementCount

const decreaseCount = ({ decreaseBy = 1 } = {}) => {
	return {
		type: 'DECREASE',
		decreaseBy,
	};
}; // decreaseCount

const resetCount = ({ reset = 0 } = {}) => {
	return {
		type: 'RESET',
		reset,
	};
};

const setCount = ({count}) => {
   return {
      type: 'SET',
      count
   };

};


const store = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREASE':
			return {
				count: state.count + action.decreaseBy,
			};
      case 'SET':
         return {
            count: action.count
         }
		case 'RESET':
			return {
				count: action.reset,
			};
		default:
			return state;
	} // switch
}); // store

// store is registered
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});


//actions
store.dispatch(incrementCount());
store.dispatch(decreaseCount());
store.dispatch(resetCount());
store.dispatch(setCount({count: 300}));

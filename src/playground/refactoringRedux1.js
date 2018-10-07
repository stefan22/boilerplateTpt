import { createStore } from 'redux';

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
			};
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

const incrementCount = (payload = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1,
	};
}; // incrementCount

const decreaseCount = (payload={}) => {
   return {
      type: 'DECREASE',
      decreaseBy: typeof payload.decreaseBy === 'number' ? payload.decreaseBy : 1
   };

}; // decreaseCount

const resetCount = (payload={}) => {
   return {
      type: 'RESET',
      reset: typeof payload.reset == 'string' ? Number(0) : 1
   };

};



//actions
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decreaseCount({decreaseBy: -1}));
store.dispatch(resetCount({reset: 'reset'}));


import React from 'react';

const EditExpenseComp = (props) => {
	return (
		<div>
			<h3>This is from Edit Expense id: {props.match.params.id}</h3>
		</div>
	);
}; // EditExpenseComp

export default EditExpenseComp;
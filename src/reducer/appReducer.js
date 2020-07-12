const appReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TRANSACTION': {
			let transactions = [...state.transactions];

			const { memo, amount } = action.payload;

			transactions.push({
				id: Math.random(),
				memo: memo,
				amount: amount,
			});

			return {
				...state,
				transactions: transactions,
			};
		}
		case 'DELETE_TRANSACTION': {
			let transactions = [...state.transactions];
			transactions = transactions.filter(
				(transaction) => transaction.id != action.payload.id
			);

			return {
				...state,
				transactions,
			};
		}
		default:
			return state;
	}
};

export default appReducer;

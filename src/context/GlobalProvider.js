import React, { useReducer } from 'react';
import appReducer from './../reducer/appReducer';

export const appContext = React.createContext();

const initialState = {
	balance: 0,
	transactions: [],
};

const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	const addTransaction = (memo, amount) => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: {
				memo,
				amount,
			},
		});
	};

	const deleteTransaction = (id) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: {
				id,
			},
		});
	};

	return (
		<appContext.Provider
			value={{
				balance: state.balance,
				transactions: state.transactions,
				addTransaction: addTransaction,
				deleteTransaction: deleteTransaction,
			}}
		>
			{props.children}
		</appContext.Provider>
	);
};

export default GlobalProvider;

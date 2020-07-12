import React, { useContext } from 'react';
import { appContext } from './../../context/GlobalProvider';

const Balance = () => {
	let { transactions } = useContext(appContext);

	let income = transactions
		.filter((transaction) => +transaction.amount > 0)
		.reduce((acc, current) => {
			return acc + current.amount;
		}, 0);

	let expense = transactions
		.filter((transaction) => +transaction.amount < 0)
		.reduce((acc, current) => {
			return acc + current.amount;
		}, 0);

	return (
		<div className="card border-secondary mb-3 " style={{ width: 400 }}>
			<div className="card-body d-flex flex-row justify-content-between">
				<h4 className="card-title">Balance</h4>
				<h4 className="card-title">
					${parseInt(income) + parseInt(expense)}
				</h4>
			</div>
		</div>
	);
};

export default Balance;

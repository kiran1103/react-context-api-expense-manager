import React, { useContext } from 'react';
import { appContext } from './../../context/GlobalProvider';

const Expense = () => {
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
		<div className="d-flex">
			<div
				className="card border-secondary mb-3 flex-fill mr-1"
				style={{ maxWidth: 195 }}
			>
				<div className="card-body  d-flex justify-content-between">
					<h4 className="card-title">Expense</h4>
					<h4 className="text-danger">${expense}</h4>
				</div>
			</div>
			<div
				className="card border-secondary mb-3 flex-fill ml-1"
				style={{ maxWidth: 195 }}
			>
				<div className="card-body d-flex justify-content-between">
					<h4 className="card-title">Income</h4>
					<h4 className="text-success">${income}</h4>
				</div>
			</div>
		</div>
	);
};

export default Expense;

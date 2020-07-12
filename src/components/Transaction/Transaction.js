import React, { useState, useContext } from 'react';
import { appContext } from './../../context/GlobalProvider';

const Transaction = () => {
	const [memo, setMemo] = useState('');
	const [amount, setAmount] = useState(0);
	const { addTransaction } = useContext(appContext);

	const onSubmit = () => {
		addTransaction(memo, +amount);
		setMemo('');
		setAmount(0);
	};

	return (
		<div className="mt-3">
			<h5>Add Transaction</h5>
			<hr />
			<form>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter memo"
						value={memo}
						onChange={(e) => setMemo(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						type="number"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						Enter negative number to add expense
					</small>
				</div>
				<div className="form-group"></div>
				<div className="form-group float-right">
					<button
						type="button"
						className="btn btn-primary"
						onClick={onSubmit}
					>
						Add Transaction
					</button>
				</div>
			</form>
		</div>
	);
};

export default Transaction;

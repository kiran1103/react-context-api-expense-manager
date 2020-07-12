import React, { useContext } from 'react';
import { appContext } from './../../context/GlobalProvider';

const History = () => {
	const { transactions, deleteTransaction } = useContext(appContext);

	const onDelete = (id) => {
		deleteTransaction(id);
	};

	return (
		<React.Fragment>
			<h5>History</h5>
			<hr />
			<ul className="list-group">
				{transactions.map((transaction) => {
					let amtClass = ['badge', 'badge-pill', 'mr-1'];
					+transaction.amount > 0
						? amtClass.push('badge-success')
						: amtClass.push('badge-danger');
					return (
						<li
							key={transaction.id}
							className="list-group-item d-flex justify-content-between align-items-center"
						>
							<span>{transaction.memo}</span>
							<div>
								<span className={amtClass.join(' ')}>
									{transaction.amount}
								</span>
								<svg
									onClick={() => {
										onDelete(transaction.id);
									}}
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									className="bi bi-archive ml-1"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									style={{ cursor: 'pointer' }}
								>
									<path d="M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z" />
									<path d="M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z" />
								</svg>
							</div>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
};

export default History;

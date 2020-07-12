import React from 'react';
import './App.css';

import GlobalProvider from './context/GlobalProvider';

import Balance from './components/Balance/Balance';
import Expense from './components/Expense/Expense';
import History from './components/History/History';
import Transaction from './components/Transaction/Transaction';

function App() {
	return (
		<GlobalProvider>
			<div className="container">
				<h4 className="text-center">Expense Tracker</h4>
				<hr />
				<Balance />
				<Expense />
				<History />
				<Transaction />
			</div>
		</GlobalProvider>
	);
}

export default App;

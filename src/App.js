import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
function App() {

  return (
    <>
      <Header />
      <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
      </div>
    </>
  );
}

export default App;

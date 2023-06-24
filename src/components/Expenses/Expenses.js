import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'
import { useState } from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2019');
  const filterHandler = (theYear) => {
    setFilterYear(theYear);
  }
  return (
      
      <Card className="expenses">
        <ExpenseFilter defaultYear={filterYear} onChangeYear={filterHandler}/>
        <ExpenseItem
          title={props.newData[0].title}
          amount={props.newData[0].amount}
          date={props.newData[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.newData[1].title}
          amount={props.newData[1].amount}
          date={props.newData[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.newData[2].title}
          amount={props.newData[2].amount}
          date={props.newData[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.newData[3].title}
          amount={props.newData[3].amount}
          date={props.newData[3].date}
        ></ExpenseItem>
      </Card>
  )
}
export default Expenses

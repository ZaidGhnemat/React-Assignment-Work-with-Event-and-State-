import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const onSaveDataHandler = (expData) => {
        const expenseData = {
            ...expData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData ={onSaveDataHandler}/>
        </div>
    );
}

export default NewExpense;
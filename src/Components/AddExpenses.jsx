import './AddExpenses.css';
import {useState, useEffect} from 'react';

function AddExpense({state, changeState}) {
    const [newExpense, updateExpense] = useState({
        name: null,
        cost: null,
        category: null
        })

    function handleClick() {
        changeState(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newExpense = {
            name: newExpense.name,
            cost: newExpense.cost,
            category: newExpense.category
        }
    }

    function handleChange(e) {
        const value = e.target.value;
        updateExpense({
            ...newExpense,
            [e.target.name]: value 
        });
    }

    return (
        <div className={`modal, ${state ? 'modalActive' : 'modalClosed'}`}>
            <span className='modalOverlay' onClick={handleClick}/>
            <div className='modalBox'>
                <div className='modalCloseButton' onClick={handleClick}>
                    X
                </div>
                <h1 className="mainHeader">Add An Expense</h1>
                <span className='divider' />
                <form id="inputsNeeded" onSubmit={(e) => handleSubmit(e)}>
                    <div className="ExpenseCategories">
                        <input class="checkboxCSS" id = "Home" value = "Home & Utilities" type="button" />
                        <input class="checkboxCSS" id = "Food" value = "Food & Groceries" type="button" />
                        <input class="checkboxCSS" id = "Leisure" value = "Leisure" type="button" />
                        <input class="checkboxCSS" id = "Transport" value = "Transport" type="button" />
                        <input class="checkboxCSS" id = "Other" value = "Other" type="button" />
                    </div>

                    <div id = "ExpenseText">
                        <input type="text" id = "ExpenseName" placeholder="Name of Expenses" onChange={(e) => handleChange(e)} required/>
                        <a id = "DollarSign">$</a>
                        <input type="text" id = "ExpenseCost" placeholder="Cost" onChange={(e) => handleChange(e)} required/>
                    </div>
                    <input type="submit" id = "submitExpense" value="Add Expense"></input>
                </form>
                

            </div>
        </div>
    );
}
    export default AddExpense;
import './AddExpenses.css';
import {useState, useEffect} from 'react';

function AddExpense({state, changeState}) {
    const [newExpense, updateExpense] = useState({
        name: null,
        cost: null,
        category: null
        });

    const [expenses, addExpense] = useState([]);

    const [selectedButton, changeSelected] = useState({
        id: null
    })

    function handleClick() {
        changeState(false);
    }

    function changeCategory(e) {
        changeSelected({
            id: e.target.id
        })

        updateExpense({
            ...newExpense,
            category: e.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        addExpense([
            ...expenses,
            newExpense
        ]) 
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
                        <input name="checkboxCSS" id = "Home" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Home' ? 'selected' : ''}`} id="Home" for="Home">Home & Utilities</label>
                        <input name="checkboxCSS" id = "Food" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Food' ? 'selected' : ''}`} id="Food" for="Food">Food & Groceries</label>
                        <input name="checkboxCSS" id = "Leisure" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Leisure' ? 'selected' : ''}`} id="Leisure" for="Leisure">Leisure</label>
                        <input name="checkboxCSS" id = "Transport" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Transport' ? 'selected' : ''}`} id="Transport" for="Transport">Transport</label>
                        <input name="checkboxCSS" id = "Other" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Other' ? 'selected' : ''}`} id="Other" for="Other">Other</label>
                    </div>

                    <div id = "ExpenseText">
                        <input type="text" id = "ExpenseName" placeholder="Name of Expenses" onChange={(e) => handleChange(e)} required/>
                        <a id = "DollarSign">$</a>
                        <input type="text" id = "ExpenseCost" placeholder="Cost" onChange={(e) => handleChange(e)} required/>
                    </div>
                    <input type="submit" id = "submitExpense" onClick={handleClick} value="Add Expense"></input>
                </form>
                

            </div>
        </div>
    );
}
    export default AddExpense;
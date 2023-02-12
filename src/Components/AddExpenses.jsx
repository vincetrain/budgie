import './AddExpenses.css';
import {useState} from 'react';

function AddExpense({state, changeState, addExpense, expenses, chartFills}) {
    const [newExpense, updateExpense] = useState({
        desc: null,
        cost: null,
        category: null
        });

    const [selectedButton, changeSelected] = useState({
        id: null
    })

    function handleClick() {
        changeState(!state)
    }

    function changeCategory(e) {
        changeSelected({
            id: e.target.id
        })

        updateExpense({
            ...newExpense,
            category: e.target.id
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
		console.log(newExpense)
		addExpense([
          ...expenses,
              {
                  desc: newExpense.desc,
                  name: newExpense.category,
                  money: newExpense.cost,
                  fill: chartFills[newExpense.category]
              }
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
                        <input name="checkboxCSS" id = "HousingUtilities" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'HousingUtilities' ? 'selected' : ''}`} id="HousingUtilities" for="HousingUtilities">Home & Utilities</label>

                        <input name="checkboxCSS" id = "Food" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Food' ? 'selected' : ''}`} id="Food" for="Food">Food & Groceries</label>
                        <input name="checkboxCSS" id = "Leisure" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Leisure' ? 'selected' : ''}`} id="Leisure" for="Leisure">Leisure</label>
                        <input name="checkboxCSS" id = "Transportation" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Transportation' ? 'selected' : ''}`} id="Transportation" for="Transportation">Transport</label>
                        <input name="checkboxCSS" id = "Other" type="radio" onClick={(e) => changeCategory(e)}/>
                        <label className={`${selectedButton.id == 'Other' ? 'selected' : ''}`} id="Other" for="Other">Other</label>
                    </div>

                    <div id = "ExpenseText">
                        <input name='desc' type="text" id = "ExpenseName" placeholder="Name of Expenses" onChange={(e) => handleChange(e)} required/>
                        <a id = "DollarSign">$</a>
                        <input name='cost' type="number" id = "ExpenseCost" placeholder="Cost" onChange={(e) => handleChange(e)} required/>
                    </div>
                    <input type="submit" id = "submitExpense" value="Add Expense"></input>
                </form>
                

            </div>
        </div>
    );
}
    export default AddExpense;

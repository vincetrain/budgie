import "./ShortGoals.css"
import arrow from "../Components/arrow.png";
import searchy from "../Components/Magnifying Glass.svg";
import {useState, useEffect} from 'react'

function ShortGoals(){    

    const [data, setData] = useState({
        goal: null,
        date: null,
        amount: null
    });

    const [goals, addGoal] = useState([])

    let Goals = goals.map(data => 
        <div className='goal'>
            <div className = 'formFill readonly'>
                <input readOnly type="text" id="Goal" name="Goal" value = {data.goal} />
                <input readOnly type="date" id="Date" name="Date" value = {data.date} />
                <input readOnly type="number" id="Amount" name="Amount" value = {data.amount}/>
            </div>
            <div className = "formDivider" />
        </div>
        );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(data.goal == null || data.date === null || data.amount === null || data.amount === "")) {
            addGoal([...goals, data]);
        }
    }

    const handleChange = event => {
        const value = event.target.value;

        setData({
            ...data,
            [event.target.name]: value
        })
    }


    return (
    <div className="pageContainer">

        <div className="headingsContainer">
            <h6>All Abt The NOW</h6>
            <h1>YOUR SHORT TERM GOALS</h1>

            <a href="/Goals">
                <img src={arrow} alt="The Back Arrow" />
            </a>

        </div>

        <div className= "searchBarContainer"> 
            <input type="text" placeholder=" Search.."/>
            <img src={searchy} alt="Magnifying Class" />
        </div>

        <div className="listsContainer">
            <div className="GoalsContainer">
                <p className="listsTitles">Goal</p>
            </div>
           
            <div className = "DateContainer">
                <p className="listsTitles">Date</p>
            </div>

            <div className = "AmountContainer">
                <p className="listsTitles">Amount</p>
            </div>
        </div>

        <form id='submitform' className = "formFill" onSubmit={handleSubmit}>
            <input type="text" id="Goal" name="goal" placeholder="Enter Savings Goal..." onChange={handleChange} value={data.goal}/>
            <input type="date" id="Date" name="date" placeholder=" DD/MM/YY" onChange={handleChange} value={data.date}/>
            <input type="number" id="Amount" name="amount" placeholder="$" onChange={handleChange} value={data.amount}/>
        </form>
        <div className = "formDivider">
        </div>

        {Goals}

        <div className = "addButton" id='submitform' type='submit' onClick={handleSubmit}>
            <p>+</p>
        </div>
    </div>
    )
}

export default ShortGoals;

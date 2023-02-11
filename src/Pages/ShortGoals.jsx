import "./ShortGoals.css"
import arrow from "../Components/arrow.png";
import bg from "../Components/short term goals background.png";

function ShortGoals(){    
    return (
    <div className="pageContainer">

        <div className="headingsContainer">
            <h6>All Abt The Future</h6>
            <h1>YOUR LONG TERM GOALS</h1>
            <img src={arrow} alt="The Back Arrow" />
        </div>

        <div className= "searchBarContainer"> 

        </div>

        <div className="listsContainer">

            <div className="GoalsContainer">

            </div>

            <div className = "DateContainer">

            </div>

            <div className = "EarnedContainer">


            </div>
        </div>
    </div>
    )
}

export default ShortGoals;
import "./GoalsLandingPage.css"
import "./ShortGoals.css"
import {Link} from "react-router-dom";

function GoalsPage() {
    return (
        <div className="PageContainer">
            <div className="headingsContainer">
                <h1>Your Goals</h1>
            </div>
            <div className="BoxContainer">
                <div className="TermContainer">
                    <h1 classname="TermTitle"> Long Term </h1>
                    <div className="TermBox">

                        <div className="TextBox">
                            <h3></h3>
                            <h3></h3>
                            <h3></h3>
                            <Link to="/LongGoals" className="viewButton">View</Link>
                        </div>

                    </div>
                </div>
                <div className="TermContainer">
                    <h1 classname="TermTitle"> Short Term </h1>
                    <div className="TermBox">

                        <div className="TextBox">
                            <h3></h3>
                            <h3></h3>
                            <h3></h3>
                            <Link to="/ShortsGoals" className="viewButton">View</Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="LilQuote">
                <p>Set your goals with us! Long AND Short!</p>
            </div>

        </div>
    )
}

export default GoalsPage;
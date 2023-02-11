import "./GoalsLandingPage.css"
import "./ShortGoals.css"

function GoalsPage(){    
    return (
    <div className = "PageContainer"> 
        <div className = "headingsContainer">
            <h1>Your Goals</h1>
        </div>
        <div className = "BoxContainer">
            <div className = "TermContainer">
                <h1 classname = "TermTitle"> Long Term </h1>
                <div className = "TermBox">

                </div> 
            </div> 
            <div className = "TermContainer">
                <h1 classname = "TermTitle"> Short Term </h1>
                <div className = "TermBox">
                </div> 
            </div> 
        </div>
    </div>
    )
}

export default GoalsPage;
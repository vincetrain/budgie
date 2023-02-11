import './BudgetingBuddy.scss';
import arrow from "../Components/arrow.png";
import tree from "../Components/MoneyTreeImage.svg";
import wallet from "../Components/MoneyWalletImage.svg";

function BudgetingBuddy() {

    return (

        <div className="page">

            <h1>LET US BE YOUR BUDGET BUDDY</h1>

            <div className="boxes">
                <div className="boxinbox" id = "box1">
                    <img src={tree} alt="money tree" />
                    <h3>SAVE FOR GOALS</h3>
                    <h5>SET GOALS NOW</h5>

                    <a href="/Goals">
                    <img id = "toppled" src={arrow} alt="lil green arrow" />
                    </a>

                </div>

                <div className="boxinbox" id = "box2">
                    <img src={wallet} alt="wallet" />
                    <h3>MANAGE YOUR FINANCES</h3>
                    <h5>START NOW</h5>

                    <a href="/Expenses">
                    <img id = "toppled" src={arrow} alt="lil green arrow" />
                    </a>

                </div>

            </div>

        </div>

    )
}

export default BudgetingBuddy;
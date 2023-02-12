import './LoginPage.scss';

function LoginPage() {
    return (

        <div className="LogInPageContainer">

            <div className="ContentsContainer">

                <div className="WordsContainer">

                    <h1>Login</h1>
                    <p>Please Enter Your Email and Password</p>
                    
                    <div className="InputSpaces">
                        <h4>EMAIL</h4>
                        <div className="inputContainer">
                        <input type="text" placeholder="₍ᐢ.⚇.ᐢ₎"/>
                        </div>
                        <h4>PASSWORD</h4>
                        <div className="inputContainer">
                        <input type="text" placeholder="₍ᐢ.⚇.ᐢ₎"/>
                        </div>
                    </div>

                    <div className="AccountPromptContainer">
                        <p>No Account? No Problem!!</p>
                        <a href="/RegisterPage">
                        <p id="registrationButton">CREATE ONE</p>
                        </a>
                    </div>

                    <div className = "LogInButton">
                        <p>Login</p>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default LoginPage;
import './RegisterPage.scss';

function RegisterPage() {
    return (

        <div className="LogInPageContainer">

            <div className="ContentsContainer2">

                <div className="WordsContainer">

                    <h1>Registration</h1>
                    <p>Please Fill in the Information Below</p>

                    <div className="InputSpaces">
                        <h4>FIRST NAME</h4>
                        <div className="inputContainer">
                            <input type="text" placeholder="₍ᐢ.⚇.ᐢ₎" />
                        </div>
                        <h4>LAST NAME</h4>
                        <div className="inputContainer">
                            <input type="text" placeholder="₍ᐢ.⚇.ᐢ₎" />
                        </div>
                        <h4>EMAIL</h4>
                        <div className="inputContainer">
                            <input type="text" placeholder="₍ᐢ.⚇.ᐢ₎" />
                        </div>
                        <h4>PASSWORD</h4>
                        <div className="inputContainer">
                            <input type="text" placeholder="₍ᐢ.⚇.ᐢ₎" />
                        </div>
                    </div>

                    <div className="AccountPromptContainer">
                        <p>Already have an account?</p>
                        <a href="/RegisterPage">
                            <div class="spacer"></div>
                            <p id="registrationButton">SIGN IN</p>
                        </a>
                    </div>

					<a href='/Expenses'>
                    <div className="LogInButton">
                        <p>Sign Up</p>
                    </div>
					</a>

                </div>


            </div>

        </div>

    )
}

export default RegisterPage;

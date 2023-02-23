import GoogleLogin from 'react-google-login';

function LoginGoogle(){

    const handleFailure = (result) =>{
        alert(result)
    }

    const handleLogin = (googleData) =>{
        console.log(googleData)
    }
    return (
        <div className="container">
            <header>
                <h1>
                    <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}></GoogleLogin>
                </h1>
            </header>
        </div>
    )

}

export default LoginGoogle
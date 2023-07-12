import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (loggedIn) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-50 text-center text-3xl font-bold leading-30 tracking-tight text-gray-900">Employee Polls</h1>
                <img className="mx-auto w-auto" src="./images/people.png" alt="employee polls" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
                data-testid="login-heading">Log In</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="text-center block text-sm font-medium text-slate-700">User</label>
                    <div className="mt-1">
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="password" className="text-center block text-sm font-medium text-slate-700">Password</label>
                    <div className="mt-1">
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button type="submit"
                        data-testid="submit"
                        className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);

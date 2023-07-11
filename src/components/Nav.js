import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";

const Nav = ({ dispatch, authedUserId, authedUserAvatar }) => {

    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    return (
        <nav>
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex space-x-4">
                    <NavLink to="/"
                        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</NavLink>
                    <NavLink to="/leaderboard"
                        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Leaderboard</NavLink>
                    <NavLink to="/new"
                        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">New</NavLink>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <img className="mx-auto h-10 w-auto" src={authedUserAvatar} alt=""/>
                    <div className="relative ml-3">
                        <span
                            className="font-medium px-3 py-2 text-slate-700"
                            data-testid="user-information">{authedUserId}</span>
                        <button onClick={logout}
                            className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    authedUserId: authedUser.id,
    authedUserAvatar: authedUser.avatarURL
});


export default connect(mapStateToProps)(Nav);

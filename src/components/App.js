import "./App.css"
import React from "react"
import { Link, Route } from "react-router-dom"
import { getToken } from "../utils/axiosConfig"
import Singin from "./Singin"
import Account from "./Account"
import PrivateRoute from "./PrivateRoute"
import Logout from "./Logout"

function App() {
	const signedIn = getToken()
	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>
				{!signedIn && <Link to="/signin">Sign In</Link>}
				{signedIn && <Link to="/account">My Account</Link>}
				{signedIn && <Link to="/logout">Logout</Link>}
			</nav>

			<Route exact path="/signin" component={Singin} />
			<PrivateRoute exact path="/logout" component={Logout} />
			<PrivateRoute exact path="/account" component={Account} />
		</div>
	)
}

export default App

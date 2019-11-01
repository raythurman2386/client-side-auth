import React, { useState, useEffect } from "react"
import { axiosWithAuth as axios } from "../utils/axiosConfig"

const Account = (props) => {
	const [user, setUser] = useState({
		name: "",
		email: "",
	})

	useEffect(() => {
		axios()
			.get("/me")
			// .then((stuff) => console.log(stuff))
			.then((res) =>
				setUser({
					name: res.data.name,
					email: res.data.email,
				}),
			)
			.catch((err) => console.log(err))
	}, [])

	return (
		<>
			<h1>My Account</h1>
			<div className="account-row">Name {user.name}</div>
			<div className="account-row">Email {user.email}</div>
		</>
	)
}

export default Account

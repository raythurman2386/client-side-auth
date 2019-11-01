import React, { useState } from "react"
import { axiosWithAuth as axios } from "../utils/axiosConfig"

const Singin = (props) => {
	const initialState = {
		email: "",
		password: "",
	}
	const [data, setData] = useState(initialState)
	const [error, setError] = useState()

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios()
			.post("/signin", data)
			.then((res) => {
				localStorage.setItem("token", res.data.token)
				props.history.push("/account")
			})
			.catch((err) => setError(err.response.data.message))
		setData(initialState)
	}

	return (
		<form onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}
			<input
				type="email"
				name="email"
				placeholder="email"
				value={data.email}
				required
				onChange={(e) => handleChange(e)}
			/>
			<input
				type="password"
				name="password"
				placeholder="password"
				value={data.password}
				required
				onChange={(e) => handleChange(e)}
			/>
			<button type="submit">Sign In</button>
		</form>
	)
}

export default Singin

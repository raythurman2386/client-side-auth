import axios from "axios"

export const getToken = () => {
	return localStorage.getItem("token")
}

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: "http://localhost:8080",
		headers: {
			Authorization: localStorage.getItem("token"),
		},
	})
}

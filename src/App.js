import "./App.css";
import { GlobalStyle } from "./styles/global";

import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";

function App() {
	const [user, setUser] = useState("");
	return (
		<div>
			<GlobalStyle />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Login setUser={setUser} />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/dashboard"
					element={<Dashboard user={user} setUser={setUser} />}
				/>
				<Route path="*" element={<Navigate to={"/"} />} />
			</Routes>
		</div>
	);
}

export default App;

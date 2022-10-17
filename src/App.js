import "./App.css";
import { GlobalStyle } from "./styles/global";

import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/Dashboard";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { Loading } from "./components/Loading";

function App() {
	const { loading } = useContext(UserContext);
	return (
		<div>
			<GlobalStyle />
			<ToastContainer />
			{loading && <Loading />}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Navigate to={"/"} />} />
			</Routes>
		</div>
	);
}

export default App;

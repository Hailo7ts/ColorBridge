
import { Route, Routes } from "react-router-dom";
import "./index.css";

import ConvertPage from "./pages/ConvertPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/convert' element={<ConvertPage />} />
			</Routes>
		</>
	);
}

export default App;

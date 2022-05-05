import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactDom from 'react-dom';

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Historic from './Components/Historic';
import Earnings from './Components/Earnings';
import Outlay from './Components/Outlay';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
                <Route path="/historic" element={<Historic />} />
                <Route path="/earnings" element={<Earnings />} />
                <Route path="/outlay" element={<Outlay />} />
			</Routes>
		</BrowserRouter>
	);
}

reactDom.render(<App />, document.querySelector('.root'));
import { useState } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Historic from './Components/Historic';
import Earnings from './Components/Earnings';
import Outlay from './Components/Outlay';

function App() {

	const [data, setData] = useState({ username: null, token: '' });

	return (

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn setInfo={(data) => setData(data)} />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/historic" element={<Historic username={data.username} token={data.token} />} />
				<Route path="/earnings" element={<Earnings />} />
				<Route path="/outlay" element={<Outlay />} />
			</Routes>
		</BrowserRouter>
	);
}

reactDom.render(<App />, document.querySelector('.root'));
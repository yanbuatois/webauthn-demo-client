import React from 'react';
import LoginProvider from './Components/Provider/LoginProvider';
import Dashboard from './Components/Dashboard/Dashboard';

function App(): JSX.Element {
	return (
		<LoginProvider>
			<Dashboard />
		</LoginProvider>
	);
}

export default App;

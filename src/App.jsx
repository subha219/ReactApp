import react from 'react';
import EmployeeList from './Components/Employee/EmployeeList';
import Header from './Components/Layout/header'
import BootomFooter from './Components/Layout/BootomFooter'

import { Provider } from 'react-redux';
import { store } from './Redux/store.js';

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                <EmployeeList />
                <BootomFooter />
            </Provider>
        </>
    );
}

export default App;
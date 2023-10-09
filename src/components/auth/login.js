import AppInfo from '../app_info/app-info';
import FormExample from '../form_example/form-example';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Registration from '../auth/registration';

function Login({ setToken }) {

    return (
        <div className="App">
            <AppInfo />
            <div>
                <FormExample setToken={setToken} />
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/registration">Регистрация</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/registration" element={<Registration />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default Login;
import AppInfo from '../app_info/app-info';
import FormExample from '../form_example/form-example';

function Login({ setToken }) {

    return (
        <div className="App">
            <AppInfo title={"Авторизация"} />
            <FormExample setToken={setToken} />
        </div>
    );
}

export default Login;
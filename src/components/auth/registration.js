import AppInfo from '../app_info/app-info';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Registration() {
    return (
        <div className="App">
            <AppInfo />
            <div>
                <h3>Зарегистрироваться</h3>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="email" placeholder="Имя" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="email" placeholder="Фамилия" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Регистрация
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Registration;
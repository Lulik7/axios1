import React, { useState, type FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { formContainerStyle, labelStyle, inputStyle, buttonStyle } from '../styles/AuthFormStyles.ts';


interface LoginForm {
    username: string;
    password: string;
}

const AuthForm: React.FC = () => {
    const [formData, setFormData] = useState<LoginForm>({
        username: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setError(null);
        setSuccessMessage(null);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {

            const API_URL = 'https://fakestoreapi.com/auth/login';

            const response = await axios.post(API_URL, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Данные от сервера после авторизации:', response.data);
            setSuccessMessage('Авторизация прошла успешно! Добро пожаловать!');
            navigate('/home');

        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const axiosError = err as AxiosError;
                if (axiosError.response) {
                    const message = (axiosError.response.data as { message?: string }).message || 'Неверные учетные данные.';
                    setError(`Ошибка авторизации: ${message}`);
                } else if (axiosError.request) {
                    setError('Ошибка сети: Сервер не отвечает. Проверьте ваше соединение.');
                } else {
                    setError('Произошла ошибка при отправке запроса.');
                }
            } else {
                const message = err instanceof Error ? err.message : 'Произошла неизвестная ошибка.';
                setError(`Ошибка: ${message}`);
            }
            console.error('Ошибка при отправке данных:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={formContainerStyle}>
            <h2>Авторизация</h2>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>}
            <label style={labelStyle}>
                Имя пользователя:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    disabled={isLoading}
                />
            </label>
            <label style={labelStyle}>
                Пароль:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    disabled={isLoading}
                />
            </label>
            <button type="submit" style={buttonStyle} disabled={isLoading}>
                {isLoading ? 'Enter...' : 'Enter'}
            </button>
        </form>
    );
};

export default AuthForm;

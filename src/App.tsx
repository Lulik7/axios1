
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.tsx';
import AuthForm from './pages/AuthForm.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import EnterLogin from './pages/EnterLogin.tsx';
import CustomHeader from './components/Header.tsx';
import {contentStyle, footerStyle, layoutStyle} from "./styles/style.ts";

const { Footer, Content } = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout style={layoutStyle}>
                <CustomHeader />
                <Content style={contentStyle}>
                    <Routes>

                        <Route path="/" element={<Navigate to="/enterLogin" replace />} />
                        <Route path="/enterLogin" element={<EnterLogin />} />
                        <Route path="/authForm" element={<AuthForm />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Content>
                <Footer style={footerStyle}>
                  Hello,Konstantin  ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

import { Outlet } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

import { Container, Content } from './styles';

export function Dashboard() {

    return (
        <Container>   
            <Sidebar />

            <Content>
                <Header />
                <Outlet />
            </Content>
        </Container>
    )
}
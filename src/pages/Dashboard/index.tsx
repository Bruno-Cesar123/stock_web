
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

import { Container } from './styles';

export function Dashboard() {
    return (
        <Container>
            
            <Sidebar />
            <Header />

        </Container>
    )
}
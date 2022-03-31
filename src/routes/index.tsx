import { BrowserRouter, Routes as RouterDOM, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Stock } from '../pages/Stock';
import { Fiis } from '../pages/Fiis';


export function Routes() {
    return(
        <BrowserRouter>
            <RouterDOM>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='stock' element={<Stock />} />
                    <Route path='fiis' element={<Fiis />} />
                </Route>
            </RouterDOM>
        </BrowserRouter>
    )
}
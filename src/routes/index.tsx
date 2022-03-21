import { BrowserRouter, Routes as RouterDOM, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';

export function Routes() {
    return(
        <BrowserRouter>
            <RouterDOM>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </RouterDOM>
        </BrowserRouter>
    )
}
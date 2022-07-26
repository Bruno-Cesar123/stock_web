import { BrowserRouter, Routes as RouterDOM, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Stock } from '../pages/Stock';
import { Profile } from '../pages/Profile';
import { NewStock } from '../pages/NewSock';

import { PrivateRoute } from './PrivateRoute';



export function Routes() {
    return(
        <BrowserRouter>
            <RouterDOM>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/dashboard' element={<Dashboard />}>
                        <Route path='stock' element={<Stock />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='new-stock' element={<NewStock />} />
                    </Route>
                </Route>
            </RouterDOM>
        </BrowserRouter>
    )
}
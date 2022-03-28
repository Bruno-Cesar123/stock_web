import { BrowserRouter, Routes as RouterDOM, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Page1 } from '../pages/Page1';
import { Page2 } from '../pages/Page2';


export function Routes() {
    return(
        <BrowserRouter>
            <RouterDOM>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='stock' element={<Page1 />} />
                    <Route path='fiis' element={<Page2 />} />
                </Route>
            </RouterDOM>
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes as RouterDOM, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Routes() {
    return(
        <BrowserRouter>
            <RouterDOM>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
            </RouterDOM>
        </BrowserRouter>
    )
}
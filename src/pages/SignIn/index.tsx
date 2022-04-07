
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
  Container, 
  Main, 
  ContentTitle, 
  ContentForm, 
  Form, 
  ContentAction
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('* Campo obrigatório')
    .email('* Email incorreto'),
  password: Yup.string().required('* Campo obrigatório')
})


export function SignIn() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (data: SignInFormData) => {
      try {
        console.log(data)
      } catch (err) {
        console.log('erro ao acessar')
      }
    }
  })

  return (
      <Container>
        <Main>
          <ContentTitle>
            <h1>CONTROLE DE INVESTIMETOS</h1>
          </ContentTitle>
          <ContentForm>
            <Form onSubmit={formik.handleSubmit}>
              <h2>SIGN IN</h2>

              <Input
                label='Email:'
                type='text'
                name='email'
                id='email'
                placeholder='Digite seu email'
                value={formik.values.email}
                onChange={formik.handleChange}
                isError={formik.touched.email && Boolean(formik.errors.email)}
                errorMessage={formik.errors.email}
                
              />

              <Input
                label='Senha:'
                type='password'
                name='password'
                id='password'
                placeholder='Digite sua senha'
                value={formik.values.password}
                onChange={formik.handleChange}
                isError={formik.touched.password && Boolean(formik.errors.password)}
                errorMessage={formik.errors.password}
              />             

              <ContentAction>
                <Button 
                  type="submit" 
                  value="Entrar" 
                />
                
                <Link to="/signup">Ainda não possui conta? </Link>
              </ContentAction>
            </Form>
          </ContentForm>
        </Main>
      </Container>
  );
}
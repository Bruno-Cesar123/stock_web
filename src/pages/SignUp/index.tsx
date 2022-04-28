import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  ContentForm,
  Form,
  ContentAction
} from './styles'

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('* Campo obrigatório').trim(),
  email: Yup.string()
    .required('* Campo obrigatório')
    .email('* Email incorreto').trim(),
  password: Yup.string().required('* Campo obrigatório').min(6, '* No mínimo 6 caracteres').trim()
})

export function SignUp() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: useCallback(
      async (data: SignUpFormData) => {
        try {
          await api.post('/users', data)

          navigate('/signin')

          toast.success('Cadastro realizado com sucesso')
        } catch (err) {

          toast.warning('Erro ao cadastrar usuário');
        }
    }, [navigate])
  })

  return (
    <Container>
      <ContentForm>
        <Form onSubmit={formik.handleSubmit}>
          <h2>Sign Up</h2>

          <Input
            label='Nome:'
            type='text'
            name='name'
            id='name'
            placeholder='Digite seu nome'
            value={formik.values.name}
            onChange={formik.handleChange}
            isError={formik.touched.name && Boolean(formik.errors.name)}
            errorMessage={formik.errors.name}
          />

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
              value="Cadastrar" 
            />

            <Link to="/">Já possui conta? </Link>
          </ContentAction>
        </Form>
      </ContentForm>
    </Container>
  )
}
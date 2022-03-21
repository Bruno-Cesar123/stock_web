import { Link, useNavigate } from 'react-router-dom';

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
import { useCallback } from 'react';

export function SignIn() {
  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    navigate('/dashboard')
  }, [navigate])

  return (
      <Container>
        <Main>
          <ContentTitle>
            <h1>CONTROLE DE INVESTIMETOS</h1>
          </ContentTitle>
          <ContentForm>
            <Form onSubmit={onSubmit}>
              <h2>SIGN IN</h2>

              <Input
                label='Email:'
                type='text'
                name='email'
                id='email'
                placeholder='Digite seu email'
              />

              <Input
                label='Senha:'
                type='password'
                name='password'
                id='password'
                placeholder='Digite sua senha'
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
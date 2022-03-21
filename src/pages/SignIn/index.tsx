import { Input } from '../../components/Input';

import { 
  Container, 
  Main, 
  ContentTitle, 
  ContentForm, 
  Form, 
  ContentAction
} from './styles';

export function SignIn() {

  return (
      <Container>
        <Main>
          <ContentTitle>
            <h1>CONTROLE DE INVESTIMETOS</h1>
          </ContentTitle>
          <ContentForm>
            <Form>
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
                <input type="submit" value="Entrar" />
                
                <a href="https://www.google.com.br">Ainda não possui conta? </a>
              </ContentAction>
            </Form>
          </ContentForm>
        </Main>
      </Container>
  );
}
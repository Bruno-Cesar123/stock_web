import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  ContentForm,
  Form,
  ContentAction
} from './styles'

export function SignUp() {
  return (
    <Container>
      <ContentForm>
        <Form>
          <h2>Sign Up</h2>

          <Input
            label='Nome:'
            type='text'
            name='name'
            id='name'
            placeholder='Digite seu nome'
          />

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
              value="Cadastrar" 
            />

            <a href="https://www.google.com.br">Já possui conta? </a>
          </ContentAction>
        </Form>
      </ContentForm>
    </Container>
  )
}
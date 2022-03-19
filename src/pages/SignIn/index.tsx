
import { Container, Main, ContentTitle, ContentForm, Form, FormGroup } from './styles';

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

              <FormGroup>
                <label htmlFor="name">Nome:</label>
                <input type="text" placeholder='Digite seu nome' />
              </FormGroup>
            </Form>
          </ContentForm>
        </Main>
      </Container>
  );
}
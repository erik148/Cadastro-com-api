import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  Title,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
} from "./styles";

import Button from '../../components/button';
import TopBackground from '../../components/TopBackground';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para exibir mensagens de erro

  const navigate = useNavigate();

  async function registerNewUser(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Verificando se todos os campos estão preenchidos
    if (!inputName.current.value || !inputAge.current.value || !inputEmail.current.value) {
      setErrorMessage('Todos os campos são obrigatórios!');
      return; // Se algum campo estiver vazio, não envia o formulário
    }

    setErrorMessage(''); // Limpa a mensagem de erro se todos os campos estiverem preenchidos

    // Enviando os dados para a API
    try {
      const data = await api.post('/users', {
        email: inputEmail.current.value,
        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
      });

      if (data) {
        setSuccessMessage('Usuário cadastrado com sucesso!');
        inputName.current.value = '';
        inputAge.current.value = '';
        inputEmail.current.value = '';
      }
    } catch {
      setErrorMessage('Erro ao cadastrar usuário. Tente novamente mais tarde!');
    }
  }

  return (
    <Container>
      <TopBackground />

      <Form onSubmit={registerNewUser}>
        <Title>Cadastrar Usuário</Title>

        {/* Mostra a mensagem de sucesso se o cadastro for bem-sucedido */}
        {successMessage && <div style={{ color: 'green', fontWeight: 'bold', marginBottom: '20px' }}>{successMessage}</div>}

        {/* Mostra a mensagem de erro caso algum campo não seja preenchido */}
        {errorMessage && <div style={{ color: 'red', fontWeight: 'bold', marginBottom: '20px' }}>{errorMessage}</div>}

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome Do Usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </div>

        <Button type="submit" theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>
        Ver Lista de Usuários
      </Button>
    </Container>
  );
}

export default Home;




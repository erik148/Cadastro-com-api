import { useEffect, useState } from "react";
import Api from "../../services/api";
import Button from "../../components/button";
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarUsers,
} from "./styles";

function ListUsers() {
  const Navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await Api.get("/users");
      setUsers(data);
    }
    getUsers();
  }, []);

  const deleteUsers = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      console.log("Usuário deletado");

      // Atualiza a lista de usuários removendo o usuário deletado
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUsers
              src={`https://avatar.iran.liara.run/public?username=${user.name}`}
            />

            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="icone-lixeira"
              onClick={() => {
                console.log("Deletando usuário com id:", user.id); // Aqui você vai ver o id sendo impresso
                deleteUsers(user.id); // Chama a função que deleta o usuário
              }}
            />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => Navigate("/")}>
        voltar
      </Button>
    </Container>
  );
}

export default ListUsers;


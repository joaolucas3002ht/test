/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import { useLayoutEffect } from 'react';
import { LuPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';
// import { useAllUsersInfo } from '../../hooks/useAllUserInfo';
import { useAllUsersInfo } from '../../hooks/useAllUserInfo';
import { useDeleteUserInfo } from '../../hooks/useDeleteUserInfo';
import { CreatePostButton, Subtitle } from '../../styles/styledGlobal';
import { useSoftDelete } from '../../hooks/useSoftDelete';
import {
  Author,
  ButtonEvent,
  ContainerButtonEvent,
  ContainerCreatePost,
  ContainerHeader,
  ContainerPost,
  ContainerTitlePost,
  CreatePostTitle,
  Post,
  UserLoggedBall,
} from './styled';
import 'react-toggle/style.css';
import Toggle from 'react-toggle';

const Dashboard = () => {
  const { documents: usersInfo } = useAllUsersInfo('userInfo');
  const { deleteDocument } = useDeleteUserInfo();
  const dateFormat = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  const { softDeleteUser, softRehabUser } = useSoftDelete();
  // const handleDelete = (userId, userName) => {
  //   const confirmDelete = window.confirm(`Tem certeza que deseja excluir o usuário ${userName}?`);
  //   if (confirmDelete) {
  //     deleteDocument(userId);
  //   }
  // };
  useLayoutEffect(() => {
    document.title = 'Genuine Sistemas - Painel de Usuários';
  }, []);
  const handleSoftDelete = userId => {
    softDeleteUser(userId);
  };
  const handleRehabUser = userId => {
    softRehabUser(userId);
  };

  const filteredUsersInfo = usersInfo ? usersInfo.filter(user => user.userStatus !== 'admin') : [];
  return (
    <div>
      <ContainerHeader>
        <Subtitle>
          Gerencie seus {filteredUsersInfo.length}{' '}
          {filteredUsersInfo.length > 1 ? 'Usuários' : 'Usuário'}
        </Subtitle>
        <CreatePostButton as={Link} to='/register'>
          Cadastrar Usuário <LuPlus size={17} />
        </CreatePostButton>
      </ContainerHeader>
      {filteredUsersInfo.length === 0 && (
        <ContainerCreatePost>
          <CreatePostTitle>
            Não foram encontrados usuários cadastrados
            <br />
          </CreatePostTitle>
        </ContainerCreatePost>
      )}
      {filteredUsersInfo.length > 0 && (
        <ContainerPost>
          {filteredUsersInfo.map(user => {
            let userStayLogged = false;
            if (Number(user.loggedAt) > Number(user.loggedOutAt)) {
              userStayLogged = true;
            }
            const deletedUser = user.deletedAt != '';
            if (deletedUser) {
              userStayLogged = false;
            }

            return (
              <Post
                key={user.id}
                deleted={deletedUser}
                title={deletedUser ? 'Usuário Desativado' : 'Usuário Ativo'}
              >
                <ContainerTitlePost>
                  <UserLoggedBall
                    logged={userStayLogged}
                    title={userStayLogged ? 'Usuário Online' : 'Usuário Offline'}
                  />
                </ContainerTitlePost>
                <Author>
                   Usuário: {user.userName}
                  {'  '}
                  {/* |  E-mail: {user.userId}  |  Status: {user.userStatus}  */}|  Ultimo Login:{' '}
                  {user.loggedAt === ''
                    ? ' Usuário ainda não efetuou login no sistema'
                    : dateFormat.format(new Date(Number(user.loggedAt))) + 'hrs'}
                </Author>
                <ContainerButtonEvent>
                  <Toggle
                    id=''
                    defaultChecked={user.deletedAt === ''}
                    onChange={e =>
                      e.target.checked
                        ? handleRehabUser(user.userId)
                        : handleSoftDelete(user.userId)
                    }
                  />
                </ContainerButtonEvent>
              </Post>
            );
          })}
        </ContainerPost>
      )}
    </div>
  );
};

export default Dashboard;

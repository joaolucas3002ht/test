
import { useEffect } from 'react';
import { LuEdit, LuEye, LuPlus, LuTrash2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { DialogDemo } from '../../components/Modal';
import { UseAuthValue } from '../../context/AuthContext';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useUserInfo } from '../../hooks/userName';
import { CreatePostButton, Subtitle } from '../../styles/styledGlobal';
import {
  Author,
  ButtonEvent,
  ContainerButtonEvent,
  ContainerCreatePost,
  ContainerHeader,
  ContainerPost,
  ContainerTitlePost,
  CreatePostTitle,
  MediaPreview,
  Post,
  TitlePost,
} from './styled';
// import DialogDemo from '../../components/Modal';

const Dashboard = () => {
  const { user } = UseAuthValue();
  const uid = user.uid;
  const userEmail = user ? user.email : '';
  const { userStatus } = useUserInfo(userEmail);



  const { documents } = useFetchDocuments('posts', null, userStatus === 'admin' ? uid : null);
  const { deleteDocument } = useDeleteDocument('posts');

  useEffect(() => {
    document.title = 'Genuine Sistemas - Dashboard';
  }, []);

  return (
    <div>
      <ContainerHeader>
        <Subtitle>
          <h2>
            {userStatus === 'admin' ? 'Gerencie Todas as postagens' : 'Gerencie os seus posts'}
          </h2>
        </Subtitle>
        <CreatePostButton as={Link} to='/create-post'>
          Criar Post <LuPlus size={17} />
        </CreatePostButton>
      </ContainerHeader>
      <>
        {documents && documents.length === 0 ? (
          <ContainerCreatePost>
            <CreatePostTitle>Não foram encontrados posts</CreatePostTitle>
          </ContainerCreatePost>
        ) : (
          <ContainerPost>
            {documents?.map(post => (
              <Post key={post.id}>
                {userStatus == 'admin' ? (
                  <>
                    <ContainerTitlePost>
                      {post.mediaURL && (
                        <DialogDemo mediaURL={post.mediaURL}>
                          {post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm') ? (
                            <MediaPreview
                              as='video'
                              src={post.mediaURL}
                              alt={post.title}
                              // style={{ width: 35, maxHeight: 35 }}
                            />
                          ) : (
                            <MediaPreview
                              src={post.mediaURL}
                              alt={post.title}
                              // style={{ width: 35, maxHeight: 35 }}
                            />
                          )}
                        </DialogDemo>
                      )}
                      <TitlePost> | Título: {post.title}</TitlePost>
                    </ContainerTitlePost>
                    <Author>| Autor: {post.createdBy}</Author>
                  </>
                ) : (
                  <TitlePost>Título: {post.title}</TitlePost>
                )}

                <ContainerButtonEvent>
                  <ButtonEvent as={Link} to={`/posts/${post.id}`}>
                    <LuEye />
                  </ButtonEvent>
                  <ButtonEvent as={Link} to={`/posts/editpost/${post.id}`}>
                    <LuEdit />
                  </ButtonEvent>
                  <ButtonEvent
                    className='delete'
                    onClick={() =>
                      window.confirm('Tem certeza que deseja excluir?')
                        ? deleteDocument(post.id)
                        : null
                    }
                  >
                    <LuTrash2 />
                  </ButtonEvent>
                </ContainerButtonEvent>
              </Post>
            ))}
          </ContainerPost>
        )}
      </>
    </div>
  );
};

export default Dashboard;

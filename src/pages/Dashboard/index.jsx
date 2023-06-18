/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/media-has-caption */
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
          {userStatus === 'admin' ? 'Gerencie Todas as postagens' : 'Gerencie os seus posts'}
        </Subtitle>
        <CreatePostButton as={Link} to='/create-post'>
          Criar Post <LuPlus size={17} />
        </CreatePostButton>
      </ContainerHeader>
      {/*
      {userStatus === 'admin' ? (
        <>
          {postsadm && postsadm.length === 0 && (
            <ContainerCreatePost>
              <CreatePostTitle>Não foram encontrados posts</CreatePostTitle>
            </ContainerCreatePost>
          )}
          {postsadm?.length > 0 && (
            <ContainerPost>
              {postsadm.map(post => (
                <Post key={post.id}>
                  <ContainerTitlePost>
                    <>
                      {post.mediaURL && (
                        <DialogDemo mediaURL={post.mediaURL}>
                          {post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm') ? (
                            <MediaPreview
                              as='video'
                              src={post.mediaURL}
                              alt={post.title}
                            />
                          ) : (
                            <MediaPreview
                              src={post.mediaURL}
                              alt={post.title}
                            />
                          )}
                        </DialogDemo>
                      )}
                    </>
                    <TitlePost> | Título: {post.title}</TitlePost>
                  </ContainerTitlePost>
                  <Author> | Autor: {post.createdBy}</Author>

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
      ) : (
        <>
          {posts && posts.length === 0 && (
            <ContainerCreatePost>
              <CreatePostTitle>Não foram encontrados posts</CreatePostTitle>
            </ContainerCreatePost>
          )}
          {posts?.length > 0 && (
            <ContainerPost>
              {posts.map(post => (
                <Post key={post.id}>
                  <ContainerTitlePost>
                    <>
                      {post.mediaURL && (
                        <DialogDemo mediaURL={post.mediaURL}>
                          {post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm') ? (
                            <MediaPreview
                              as='video'
                              src={post.mediaURL}
                              alt={post.title}
                            />
                          ) : (
                            <MediaPreview
                              src={post.mediaURL}
                              alt={post.title}
                            />
                          )}
                        </DialogDemo>
                      )}
                    </>
                    <TitlePost> | Título: {post.title}</TitlePost>
                  </ContainerTitlePost>
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
      )} */}

      {documents && documents.length === 0 ? (
        <ContainerCreatePost>
          <CreatePostTitle>Não foram encontrados posts</CreatePostTitle>
        </ContainerCreatePost>
      ) : (
        <ContainerPost>
          {documents?.map(post => (
            <Post key={post.id}>
              <ContainerTitlePost>
                {post.mediaURL && (
                  <DialogDemo mediaURL={post.mediaURL}>
                    {post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm') ? (
                      <MediaPreview as='video' src={post.mediaURL} alt={post.title} />
                    ) : (
                      <MediaPreview src={post.mediaURL} alt={post.title} />
                    )}
                  </DialogDemo>
                )}
                <TitlePost> | Título: {post.title}</TitlePost>
              </ContainerTitlePost>

              {userStatus == 'admin' && (
                <>
                  <Author> | Autor: {post.createdBy}</Author>
                </>
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
    </div>
  );
};

export default Dashboard;

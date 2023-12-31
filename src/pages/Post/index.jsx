// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import {
  Author,
  Body,
  Container,
  ContainerTag,
  ImageStyled,
  Midia,
  Tag,
  Title,
  Video,
} from './styled';

import { useEffect, useState } from 'react';

const ImageContainer = ({ src, alt }) => {
  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const aspectRatio = image.naturalWidth / image.naturalHeight;
      if (aspectRatio > 1) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    };
  }, [src]);

  return (
    <Midia>
      <ImageStyled src={src} alt={alt} className={`${orientation}`} />
    </Midia>
  );
};

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);
  useEffect(() => {
    document.title = 'Genuine Sistemas - Post';
  }, []);
  return (
    <Container>
      {post && (
        <>
          {post.mediaURL &&
            (post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm') ? (
              <Video controls src={post.mediaURL} alt={post.title} />
            ) : (
              <ImageContainer src={post.mediaURL} alt={post.title} />
            ))}

          <Title>{post.title}</Title>
          <Body style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>{post.body}</Body>
          {post?.tags?.length > 0 && (
            <ContainerTag>
              {post.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ContainerTag>
          )}
          <Author><b>Artigo escrito por: </b>{post.createdBy}</Author>
        </>
      )}
    </Container>
  );
};

export default Post;

import { Link } from 'react-router-dom';
import {
  Author,
  ContainerMidia,
  ContainerPost,
  ContainerTag,
  Image,
  Tag,
  Title,
  Video,
} from './styled';

export const PostDetailsHome = ({ post }) => {
  const limiteCaracteres = 200;
  const body =
    post.body.length > limiteCaracteres
      ? `${post.body.substring(0, limiteCaracteres)}...`
      : post.body;

  return (
    <ContainerPost as={Link} to={`/posts/${post.id}`}>
      {post.mediaURL && (post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm')) ? (
        <ContainerMidia>
          <Video src={post.mediaURL} alt={post.title} title={body} />
        </ContainerMidia>
      ) : (
        <ContainerMidia>
          <Image src={post.mediaURL} alt={post.title} title={body} />
        </ContainerMidia>
      )}

      <Title aria-label={post.title} title={post.title}>
        {post.title}
      </Title>
      <Author>Autor: {post.createdBy}</Author>
      <ContainerTag>
        {post.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ContainerTag>
    </ContainerPost>
  );
};


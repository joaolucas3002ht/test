//hooks
// import { useState, useLayoutEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import {
  Await,
  Form,
  defer,
  //  redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
//components
import { Suspense, useEffect, useLayoutEffect } from 'react';
import { LuSearch } from 'react-icons/lu';
import { NoPost } from '../../components/NoPost';
import { PostDetailsHome } from '../../components/PostDetailsHome';
import { SkeletonPostDetailsHome } from '../../components/SkeletonPostDetailsHome';
import { SearchButton, SearchForm, SearchInput } from '../../styles/styledGlobal';
import { FetchDocuments } from '../../utils/FetchDocuments';
import { ContainerHome, PostsContainer } from './styled';
// import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Index = () => {
  //   const [query, setQuery] = useState('');
  //   const { documents: posts, loading } = useFetchDocuments('posts');
  //   const navigate = useNavigate();

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if (query) {
  //       return navigate(`/search?q=${query}`);
  //     }
  //   };

  //     useLayoutEffect(() => {
  //       document.title = 'Genuine Sistemas - Home';
  //     }, []);
  // =======
  const data = useLoaderData();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    document.title = 'Genuine Sistemas - Home';
  }, []);

  useEffect(() => {
    console.log(navigation.state);
  }, [navigation.state]);

  const arrayLength = Array.from({ length: 6 }).map((_, i) => i);

  return (
    <ContainerHome>
      <SearchForm as={Form} method='GET' about='/'>
        <SearchInput
          type='text'
          name='q'
          aria-label='Digite aqui para pesquisar posts'
          placeholder='Digite aqui para pesquisar'
        />
        <SearchButton aria-label='Realizar busca'>
          <LuSearch />
        </SearchButton>
      </SearchForm>

      <h2>Veja todas as postagens mais recentes</h2>

      <Suspense
        fallback={
          <PostsContainer>
            {arrayLength.map((e, i) => (
              <SkeletonPostDetailsHome key={i} />
            ))}
          </PostsContainer>
        }
      >
        <Await
          resolve={data.PostsData}
          errorElement={<NoPost title={'Nenhuma postagem encontrada.'} />}
        >
          {posts =>
            posts?.data?.length ? (
              <PostsContainer>
                {posts.data.map(post => (
                  <PostDetailsHome key={post.id} post={post} />
                ))}
              </PostsContainer>
            ) : (
              <NoPost title={'Nenhuma postagem encontrada.'} />
            )
          }
        </Await>
      </Suspense>
    </ContainerHome>
  );
};

export default Index;

export async function homeLoader({ request }) {
  const paramsUrl = new URL(request.url).searchParams;
  const query = paramsUrl.get('q');

  return defer({
    PostsData: FetchDocuments('posts', query),
  });
}

// export async function homeAction({ request }) {
//   const data = await request.formData();
//   const query = data.get('query');

//   const redirectValue = query ? `?q=${query}` : '';

//   return redirect(redirectValue);
// }

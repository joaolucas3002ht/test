import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { LuTag } from 'react-icons/lu';
import { MdOutlineTextFields } from 'react-icons/md';
import { RxFilePlus } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { CreateInput } from '../../components/CreateInput';
import { UseAuthValue } from '../../context/AuthContext';
import { storage } from '../../firebase/config';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import {
  ButtonForm,
  ContainerFlex,
  ContainerForm,
  Error,
  Form,
  Progress,
  Textaria,
} from './styled.js';

import { ContainerCenter, SpinerLoading } from '../../styles/styledGlobal';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [, setMediaURL] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');
  const { user } = UseAuthValue();

  const { insertDocument, response } = useInsertDocument('posts');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setFormError('');

    const mediaFileInput = document.getElementById('mediaFileInput');
    const mediaFile = mediaFileInput?.files[0];

    if (!mediaFile) {
      setFormError('Selecione uma imagem ou vídeo.');
      return;
    }

    try {
      const randomName = generateRandomName(mediaFile.name);
      const mediaStorageRef = ref(storage, `posts/${randomName}`);
      const mediaUploadTask = uploadBytesResumable(mediaStorageRef, mediaFile);

      mediaUploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgressPercent(progress);
        },
        error => {
          console.error(error);
        },
        () => {
          getDownloadURL(mediaUploadTask.snapshot.ref).then(downloadURL => {
            setMediaURL(downloadURL);
            savePost(downloadURL);
          });
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setMediaURL('');
    setBody('');
    setTags('');
  };

  const savePost = mediaURL => {
    const post = {
      title,
      mediaURL,
      body,
      searchTokens: generateSearchTokens(title),
      tags: tags.split(',').map(tag => tag.trim()),
      uid: user.uid,
      createdBy: user.displayName,
    };

    insertDocument(post);

    navigate('/');
  };


    const stringInArray = string => {
      return [...string].map((_, index) => string.substring(0, index + 1));
    };

    const generateSearchTokens = title => {
      const correctedTitle = title.toLocaleLowerCase().replace(/\s+/g, ' ');

      const ArrayTitle = correctedTitle.split(' ');

      const substrings = ArrayTitle.reduce((acc, val) => {
        return (acc = [...acc, ...stringInArray(val)]);
      }, []);

      const titleAll = stringInArray(correctedTitle);

      const filter = [...substrings, ...titleAll].filter((element, index, arr) => {
        return arr.indexOf(element) === index;
      });

      return filter;
    };

  const generateRandomName = fileName => {
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const extension = fileName.split('.').pop();
    const randomName = `${randomSuffix}.${extension}`;
    return randomName;
  };

  useEffect(() => {
    document.title = 'Genuine Sistemas - Novo Post';
  }, []);

  if (formError) return null;

  return (
    <ContainerCenter>
      <ContainerForm>
        <h1>Criar novo post</h1>
        <Form onSubmit={handleSubmit}>
          <input type='hidden' name='uid' value={user.uid} />
          <input type='hidden' name='createdBy' value={user.displayName} />
          <ContainerFlex>
            <CreateInput
              Svg={MdOutlineTextFields}
              aria-label='Título'
              type='text'
              name='title'
              value={title}
              className='red'
              onChange={e => setTitle(e.target.value)}
              placeholder='Pense em um título de fácil entendimento...'
              required
            />
            <CreateInput
              Svg={RxFilePlus}
              type='file'
              className='red'
              aria-label='adicione arquivos de Imagem ou Vídeo'
              id='mediaFileInput'
              accept='image/*, video/*'
              required
            />
          </ContainerFlex>
          <Textaria
            aria-label='Descrição'
            name='body'
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder='Compartilhe seu conhecimento aqui...'
            required
          />
          <ContainerFlex>
            <CreateInput
              Svg={LuTag}
              aria-label={'Insira suas tags separadas por vírgula'}
              type='text'
              className='red'
              name='tags'
              value={tags}
              onChange={e => setTags(e.target.value)}
              placeholder='Insira suas tags separadas por vírgula...'
              required
            />
          </ContainerFlex>

          <ContainerFlex>
            <ButtonForm
              className='red'
              type='reset'
              onClick={resetForm}
              disabled={progressPercent > 1}
            >
              Limpar
            </ButtonForm>
            <ButtonForm className='red' disabled={progressPercent > 1}>
              {progressPercent < 1 ? 'Postar' : <SpinerLoading size={18} />}
            </ButtonForm>
          </ContainerFlex>
          {progressPercent >= 1 && <Progress value={50} min='0' max='100' />}
          {(response.error || formError) && <Error>{response.error || formError}</Error>}
        </Form>
      </ContainerForm>
    </ContainerCenter>
  );
};

export default CreatePost;

// export async function ActionCreatePost({ request }) {
//   const data = await request.formData();

//   const formData = Object.fromEntries(data);

//   const { tags, mediaURL } = formData;

//   const mediaFile = mediaURL?.files[0];

//   if (mediaFile) {
//     return { error: 'Selecione uma imagem ou vídeo.' };
//   }

//   try {
//     const mediaStorageRef = ref(storage, `posts/${mediaFile.name}`);
//     const mediaUploadTask = uploadBytesResumable(mediaStorageRef, mediaFile);

//     mediaUploadTask.on(
//       'state_changed',
//       snapshot => {
//         // const progress =
//         Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//       },

//       error => {
//         console.error(error);
//       },
//       () => {
//         // getDownloadURL(mediaUploadTask.snapshot.ref).then(downloadURL => {
//         // const post = {
//         //   ...formData,
//         //   mediaURL: downloadURL,
//         //   tags: tags.split(',').map(tag => tag.trim()),
//         // };
//         // InsertDocument('posts', post);
//         // });
//       },
//     );
//   } catch (error) {
//     return { type: 'ERROR', error: error.message, successMessage: '' };
//   }
// }

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { CreateInput } from '../../components/CreateInput';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { HiOutlinePhone } from 'react-icons/hi';
import { RxEnvelopeClosed, RxLockClosed, RxAvatar, RxPerson } from 'react-icons/rx';
import {MdOutlineAdminPanelSettings} from 'react-icons/md';

import {
  ButtonForm,
  ContainerForm,
  Error,
  Form,
  Success,
} from '../../styles/styledsLoaginAndRecord';

const Index = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [userStatus, setUserStatus] = useState('');

  useEffect(() => {
    document.title = 'Genuine Sistemas - Novo Usuário';
  }, []);

  const { createUser, error: authError, loading, successMessage, auth } = UseAuthentication();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const userIdMail = email;

    const user = {
      displayName,
      email,
      phoneNumber: cleanedPhoneNumber,
      userId: userIdMail,
      userName,
      password,
      userStatus,
    };

        if (userStatus === "") {
      setError('por favor selecione o tipo de usuário');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não são iguais');
      return;
    }

    const currentUser = auth.currentUser;

    await createUser(user);

    if (!loading && !authError) {
      await auth.updateCurrentUser(currentUser);
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <ContainerForm>
      <h1>Novo Cadastro</h1>
      <Form onSubmit={handleSubmit}>
        <CreateInput
          Svg={RxPerson}
          aria-label='Nome completo'
          type='text'
          name='displayName'
          required
          placeholder='Nome completo'
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          autoComplete='off'
        />
        <CreateInput
          Svg={RxAvatar}
          aria-label='Nome de usuário'
          type='text'
          name='userName'
          required
          placeholder='Nome de usuário'
          value={userName}
          onChange={e => setUserName(e.target.value)}
          autoComplete='off'
        />
        <CreateInput
          Svg={RxEnvelopeClosed}
          aria-label='E-mail do usuário'
          type='email'
          name='email'
          required
          placeholder='E-mail do usuário'
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete='off'
        />
        <CreateInput
          Svg={MdOutlineAdminPanelSettings}
          as='select'
          required
          value={userStatus}
          onChange={e => setUserStatus(e.target.value)}
        >
          <option value=''>Selecione o tipo de usuário</option>
          <hr/>
          <option value='admin'>Administrador</option>
          <hr/>
          <option value='funcionario'>Funcionário</option>
          <hr/>
          <option value='cliente'>Cliente</option>
          <hr/>
        </CreateInput>
        <CreateInput
          Svg={HiOutlinePhone}
          as={InputMask}
          aria-label='Celular do usuário'
          mask='(99) 99999-9999'
          maskPlaceholder={null}
          name='celular'
          required
          placeholder='Celular do usuário'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          autoComplete='off'
        />
        <CreateInput
          Svg={RxLockClosed}
          aria-label='Senha do usuário'
          type='password'
          name='password'
          required
          placeholder='Senha do usuário'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='off'
        />
        <CreateInput
          Svg={RxLockClosed}
          aria-label='Confirmação da senha'
          type='password'
          name='confirmPassword'
          required
          placeholder='Confirmação da senha'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          autoComplete='off'
        />
        <ButtonForm disabled={loading}>{loading ? ' Aguarde...' : 'Cadastrar'}</ButtonForm>
        {error && <Error>{error}</Error>}
        {successMessage && (
          <Success>
            <p className='success'>{successMessage}</p>
          </Success>
        )}
      </Form>
    </ContainerForm>
  );
};

export default Index;

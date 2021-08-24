import React from 'react';
import { LogInWrapper } from './style';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SUCCESS_ACTION } from 'reducer/user';
import { RootState } from 'reducer';
import { Redirect, useHistory } from 'react-router-dom';

type formValues = {
  ID: string;
  PW: string;
};

const Login = () => {
  const isLoggedIn = useSelector<RootState>((state) => state.user.logInSuccess);
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: formValues) => {
    if (data.ID.trim() === '' || data.PW.trim() === '') {
      console.log('모든 항목을 입력해주세요');
      return;
    }
    dispatch(LOGIN_SUCCESS_ACTION({ name: data.ID, email: data.ID, token: 'asdf' }));
    history.push('/');
    reset();
  };
  if (isLoggedIn) {
    <Redirect to="/" />;
  }
  return (
    <LogInWrapper>
      <div>
        <h2>Morello</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input placeholder="ID" {...register('ID')} />
          </div>
          <div>
            <input placeholder="PW" {...register('PW')} />
          </div>
          <button type="submit">LogIn</button>
        </form>
      </div>
      <ul>
        <li>
          <div>G</div>
        </li>
        <li>
          <div>I</div>
        </li>
        <li>
          <div>F</div>
        </li>
      </ul>
    </LogInWrapper>
  );
};

export default Login;

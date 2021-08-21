import React from 'react';
import { LogInWrapper } from './style';

const Login = () => {
  return (
    <LogInWrapper>
      <div>
        <h2>Morello</h2>
        <div>
          <input placeholder="ID" />
        </div>
        <div>
          <input placeholder="PW" />
        </div>
      </div>
      <button>LogIn</button>
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

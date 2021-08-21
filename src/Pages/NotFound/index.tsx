import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      잘못된 페이지 이동입니다.<Link to="/">이곳</Link>을 눌러 메인화면으로 이동하세요.
    </div>
  );
};

export default NotFound;

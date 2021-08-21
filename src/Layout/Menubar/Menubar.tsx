import MenuModal from 'Component/MenuModal/MenuModal';
import MyPageModal from 'Component/MyPageModal/MyPageModal';
import React, { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenubarWrapper } from './MenubarStyle';

const Menubar: FC = ({ children }) => {
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
  const [openMyPageModal, setOpenMyPageModal] = useState<boolean>(false);

  const onOpenMenuModal = useCallback(() => {
    console.log('hi');
    setOpenMenuModal(true);
  }, [setOpenMenuModal]);

  const onOpenMyPageModal = useCallback(() => {
    console.log('hi');
    setOpenMyPageModal(true);
  }, [setOpenMyPageModal]);
  const onCloseModal = useCallback(() => {
    setOpenMenuModal(false);
    setOpenMyPageModal(false);
  }, [setOpenMyPageModal, setOpenMenuModal]);
  return (
    <>
      <MenubarWrapper>
        <div>
          <div>
            <span onClick={onOpenMenuModal}>Menu</span>
          </div>
          <div>
            <span>
              <Link to="/">Home</Link>
            </span>
          </div>
          <div>
            <span>
              <Link to="/boards">Board</Link>
            </span>
          </div>
          <div>
            <span>
              <input placeholder="search" />
            </span>
          </div>
        </div>
        <div>
          <span>ICON</span>
        </div>
        <div>
          <div>
            <span>+</span>
          </div>
          <div>
            <span>Info</span>
          </div>
          <div>
            <span>bell</span>
          </div>
          <div>
            <span onClick={onOpenMyPageModal}>name</span>
          </div>
        </div>
      </MenubarWrapper>
      {openMenuModal && (
        <MenuModal onCloseModal={onCloseModal} openModal={openMenuModal}>
          안녕하세요 우리 잘 지내보아요
        </MenuModal>
      )}
      {openMyPageModal && (
        <MyPageModal onCloseModal={onCloseModal} openModal={openMyPageModal}>
          안녕하세요 우리 잘 지내보아요
        </MyPageModal>
      )}
      {children}
    </>
  );
};

export default Menubar;

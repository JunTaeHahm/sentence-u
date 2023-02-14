import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillCaretDownFill } from 'react-icons/bs';

import ProfileMenu from '@components/ProfileMenu';
import WriteModal from '@components/WriteModal';
import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';

import {
  Container,
  HeaderLogo,
  LoginButton,
  LoginButtonBack,
  LoginWrap,
  NavWrap,
  WriteButton,
  WriteButtonBack,
  WriteWrap,
} from './styles';

const NavBar = () => {
  const ref = useRef();
  const { userId, userName, userAvatar } = useGetClientUser();

  const [isBtnActive, setIsBtnActive] = useState(false);
  const [wirteModalOpen, setWirteModalOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  /* 프로필 메뉴 클릭 시 */
  const onClickProfile = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  /* 글 작성 모달 버튼 클릭 시 */
  const onWriteHandler = useCallback(() => {
    if (userName) {
      // 로그인 상태에만 이용 가능하도록
      setWirteModalOpen(true);
      setIsBtnActive(true);
    } else {
      sweetAlert('warning', '로그인 후 이용 가능합니다.');
    }
  }, [userName]);

  /* 프로필메뉴 밖 클릭 시 닫히는 함수 */
  useClickOutsideModal(ref, () => {
    setProfileMenuOpen(false);
  });

  return (
    <Container>
      <NavWrap>
        <HeaderLogo>
          <Link to='/'>
            <img
              src='https://www.sentenceu.co.kr/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </Link>
        </HeaderLogo>

        {userName && (
          <WriteWrap>
            <WriteButtonBack>
              <WriteButton isBtnActive={isBtnActive} onClick={() => onWriteHandler()}>
                새 글 작성
              </WriteButton>
            </WriteButtonBack>
          </WriteWrap>
        )}

        <LoginWrap ref={ref} onClick={onClickProfile}>
          {/* 로그인 상태에 따라 보이는 메뉴 다르도록 */}
          {!userName ? (
            <LoginButtonBack>
              <LoginButton>
                <Link to='/login'>시작하기</Link>
              </LoginButton>
            </LoginButtonBack>
          ) : (
            <Link>
              <img alt={userName} src={userAvatar} />
              <BsFillCaretDownFill />
            </Link>
          )}

          {userName && userAvatar ? (
            <ProfileMenu isOpened={profileMenuOpen} onClick={onClickProfile} />
          ) : (
            <ProfileMenu isOpened={profileMenuOpen} onClick={onClickProfile} />
          )}
        </LoginWrap>

        {wirteModalOpen && (
          <WriteModal
            userId={userId}
            userName={userName}
            userAvatar={userAvatar}
            setIsBtnActive={setIsBtnActive}
            wirteModalOpen={wirteModalOpen}
            setWirteModalOpen={setWirteModalOpen}
          />
        )}
      </NavWrap>
    </Container>
  );
};

export default NavBar;

import { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { TapContext } from "../hooks/TapContext";

type TabProps = {
  isActive: boolean;
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--green-color);
  color: #fff;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const MenuItem = styled.div<TabProps>`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? "white" : "transparent")};
  color: ${(props) => (props.isActive ? "black" : "var(--mint-color)")};

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const AuthButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const AuthButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
`;

const Navbar = () => {
  const { setIsLogin } = useContext(AuthContext);
  const [activeMenuItem, setActiveMenuItem] = useState(0); // 현재 활성화된 메뉴 아이템의 인덱스를 상태로 관리
  const [mode, setMode] = useState("");
  const { tapItem, setTapItem} = useContext(TapContext);

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    localStorage.setItem("isLogin", "False");
    localStorage.setItem("loginId", "");
    alert("로그아웃 완료 되었습니다!");
    setIsLogin(false);
    setMode("LOGIN");
  };

  const navigate = useNavigate();
  const id = localStorage.getItem("loginId");
  useEffect(() => {
    if (localStorage.getItem("loginId") !== "") {
      setMode("WELCOME");
    } else {
      localStorage.setItem("loginId", "");
      setMode("LOGIN");
    }
  }, []);

  let content: any = null;

  if (mode === "LOGIN") {
    content = (
      <>
        <AuthButton onClick={() => navigate("/login")}>로그인</AuthButton>
        <AuthButton onClick={() => navigate("/Join")}>회원가입</AuthButton>
      </>
    );
  } else if (mode === "WELCOME") {
    content = (
      <>
        <AuthButton onClick={() => navigate(`/myPage/${id}`)}>{id}</AuthButton>
        <AuthButton onClick={handleBtnClick}>로그아웃</AuthButton>
      </>
    );
  }

  const handleMenuItemClick = (menuItemIndex: number) => {
    if (menuItemIndex == 0){
      localStorage.removeItem('curTap')
    }
    else if (menuItemIndex == 1){
      localStorage.setItem('curTap', 'recipe')
    } else {
      localStorage.setItem('curTap', 'community')
    }
    setActiveMenuItem(menuItemIndex);
    setTapItem(menuItemIndex);
  };

  const curTapName = localStorage.getItem("curTap");
  useEffect(() => {
    if (curTapName === "recipe") setActiveMenuItem(1)
    else if (curTapName === "community") setActiveMenuItem(2)
    else setActiveMenuItem(0)
  }, []);

  return (
    <NavbarWrapper>
      <img
        src="/logo.png"
        alt="logo"
        width="180px"
        onClick={() => {
          navigate("/");
          handleMenuItemClick(0);
        }}
      />
      <MenuWrapper>
        <MenuItem
          isActive={activeMenuItem === 1}
          onClick={() => {
            handleMenuItemClick(1);
            navigate("/recipe_list");
          }}
        >
          Recipe
        </MenuItem>
        <MenuItem
          isActive={activeMenuItem === 2}
          onClick={() => {
            handleMenuItemClick(2);
            navigate("/board_list");
          }}
        >
          Community
        </MenuItem>
      </MenuWrapper>

      <AuthButtonsWrapper>{content}</AuthButtonsWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Container from "../UI/Container";
import { Link } from "react-router-dom";

const Title = styled.h2`
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 50%;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #678570;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #32503b;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginLink = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  & > a {
    text-decoration: none;
  }
`;

const ItemBtn = styled.button<{ isActive: boolean }>`
  padding: 10px;
  font-size: 16px;
  background-color: ${({ isActive }) => (isActive ? "#678570" : "#fff")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
`;

const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMsg = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const SelectError = styled(ErrorMsg)`
  margin-top: 0.5rem;
`;
const Join = () => {
  const [clickedCategory, setClickCategory] = useState("");
  const foodStyle = ["한식", "중식", "일식", "양식"];

  const [validId, setvalidId] = useState(false);
  const [validPassword, setvalidPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [name, setName] = useState(false);
  const [selectFood, setSelectFood] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectFood(true);
    setClickCategory(e.currentTarget.name);
  };

  //영문자로 시작하는 영문자 또는 숫자 6~20자
  const isId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!regExp.test(e.target.value)) {
      // console.log(e.target.value);
      setvalidId(false);
    } else setvalidId(true);
  };

  //8 ~ 16자 영문, 숫자 조합
  const isPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    if (!regExp.test(e.target.value)) {
      // console.log(e.target.value);
      setvalidPassword(false);
    } else setvalidPassword(true);
  };

  //비밀번호 재확인
  const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== password) {
      // console.log(e.target.value);
      setCheckPassword(false);
    } else setCheckPassword(true);
  };

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/g;
    if (!regExp.test(e.target.value)) setName(false);
    else setName(true);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>회원가입</Title>
        <LoginLink>
          계정이 이미 있으십니까? <Link to="/login">로그인</Link>
        </LoginLink>
        <Form>
          <FormGroup>
            <Label>아이디 </Label>
            <Input
              onChange={isId}
              type="text"
              placeholder="아이디 입력"
            ></Input>
            {!validId && (
              <ErrorMsg>영문 혹은 숫자 6자 이상 20자 이하 입력바람</ErrorMsg>
            )}
          </FormGroup>
          <FormGroup>
            <Label>비밀번호 </Label>
            <Input
              onChange={isPassword}
              type="password"
              placeholder="비밀번호 입력"
            ></Input>
            {!validPassword && (
              <ErrorMsg>8자 이상 16자 이하의 영문, 숫자 조합 입력</ErrorMsg>
            )}
          </FormGroup>
          <FormGroup>
            <Label>비밀번호 재입력</Label>
            <Input
              onChange={confirmPassword}
              type="password"
              placeholder="비밀번호 재입력"
            ></Input>
            {!checkPassword && (
              <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
            )}
          </FormGroup>
          <FormGroup>
            <Label>닉네임</Label>
            <Input
              onChange={handleNickName}
              type="text"
              placeholder="닉네임 입력"
            ></Input>
            {!name && <ErrorMsg>영문, 한글 숫자만 가능</ErrorMsg>}
          </FormGroup>
          <FormGroup>
            <Label>관심 분야</Label>
            <ItemGroup>
              {foodStyle.map((elm, idx) => {
                return (
                  <ItemBtn
                    type="button"
                    key={idx}
                    onClick={handleClick}
                    name={elm}
                    isActive={clickedCategory === elm}
                  >
                    {elm}
                  </ItemBtn>
                );
              })}
            </ItemGroup>
            {!selectFood && <SelectError>종류를 선택해주세요</SelectError>}
          </FormGroup>
          <ButtonGroup>
            <Button
              disabled={
                !validId ||
                !validPassword ||
                !checkPassword ||
                !name ||
                !selectFood
              }// onClick={() => {
              //   const userData = {
              //     isId: isId,
              //     isPassword: isPassword,
              //     handleNickName : handleNickName,
              //     selectFood : selectFood
              //   };
              //   fetch("http://localhost:5000/Join", { //signin 주소에서 받을 예정
              //     method: "post", // method :통신방법
              //     headers: {      // headers: API 응답에 대한 정보를 담음
              //       "content-type": "application/json",
              //     },
              //     body: JSON.stringify(userData), //userData라는 객체를 보냄
              //   })
              //     .then((res) => res.json())
              //     .then((json) => {
              //       if(json.isSuccess==="True"){
              //         alert('회원가입이 완료되었습니다!')
              //         props.setMode("LOGIN");
              //       }
              //       else{
              //         alert(json.isSuccess)
              //       }
              //     });
              // }} 
            >
              회원가입
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </>
  );
};

export default Join;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import CommentItem from "../components/CommentItem";
import { cmtData } from "../components/type";
import { useNavigate } from "react-router-dom";
import "./cmt.css";  
const Wrap = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* @media screen and (max-width: 800px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
  } */
`;

const PostWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostView  = styled.div`
  margin: 10px 0;
  display: flex;
`;

const ContentView  = styled.div`
  margin: 10px 0;
  display: flex;
`;

const PostView1 = styled.label`
  margin: 10px 0;
  width: 20%;
  font-weight: bold;
`;

const PostView2 = styled.label`
  margin: 10px 0;
  width: 80%;
`;

const ModifyButton = styled.button`
  cursor: pointer;
  background-color: var(--green-color);
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-left: 10%;
  margin-top: 3%;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color:  var(--green-color);
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-left: 1%;
`;

const ListButton = styled.button`
  cursor: pointer;
  background-color:  var(--green-color);
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-left: 1%;
`;

const Main = styled.div`
  background-color: var(--mint-color);
  width: 80%;
`;

const Btn = styled.button`
  width:15%;
    height: 29px;
    text-align: center;
    box-sizing: border-box;
    text-decoration: none;
    border:none;
    background:#333;
    color:#fff;
    font-size:14px;
    cursor: pointer;
`

const Board = () => {
  const params = useParams();
  // console.log(params.recipe_idx);

  const [registerData, setRegisterData] = useState({
    members: localStorage.getItem('loginId'),
    board_idx: params.board_idx
  });

  const [registerCmtData, setRegisterCmtData] = useState({
    CmtContent: "", // 게시판 제목
    CmtPassword: "", // 내용
    board_idx: params.board_idx,  
    members: localStorage.getItem('loginId') // 내용
  });

  const handleValueChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRegisterCmtData({
      ...registerCmtData,
      [e.target.name]: e.target.value,
    });
  };


  const [board_idx, setboard_idx] = useState<string>("");
  const [title, settitle] = useState();
  const [content, setcontent] = useState<string>("")
  const [members, setmembers] = useState<string>("")
  const [boardstyle, setboardstyle] = useState();
  const [create_date, setcreate_date] = useState();
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetch(`http://ec2-3-34-47-79.ap-northeast-2.compute.amazonaws.com:8081/comments/api/cmtList/${params.board_idx}`);
      const data = await res.json();

      if (!res.ok) {
        console.log("error : ", data.description);
        return;
      }
      console.log("data : ", data);
        setListData(data)
    } catch (error) {
      console.log("Error!", error);
    }
  };

  const fetchRecipeHelper = async () => {
    try {
      const res = await fetch(
        `http://ec2-3-34-47-79.ap-northeast-2.compute.amazonaws.com:8081/community/api/board/${params.board_idx}`
      );
      const data = await res.json();

      if (!res.ok) {
        console.log("error : ", data.description);
        return;
      }
      // console.log("data : ", data.result[0]);
      setboard_idx(data[0].board_idx);
      settitle(data[0].title);
      setcontent(data[0].content);
      setmembers(data[0].members);
      setboardstyle(data[0].boardstyle);
      setcreate_date(data[0].create_date);
    } catch (error) {
      console.log("Error!", error);
    }
  };

  useEffect(() => {
    fetchRecipeHelper();
    fetchData();
  }, []);

  const deleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault(); // 버튼 클릭의 기본 동작 중지
    fetch("http://ec2-3-34-47-79.ap-northeast-2.compute.amazonaws.com:8081/community/api/boardDelete", {
      method: "post", // method :통신방법
      headers: {
        // headers: API 응답에 대한 정보를 담음
        "content-type": "application/json",
      },
      body: JSON.stringify(registerData), //join 객체를 보냄
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess === "True") {
          alert("게시글 삭제 완료!");
          console.log("게시글 삭제 완료!");
          navigate("/board_list");
        } else {
          alert(data.isSuccess);
        }
      }).catch(function(err) {
        console.error(` Err: ${err}`);
    })
  };

  const modifyBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault(); // 버튼 클릭의 기본 동작 중지
    fetch("http://ec2-3-34-47-79.ap-northeast-2.compute.amazonaws.com:8081/community/api/infoCheck", {
      method: "post", // method :통신방법
      headers: {
        // headers: API 응답에 대한 정보를 담음
        "content-type": "application/json",
      },
      body: JSON.stringify(registerData), //join 객체를 보냄
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess === "True") {
          navigate("/board_modify", {state:board_idx})
        } else {
          alert(data.isSuccess);
        }
      }).catch(function(err) {
        console.error(` Err: ${err}`);
    })
  };
    const cmtbtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault(); // 버튼 클릭의 기본 동작 중지
      fetch("http://ec2-3-34-47-79.ap-northeast-2.compute.amazonaws.com:8081/comments/api/upload", {
        method: "post", // method :통신방법
        headers: {
          // headers: API 응답에 대한 정보를 담음
          "content-type": "application/json",
        },
        body: JSON.stringify(registerCmtData), //join 객체를 보냄
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.isSuccess === "True") {
            setRegisterCmtData({ ...registerCmtData, CmtContent: "", CmtPassword: "" }); // CmtContent 초기화
            fetchData();
          } else {
            alert(data.isSuccess);
          }
        }).catch(function(err) {
          console.error(` Err: ${err}`);
      })
    }


  return (
    <div>
    <NavBar />
    <Wrap>
      <Main>

      <PostWrapper>
              <PostView>
                <PostView1>게시글 번호</PostView1>
                <PostView2>{ board_idx }</PostView2>
              </PostView>
              <PostView>
                <PostView1>게시글 유형</PostView1>
                <PostView2>{ boardstyle }</PostView2>
              </PostView>
              <PostView>
                <PostView1>제목</PostView1>
                <PostView2>{ title }</PostView2>
              </PostView>
              <PostView>
                <PostView1>작성한 사람</PostView1>
                <PostView2>{ members }</PostView2>
              </PostView>
              <PostView>
                <PostView1>작성일</PostView1>
                <PostView2>{ create_date }</PostView2>
              </PostView>
              {/* <div className="post-view-row">
                <label>조회수</label>
                <label>{  }</label>
              </div> */}
              <ContentView>
                <PostView1>내용</PostView1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </ContentView>
      </PostWrapper>
        <ModifyButton onClick={modifyBtnClick}>게시글 수정</ModifyButton>
        <DeleteButton onClick={deleteBtnClick}>게시글 삭제</DeleteButton>
        <ListButton onClick={() => navigate("/board_list")}>목록 돌아가기</ListButton>
        <ul className = 'comment'>
        <li> 
          <form>  
               <span className='ps-box'>
                  <input onChange={handleValueChange} value={registerCmtData.CmtContent} type='text' name= "CmtContent" className='CmtContent' placeholder='write comment'/>
               </span>
               <span className='ps-box'>
                  <input onChange={handleValueChange} value={registerCmtData.CmtPassword} type='text' name= "CmtPassword" className='CmtPassword' placeholder='비밀번호' />
               </span>
               <Btn className='btn' onClick={cmtbtnClick}>작성하기</Btn>
            </form>
         </li>

            {listData
              .map((ele: cmtData) => {
                //const date = ele.created_date.slice(0, 10);
                return (
                  <CommentItem
                    key={ele.comments_idx}
                    Cmtidx={ele.comments_idx}
                    CmtComment={ele.comments_content}
                    CmtWriter={ele.members}
                    CmtDate={ele.create_date}
                    CmtPassword={ele.pwd}
                    BoardIdx={ele.board_idx}
                  /> 
                );
                
              })}
         </ul>
        </Main>
      </Wrap>
    </div>
  );
};

export default Board;

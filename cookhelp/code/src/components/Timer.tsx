import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useTimer from "../hooks/useTimer";

const BtnWrap = styled.div`
  display: felx;
  justify-content: center;
`;

const StyledTimer = styled.div`
  width: 200px;
  margin: auto;
`;

const TimerText = styled.h1`
  width: fit-content;
  margin: auto;
`;

const Timer = ({ curTime, Idx }: { curTime?: number; Idx: number }) => {
  const { start, stop, reset, hh, mm, ss } = useTimer(curTime || 0, 1000, Idx);

  // timer 값이 undefined면 null 리턴하고 종료
  if (curTime === undefined) {
    return null;
  }

  // console.log("curTime : ", curTime);
  //   console.log(hh, mm, ss);
  //   console.log(count);

  return (
    <StyledTimer>
      <TimerText>
        {hh < 10 ? `0${hh}` : hh}:{mm < 10 ? `0${mm}` : mm}:
        {ss < 10 ? `0${ss}` : ss}
      </TimerText>
      <BtnWrap>
        <button onClick={start}>시작</button>
        <button onClick={stop}>정지</button>
        <button onClick={reset}>다시</button>
      </BtnWrap>
    </StyledTimer>
  );
};

export default Timer;

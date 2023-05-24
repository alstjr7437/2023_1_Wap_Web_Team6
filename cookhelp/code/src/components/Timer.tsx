import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

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

const useCounter = (initialValue: number, ms: number) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setCount((c) => {
        if (c <= 0) {
          stop();
          return 0;
        }
        return c - 1;
      });
    }, ms);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
    stop();
  }, [initialValue, stop]);

  return { count, start, stop, reset };
};

const Timer = ({ curTime }: { curTime: number }) => {
  const [hh, setHH] = useState(Math.floor(curTime / 3600));
  const [mm, setMM] = useState(Math.floor((curTime % 3600) / 60));
  const [ss, setSS] = useState(curTime % 60);
  const { count, start, stop, reset } = useCounter(curTime, 1000);

  useEffect(() => {
    const remainingTime = Math.max(count, 0);
    setHH(Math.floor(remainingTime / 3600));
    setMM(Math.floor((remainingTime % 3600) / 60));
    setSS(remainingTime % 60);
  }, [count]);

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

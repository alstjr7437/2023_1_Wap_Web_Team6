import React, { useState, useEffect, useRef, useCallback } from "react";

const useTimer = (initialValue: number, ms: number, Idx: number) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef<number | null>(null);
  const [hh, setHH] = useState(
    initialValue !== undefined ? Math.floor(initialValue / 3600) : 0
  );
  const [mm, setMM] = useState(
    initialValue !== undefined ? Math.floor((initialValue % 3600) / 60) : 0
  );
  const [ss, setSS] = useState(
    initialValue !== undefined ? initialValue % 60 : 0
  );

  useEffect(() => {
    setCount(initialValue);
    stop();
    setHH(initialValue !== undefined ? Math.floor(initialValue / 3600) : 0);
    setMM(
      initialValue !== undefined ? Math.floor((initialValue % 3600) / 60) : 0
    );
    setSS(initialValue !== undefined ? initialValue % 60 : 0);
  }, [initialValue, Idx]);

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
  }, [initialValue, Idx]);

  const stop = useCallback(() => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, [initialValue, Idx]);

  const reset = useCallback(() => {
    setCount(initialValue);
    stop();
  }, [initialValue, stop, Idx]);

  useEffect(() => {
    const remainingTime = Math.max(count, 0);
    setHH(Math.floor(remainingTime / 3600));
    setMM(Math.floor((remainingTime % 3600) / 60));
    setSS(remainingTime % 60);
  }, [count, Idx]);

  //   console.log("initialValue : ", initialValue);
  //   console.log("count : ", count);

  return { start, stop, reset, hh, mm, ss };
};

export default useTimer;

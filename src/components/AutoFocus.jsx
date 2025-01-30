import { useEffect } from "react";
import { useRef } from "react";

const AutoFocus = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  });
  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  );
};
export default AutoFocus;

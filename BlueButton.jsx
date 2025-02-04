import React from "react";
import styles from "./BlueButton.module.css";

export default function BlueButton({ text, check }) {
  const handleClick = () => {
    check === false && window.alert("개인정보 수집 내용에 동의해주세요");
  }; // check 안 되어있는 상태로 클릭하면 alert 발생

  return (
    <button  // check가되면 버튼 색 (회색 => 남색) 변경
      className={`${styles.button} ${check ? "" : styles.checked}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
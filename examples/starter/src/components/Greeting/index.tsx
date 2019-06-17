import React from "react";

// Declare Props Object (Blueprint)
import { IProps } from "../../models/HelloProps";

// -------- RFC with TypeScript --------
export default ({ name, enthusiasmLevel = 1 }: IProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic!");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {`${name + getExclamationMarks(enthusiasmLevel)}`}
      </div>
      {/* <button onClick={}>Increase</button>
      <button onClick={}>Decrease</button> */}
    </div>
  );
};

// -------- Helper Function --------
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

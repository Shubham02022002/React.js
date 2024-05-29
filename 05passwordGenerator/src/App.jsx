/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [includeNum, setIncludeNum] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState("Copy");
  const [prevPasswords, setPrevPasswords] = useState([]);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let code = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrustuvwxyz";
    if (includeNum) str += "1234567890";
    if (includeChar) str += "~`!@#$%^&*()_-+=[]{}|'/?.,<>:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      code += str.charAt(char);
    }
    setPrevPasswords((prev) => [...prev, code]);
    setPassword(code);
    console.log(prevPasswords);
    setCopied("Copy");
  }, [length, includeChar, includeNum, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
    setCopied("Copied!");
  }, [password]);

  // useEffect(() => {
  //   if (password) {
  //     setPrevPasswords((prev) => [...prev, password]);
  //   }
  // }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, includeNum, includeChar, passwordGenerator]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
       rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            {copied}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNum}
              id="numberInput"
              onChange={() => {
                setIncludeNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeChar}
              id="charInput"
              onChange={() => {
                setIncludeChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
      <h1 className="text-orange-500 w-ful text-center">Previous Passwords</h1>
      <div
        className="w-full max-w-md mx-auto shadow-md overflow-x-auto text-center
       rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700"
      >
        {prevPasswords.map((prevPassword, index) => (
          <div className="w-full max-w-md mx-auto shadow-md text-center overflow-x-auto
          rounded-lg px-4 py-3 my-8 text-orange-500 bg-white" key={index}>{prevPassword}</div>
        ))}
      </div>
      
    </>
  );
}

export default App;

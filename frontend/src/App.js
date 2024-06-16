import './App.css';
import BookItem from "./components/BookItem";
import {bookSearchListMock} from "./mocks";
import FilterItem from "./components/FilterItem/FilterItem";
import InputBox from "./components/InputBox";
import React, {useState} from "react";

function App() {
    const [value, setValue] = useState('');
  return (
    <>
      <InputBox label='이메일' type='text' placeholder='아이디를 입력해주세요.' value={value} error={true} setValue={setValue} message={'sfdsfds'}/>
    </>
  );
}

export default App;

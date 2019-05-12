/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Editor from "../../Components/Editor/Editor";

// mutation 함수를 외부에서 실행하기 위해 담을 변수 생성
let _createNote;

const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String!) @client {
    createNote(title: $title, content: $content) {
      id
    }
  }
`;

const Add = ({ history: { push } }) => {
  const _onSave = (title, content) => {
    if (title !== "" && content !== "") {
      _createNote({ variables: { title, content } });
      push("/");
    }
  };

  return (
    <Mutation mutation={ADD_NOTE}>
      {createNote => {
        _createNote = createNote;
        return <Editor onSave={_onSave} />;
      }}
    </Mutation>
  );
};

export default Add;

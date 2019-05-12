/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";
// TextArea에 내용이 길어질 때 자동으로 height를 늘려줌 ( 스크롤 x )
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

// eslint-disable-next-line react/prop-types
const Editor = ({ title, content, id, onSave }) => {
  const [_title, setTitle] = useState(title || "");
  const [_content, setContent] = useState(content || "");
  const [_id] = useState(id || 0);

  const _onInputChange = ({ target }) => {
    const { value, name } = target;
    // eslint-disable-next-line no-unused-expressions
    name === "title" ? setTitle(value) : setContent(value);
  };

  const _onSave = () => {
    onSave(_title, _content, _id);
  };

  return (
    <>
      <TitleContainer>
        <TitleInput
          value={_title}
          onChange={_onInputChange}
          placeholder="Untitled..."
          name="title"
        />
        <Button onClick={_onSave}>Save</Button>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          value={_content}
          onChange={_onInputChange}
          placeholder="# This supports markdown!"
          name="content"
        />
        <MarkdownRenderer markdown={_content} className="markdown" />
      </ContentPreview>
    </>
  );
};

export default Editor;

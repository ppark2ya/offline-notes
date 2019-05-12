/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { GET_NOTE } from "../../queries";
import Editor from "../../Components/Editor";

let _editNote;

export const EDIT_NOTE = gql`
  mutation editNote($id: Int!, $title: String!, $content: String!) @client {
    editNote(id: $id, title: $title, content: $content) {
      id
    }
  }
`;
const Edit = ({
  match: {
    params: { id }
  },
  history: { push }
}) => {
  // eslint-disable-next-line no-shadow
  const _onSave = (title, content, id) => {
    if (title !== "" && content !== "" && String(id)) {
      _editNote({ variables: { title, content, id } });
      push("/");
    }
  };

  return (
    <Query query={GET_NOTE} variables={{ id }}>
      {({ data }) =>
        data.note ? (
          <Mutation mutation={EDIT_NOTE}>
            {editNote => {
              _editNote = editNote;
              return (
                <Editor
                  title={data.note.title}
                  content={data.note.content}
                  id={data.note.id}
                  onSave={_onSave}
                />
              );
            }}
          </Mutation>
        ) : null
      }
    </Query>
  );
};

export default Edit;

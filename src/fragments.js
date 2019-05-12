import gql from "graphql-tag";

// eslint-disable-next-line import/prefer-default-export
export const NOTE_FRAGMENT = gql`
  fragment NoteParts on Note {
    id
    title
    content
  }
`;

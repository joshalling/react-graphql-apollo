import gql from 'graphql-tag';

export const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

export const UNSTAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

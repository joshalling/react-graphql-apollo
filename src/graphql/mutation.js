import gql from 'graphql-tag';

export const STAR_ADD = gql`
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

export const STAR_REMOVE = gql`
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

export const WATCH_REPOSITORY = gql`
  mutation($id: ID!, $viewerSubscription: SubscriptionState!) {
    updateSubscription(
      input: { state: $viewerSubscription, subscribableId: $id }
    ) {
      subscribable {
        id
        viewerSubscription
      }
    }
  }
`;

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from '../Loading';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;

const Profile = () => {
  return (
    <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
      {({ data, loading }) => {
        const { viewer } = data;

        return loading || !viewer ? (
          <Loading />
        ) : (
          <div>
            {viewer.name} {viewer.login}
          </div>
        );
      }}
    </Query>
  );
};

export default Profile;

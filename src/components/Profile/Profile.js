import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from '../Loading/Loading';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;
const Profile = () => {
  return (
    <Query query={GET_CURRENT_USER}>
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

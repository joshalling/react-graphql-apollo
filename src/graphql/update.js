import { GET_REPOSITORIES_OF_CURRENT_USER } from './query';

export const starMutationUpdate = cache => {
  const {
    viewer: { repositories }
  } = cache.readQuery({ query: GET_REPOSITORIES_OF_CURRENT_USER });
  cache.writeQuery({
    query: GET_REPOSITORIES_OF_CURRENT_USER,
    data: {
      viewer: {
        repositories: {
          edges: repositories.edges.sort(
            (a, b) =>
              b.node.stargazers.totalCount - a.node.stargazers.totalCount
          )
        }
      }
    }
  });
};

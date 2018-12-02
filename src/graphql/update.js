import { GET_REPOSITORIES_OF_CURRENT_USER } from './query';

export const starMutationUpdate = cache => {
  const { viewer } = cache.readQuery({
    query: GET_REPOSITORIES_OF_CURRENT_USER
  });
  cache.writeQuery({
    query: GET_REPOSITORIES_OF_CURRENT_USER,
    data: {
      viewer: {
        ...viewer,
        repositories: {
          ...viewer.repositories,
          edges: viewer.repositories.edges.sort(
            (a, b) =>
              b.node.stargazers.totalCount - a.node.stargazers.totalCount
          )
        }
      }
    }
  });
};

export const starMutationResponse = ({ id, totalCount, viewerHasStarred }) => ({
  __typename: 'AddStarPayload',
  starrable: {
    id,
    stargazers: {
      __typename: 'StargazerConnection',
      totalCount: totalCount
    },
    __typename: 'Repository',
    viewerHasStarred: !viewerHasStarred
  }
});

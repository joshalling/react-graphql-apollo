export const starAddResponse = ({ id, stargazers }) => ({
  addStar: {
    __typename: 'AddStarPayload',
    starrable: {
      id,
      stargazers: {
        __typename: 'StargazerConnection',
        totalCount: stargazers.totalCount + 1
      },
      __typename: 'Repository',
      viewerHasStarred: true
    }
  }
});
export const starRemoveResponse = ({ id, stargazers }) => ({
  removeStar: {
    __typename: 'AddStarPayload',
    starrable: {
      id,
      stargazers: {
        __typename: 'StargazerConnection',
        totalCount: stargazers.totalCount - 1
      },
      __typename: 'Repository',
      viewerHasStarred: false
    }
  }
});

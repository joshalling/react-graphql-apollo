import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '../../Button';
import Link from '../../Link';
import { STAR_ADD, STAR_REMOVE } from '../../../graphql/mutation';
import { starMutationUpdate } from '../../../graphql/update';
import { starMutationResponse } from '../../../graphql/optimisticResponse';
import '../style.css';

const RepositoryItem = ({
  descriptionHTML,
  id,
  name,
  owner,
  primaryLanguage,
  stargazers,
  url,
  viewerHasStarred,
  viewerSubscription,
  watchers
}) => (
  <div>
    <div className="RepositoryItem-title">
      <h2>
        <Link href={url}>{name}</Link>
      </h2>
      <div>
        {!viewerHasStarred ? (
          <Mutation
            mutation={STAR_ADD}
            variables={{ id }}
            update={starMutationUpdate}
            optimisticResponse={{
              addStar: starMutationResponse({
                id,
                totalCount: stargazers.totalCount + 1,
                viewerHasStarred
              })
            }}
          >
            {(addStar, { data, loading, error }) => (
              <Button className="RepositoryItem-title-action" onClick={addStar}>
                Star {stargazers.totalCount}
              </Button>
            )}
          </Mutation>
        ) : (
          <Mutation
            mutation={STAR_REMOVE}
            variables={{ id }}
            update={starMutationUpdate}
            optimisticResponse={{
              removeStar: starMutationResponse({
                id,
                totalCount: stargazers.totalCount - 1,
                viewerHasStarred
              })
            }}
          >
            {(removeStar, { data, loading, error }) => (
              <Button
                className="RepositoryItem-title-action"
                onClick={removeStar}
              >
                Unstar {stargazers.totalCount}
              </Button>
            )}
          </Mutation>
        )}
      </div>
    </div>
    <div className="RepositoryItem-description">
      <div
        className="RepositoryItem-description-info"
        dangerouslySetInnerHTML={{ __html: descriptionHTML }}
      />
      <div className="RepositoryItem-description-details">
        <div>
          {primaryLanguage && <span>Language: {primaryLanguage.name}</span>}
        </div>
        <div>
          {owner && (
            <span>
              Owner: <Link href={owner.url}>{owner.login}</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default RepositoryItem;

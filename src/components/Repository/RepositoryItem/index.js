import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '../../Button';
import Link from '../../Link';
import { STAR_REPOSITORY, UNSTAR_REPOSITORY } from '../../../graphql/mutation';
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
          <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
            {(addStar, { data, loading, error }) => (
              <Button
                className="RepositoryItem-title-action"
                onClick={addStar}
              >
                Star {stargazers.totalCount}
              </Button>
            )}
          </Mutation>
        ) : (
          <Mutation mutation={UNSTAR_REPOSITORY} variables={{ id }}>
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
          {primaryLanguage && (
            <span>Language: {primaryLanguage.name}</span>
          )}
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

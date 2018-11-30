import React from 'react';
import Link from '../../Link';
import '../style.css';

const RepositoryItem = ({
  descriptionHTML,
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
      <div className="RepositoryItem-title-action">
        {stargazers.totalCount} Stars
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

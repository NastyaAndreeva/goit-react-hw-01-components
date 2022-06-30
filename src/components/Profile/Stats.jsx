import PropTypes from 'prop-types';
import { ProfileStatsList, ProfileStatsListItem, ProfileStatsValues } from '.';

export const Stats = ({ followers, views, likes }) => {
  return (
    <ProfileStatsList className="stats">
      <ProfileStatsListItem>
        <span className="label">Followers</span>
        <ProfileStatsValues className="quantity">
          {followers}
        </ProfileStatsValues>
      </ProfileStatsListItem>
      <ProfileStatsListItem>
        <span className="label">Views</span>
        <ProfileStatsValues className="quantity">{views}</ProfileStatsValues>
      </ProfileStatsListItem>
      <ProfileStatsListItem>
        <span className="label">Likes</span>
        <ProfileStatsValues className="quantity">{likes}</ProfileStatsValues>
      </ProfileStatsListItem>
    </ProfileStatsList>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

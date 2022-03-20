import type { NextPage } from 'next';
import { WebComponentContainer } from '../components/hoc/webComponentContainer/WebComponentContainer';
import { IndividualLeaderboard } from '../components/web/individualLeaderboard/IndividualLeaderboard';

const IndividualLeaderboardPage: NextPage = () => {
  return WebComponentContainer(<IndividualLeaderboard />);
};

export default IndividualLeaderboardPage;

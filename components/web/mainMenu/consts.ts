import { Route } from '../../../utils/enums';
import { MainMenuItem } from './interfaces';

export const MENU_ITEMS: MainMenuItem[] = [
  { name: 'Dashboard', route: Route.DASHBOARD },
  { name: 'Individual leaderboard', route: Route.INDIVIDUAL_LEADERBOARD },
];

import { Route } from '../../../utils/enum';
import { MainMenuItem } from './interfaces';

export const MENU_ITEMS: MainMenuItem[] = [{ name: 'Your league', route: Route.DASHBOARD }, { name: 'Individual leaderboard', route: Route.INDIVIDUAL_LEADERBOARD }];

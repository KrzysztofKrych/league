import { Route } from "../../../utils/enum"

export const getDefaultSelectedMenuItem = (asPath: Route): string => {
    switch(asPath){
        case Route.DASHBOARD: return '0'
        case Route.INDIVIDUAL_LEADERBOARD: return '1';
        default: return '0'
    }
}
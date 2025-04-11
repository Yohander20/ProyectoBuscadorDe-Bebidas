import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { FavoritesSliceType,createFavoriteSlice } from './favoritesSlice'
import { NotificationSliceType,createNotificationSlice } from './notificationSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=>({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))
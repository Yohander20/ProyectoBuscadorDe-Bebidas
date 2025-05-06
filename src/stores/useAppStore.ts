import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { FavoritesSliceType,createFavoriteSlice } from './favoritesSlice'
import { NotificationSliceType,createNotificationSlice } from './notificationSlice'
import { AIslice,createAISlice } from './aiSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AIslice>()(devtools((...a)=>({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))
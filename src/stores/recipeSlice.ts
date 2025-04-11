import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories,Drinks,SearchFilter,Recipe } from "../types"
import { getRecipes,getRecipeById } from "../services/RecipeService"



export type RecipesSliceType={
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes:(SearchFilters:SearchFilter) => Promise<void>
    selectRecipe: (id: Drinks['idDrink']) => Promise<void>
    closeModal: ()=>void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) =>({
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    selectedRecipe:{} as Recipe,
    modal: false,
    fetchCategories: async () =>{
        const categories= await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
         set({
            drinks
         })
    },
    selectRecipe: async (id) =>{
        const selectedRecipe=await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: ()=>{
       set({
        modal: false,
        selectedRecipe: {} as Recipe
    
       })
       
    }
})
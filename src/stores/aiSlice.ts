import {StateCreator} from 'zustand'
import AIService from '../services/AIService'

export type AIslice ={
    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string)=>Promise<void>
}

export const createAISlice : StateCreator<AIslice>= (set)=>({
    recipe:'',
    isGenerating:false,
    generateRecipe: async(prompt) =>{
        set({recipe:'',isGenerating:true})
        const data =await AIService.generateRecipe(prompt)

        for await (const textPart of data){
            set((state) =>({
                recipe: state.recipe + textPart
            }))
        }
        set({isGenerating: false})
    }
})

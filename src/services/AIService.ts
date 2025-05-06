import {streamText} from 'ai'
import { openrouter } from '../lib/ai'

export default{
    async generateRecipe(prompt:string){
       const result = streamText({
           model: openrouter('meta-llama/llama-3.3-70b-instruct:free'), //meta
           //model: openrouter('google/gemini-2.0-flash-exp:free'),   //gemini
           // model: openrouter('deepseek/deepseek-chat-v3-0324:free'), //deepseek
            prompt,
           // system: 'Eres un Bartender que tiene 50 años de experiencia y le sirvio una bebida a James Bond',
            system: 'eres un niño de 5 años',
            temperature:1
       })

       return result.textStream
    }
}
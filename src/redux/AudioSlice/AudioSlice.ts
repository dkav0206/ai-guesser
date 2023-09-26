import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IAudioValue } from '../../constant/constant'



export interface IAudioState{
    audioValue: number,
}


export const getaudioValue = createAsyncThunk(
    'audioSlice/getaudioValue',
    async(audioValue: number | any) => { 
        return audioValue
    }
)
const initialState: IAudioState = {
    audioValue: 0,
}

export const audioSlice = createSlice({
    name: 'audioSlice',
    initialState,
    reducers:{
       
    },
    extraReducers: (build)=>{
        build.addCase(getaudioValue.fulfilled,(state,action)=>{
            state.audioValue = action.payload
        })   
    }
})

export default audioSlice.reducer
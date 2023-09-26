import { configureStore } from '@reduxjs/toolkit'
import sliceAudio from './AudioSlice/AudioSlice'


export const store = configureStore({
    reducer: {
        sliceAudio,
    },
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
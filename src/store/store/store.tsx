import { configureStore } from '@reduxjs/toolkit'

import { userApi } from 'store/api'
import { userSlice } from 'store/slice'

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

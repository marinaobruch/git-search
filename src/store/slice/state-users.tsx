import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	pageCounter: 1,
}

export const userSlice = createSlice({
	name: 'userState',
	initialState: initialState,

	reducers: {
		showMoreUsers(state) {
			state.pageCounter = state.pageCounter + 1
		},
	},
})

export const { showMoreUsers } = userSlice.actions

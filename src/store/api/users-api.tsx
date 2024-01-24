import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetUsers } from 'interface/api-interface'

const USER_PER_PAGE = 20

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/',
	}),
	endpoints: (build) => ({
		getAllUsersByRequest: build.query<IGetUsers, string>({
			query: (name) => `search/users?q=${name}&per_page=${USER_PER_PAGE}`,
		}),
	}),
})

export const { useGetAllUsersByRequestQuery } = userApi

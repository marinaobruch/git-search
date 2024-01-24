import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetRepo, IGetUsers } from 'interface/api-interface'

const USER_PER_PAGE = 20
interface IProps {
	inputValue: string
	pagePagination: number
}

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/',
	}),
	endpoints: (build) => ({
		getAllUsersByRequest: build.query<IGetUsers, IProps>({
			query: ({ inputValue, pagePagination }) =>
				`search/users?q=${inputValue}&per_page=${USER_PER_PAGE}&page=${pagePagination}`,
		}),
		getUsersRepos: build.query<IGetRepo, string>({
			query: (login) => `users/${login}/repos`,
		}),
	}),
})

export const { useGetAllUsersByRequestQuery, useGetUsersReposQuery } = userApi

import axios from 'axios'
import { useEffect, useState } from 'react'

import { IGetUsers, IGetUsersItems } from 'interface/api-interface'

import { CountUsers } from 'components/count-users'
import { NavMenu } from 'components/nav-menu'
import { PaginationButtons } from 'components/pagin-buttons'
import { UserData } from 'components/user-data'
import { Input } from 'shared'

import { UserInfo } from 'components/user-info'
import * as Styled from './main-page-styled'

const USER_PER_PAGE = 20

export const MainPage = () => {
	const [users, setUsers] = useState<IGetUsers>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [inputValue, setInputValue] = useState<string>('GitHub')
	const [pagePagination, setPagePagination] = useState<number>(1)
	const [selectedUser, setSelectedUser] = useState<IGetUsersItems>([])
	const [openAddInfo, setOpenAddInfo] = useState<boolean>(false)
	const [order, setOrder] = useState<string>('desc')
	const [errors, setErrors] = useState<string>('')

	const fetchData = () => {
		axios
			.get(
				`https://api.github.com/search/users?q=${inputValue}&per_page=${USER_PER_PAGE}&page=${pagePagination}&sort=repositories&order=${order}`
			)
			.then((res) => {
				if (res.status === 200) {
					setUsers(res.data)
					setIsLoading(false)
				}
			})
			.catch(function (error) {
				console.debug(error.response.status)
				if (error.response.status === 403) {
					setErrors(
						'Превышен лимит запросов, пожалуйста, попробуйте повторить через пару минут'
					)
					return
				}
				setErrors(error.response.data.message)
			})
	}

	useEffect(() => {
		fetchData()
	}, [inputValue, pagePagination, order])

	const currentPages = Number(Math.ceil(users?.total_count / USER_PER_PAGE))

	return (
		<Styled.MainContainer>
			<Styled.Header>GitHub Search Users</Styled.Header>
			<Input setInputValue={setInputValue} />
			{errors ? (
				<div>{errors}</div>
			) : (
				<>
					<NavMenu setOrder={setOrder} />
					{isLoading ? (
						<div>Loading...</div>
					) : (
						<>
							<CountUsers users={users} />
							<UserData
								users={users}
								setOpenAddInfo={setOpenAddInfo}
								setSelectedUser={setSelectedUser}
							/>
						</>
					)}
					<Styled.baseText>
						Текущая страница --{pagePagination}--
					</Styled.baseText>
					<PaginationButtons
						currentPages={currentPages}
						pagePagination={pagePagination}
						setPagePagination={setPagePagination}
					/>
					{openAddInfo && (
						<UserInfo
							isLoading={isLoading}
							setOpenAddInfo={setOpenAddInfo}
							selectedUser={selectedUser}
						/>
					)}
				</>
			)}
		</Styled.MainContainer>
	)
}

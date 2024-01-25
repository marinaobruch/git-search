import axios from 'axios'
import { useEffect, useState } from 'react'
import { Puff } from 'react-loader-spinner'

import { USER_PER_PAGE, initUserItem, initUserState } from 'constants'
import { IGetUsers, IGetUsersItems } from 'interface/api-interface'

import { CountUsers } from 'components/count-users'
import { NavMenu } from 'components/nav-menu'
import { PaginationButtons } from 'components/pagin-buttons'
import { UserData } from 'components/user-data'
import { UserInfo } from 'components/user-info'
import { Input } from 'shared'

import * as Styled from './main-page-styled'

export const MainPage = () => {
	const [users, setUsers] = useState<IGetUsers>(initUserState)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [inputValue, setInputValue] = useState<string>('github')
	const [pagePagination, setPagePagination] = useState<number>(1)
	const [selectedUser, setSelectedUser] = useState<IGetUsersItems>(initUserItem)
	const [openAddInfo, setOpenAddInfo] = useState<boolean>(false)
	const [order, setOrder] = useState<string>('desc')
	const [errors, setErrors] = useState<string>('')
	console.log(inputValue.length)

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
						'Превышен лимит запросов к серверу, пожалуйста, попробуйте повторить через пару минут'
					)
					return
				} else if (error.response.status === 422) {
					setErrors('Пожалуйста, введите логин в поисковую строку')
					return
				}
				setErrors(error.response.data.message)
			})
	}

	useEffect(() => {
		setErrors('')
		fetchData()
		if (inputValue.length < 0) {
			setInputValue('a')
			return
		}
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
						<div>
							<Puff
								visible={true}
								height='80'
								width='80'
								color='#6632a2'
								ariaLabel='puff-loading'
								wrapperStyle={{}}
								wrapperClass=''
							/>
						</div>
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

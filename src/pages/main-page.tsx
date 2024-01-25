import axios from 'axios'
import { useEffect, useState } from 'react'

import { IGetUsers, IGetUsersItems } from 'interface/api-interface'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Input } from 'shared'

import { CountUsers } from 'components/count-users'
import { NavMenu } from 'components/nav-menu'
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

	const handleForward = () => {
		if (currentPages === pagePagination) {
			setPagePagination(1)
			return
		}
		setPagePagination((prev) => prev + 1)
	}

	const handleBack = () => {
		if (pagePagination === 1) {
			return
		}
		setPagePagination((prev) => prev - 1)
	}

	const handleSelectUser = (user: IGetUsersItems) => {
		setOpenAddInfo(true)
		setSelectedUser(user)
	}

	const handleCloseModal = () => setOpenAddInfo(false)

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
							<Styled.UsersBlock>
								{users?.items.map((item) => (
									<Styled.User
										key={item.id}
										onClick={() => handleSelectUser(item)}
									>
										<div>{item.login}</div>
										<Styled.UserImg
											src={`${item.avatar_url}`}
											alt='img-avatar'
										/>
									</Styled.User>
								))}
							</Styled.UsersBlock>
						</>
					)}
					<Styled.baseText>
						Текущая страница --{pagePagination}--
					</Styled.baseText>
					<Styled.ButtonsContainer>
						<Styled.ShowMoreButton onClick={handleBack}>
							Назад
						</Styled.ShowMoreButton>
						<Styled.ShowMoreButton onClick={handleForward}>
							Вперед
						</Styled.ShowMoreButton>
					</Styled.ButtonsContainer>
					{openAddInfo && (
						<Styled.UserDataBlock>
							<Styled.Cross onClick={handleCloseModal}>
								<IoIosCloseCircleOutline />
							</Styled.Cross>
							{isLoading ? (
								<div>Loading...</div>
							) : (
								<Styled.UserDataInfoContainer>
									<Styled.UserImgSmall
										src={`${selectedUser?.avatar_url}`}
										alt='img-avatar'
									/>
									<Styled.UserDataIntoText>
										<Styled.UserDataIntoTextBox>
											<Styled.UserDataTextHeader>
												Логин:
											</Styled.UserDataTextHeader>
											<Styled.UserDataText>
												{selectedUser?.login}
											</Styled.UserDataText>
										</Styled.UserDataIntoTextBox>
										<Styled.UserDataIntoTextBox>
											<Styled.UserDataTextHeader>
												Ссылка на GitHub:
											</Styled.UserDataTextHeader>
											<Styled.UserDataLink href={`${selectedUser?.html_url}`}>
												{selectedUser?.html_url}
											</Styled.UserDataLink>
										</Styled.UserDataIntoTextBox>
									</Styled.UserDataIntoText>
								</Styled.UserDataInfoContainer>
							)}
						</Styled.UserDataBlock>
					)}
				</>
			)}
		</Styled.MainContainer>
	)
}

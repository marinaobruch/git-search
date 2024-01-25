import { IGetUsersItems } from 'interface/api-interface'
import { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Input } from 'shared'
import { useGetAllUsersByRequestQuery } from 'store/api'
import * as Styled from './main-page-styled'

export const MainPage = () => {
	const [inputValue, setInputValue] = useState<string>('GitHub')
	const [pagePagination, setPagePagination] = useState<number>(1)
	const [selectedUser, setSelectedUser] = useState<IGetUsersItems>([])
	const [openAddInfo, setOpenAddInfo] = useState<boolean>(false)
	console.log(selectedUser)

	const { data: usersData, isLoading: isLoadingGetUsers } =
		useGetAllUsersByRequestQuery({
			inputValue,
			pagePagination,
		})

	const currentPages = Number(Math.ceil(usersData?.total_count / 20))

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

	const handleCloseModal = () => {
		setOpenAddInfo(false)
	}

	return (
		<Styled.MainContainer>
			<Styled.Header>GitHub Search Users</Styled.Header>
			<Input setInputValue={setInputValue} />
			{isLoadingGetUsers ? (
				<div>Loading...</div>
			) : (
				<>
					{usersData?.total_count ? (
						<div>Найдено {usersData?.total_count} пользователей</div>
					) : (
						<div>Пользователи не найдены</div>
					)}

					<Styled.UsersBlock>
						{usersData?.items.map((item) => (
							<Styled.User key={item.id} onClick={() => handleSelectUser(item)}>
								<div>{item.login}</div>
								<Styled.UserImg src={`${item.avatar_url}`} alt='img-avatar' />
							</Styled.User>
						))}
					</Styled.UsersBlock>
				</>
			)}
			<Styled.baseText>Текущая страница --{pagePagination}--</Styled.baseText>
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
					{isLoadingGetUsers ? (
						<div>Loading...</div>
					) : (
						<Styled.UserDataInfoContainer>
							<Styled.UserImgSmall
								src={`${selectedUser?.avatar_url}`}
								alt='img-avatar'
							/>
							<Styled.UserDataIntoText>
								<Styled.UserDataIntoTextBox>
									<Styled.UserDataTextHeader>Логин:</Styled.UserDataTextHeader>
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
		</Styled.MainContainer>
	)
}

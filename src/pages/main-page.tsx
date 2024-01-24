import { useState } from 'react'
import { Input } from 'shared'
import { useGetAllUsersByRequestQuery } from 'store/api'
import * as Styled from './main-page-styled'

export const MainPage = () => {
	const [inputValue, setInputValue] = useState<string>('GitHub')
	const [pagePagination, setPagePagination] = useState<number>(1)

	const { data: usersData, isLoading } = useGetAllUsersByRequestQuery({
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

	return (
		<>
			<Styled.Header>GitHub Search Users</Styled.Header>
			<Input setInputValue={setInputValue} />
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<div>Найдено {usersData?.total_count} пользователей</div>
					<Styled.UsersBlock>
						{usersData?.items.map((item) => (
							<Styled.User key={item.id}>
								<div>{item.login}</div>
								<Styled.UserImg src={`${item.avatar_url}`} />
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
		</>
	)
}

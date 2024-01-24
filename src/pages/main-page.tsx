import { useState } from 'react'
import { Input } from 'shared'
import { useGetAllUsersByRequestQuery } from 'store/api'
import * as Styled from './main-page-styled'

export const MainPage = () => {
	const [inputValue, setInputValue] = useState<string>('marina')

	const { data: usersData, isLoading } =
		useGetAllUsersByRequestQuery(inputValue)
	console.log(usersData)

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
			<Styled.ShowMoreButton>Показать еще</Styled.ShowMoreButton>
		</>
	)
}

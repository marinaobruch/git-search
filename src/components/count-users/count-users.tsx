import { IGetUsers } from 'interface/api-interface'
import { FC } from 'react'

import * as Styled from './count-users-styled'

interface IProps {
	users: IGetUsers
}

export const CountUsers: FC<IProps> = ({ users }) => {
	return (
		<Styled.CountUsersContainer>
			{users?.total_count ? (
				<Styled.CountUsersHeader>
					Найдено {users?.total_count} пользователей
				</Styled.CountUsersHeader>
			) : (
				<div>Пользователи не найдены</div>
			)}
		</Styled.CountUsersContainer>
	)
}

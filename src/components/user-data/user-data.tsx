import { IGetUsers } from 'interface/api-interface'
import { FC } from 'react'
import * as Styled from './user-data-styled'

interface IProps {
	users: IGetUsers
}

export const UserData: FC<IProps> = ({ users }) => {
	return (
		<Styled.UsersBlock>
			{users?.items.map((item) => (
				<Styled.User key={item.id} onClick={() => handleSelectUser(item)}>
					<div>{item.login}</div>
					<Styled.UserImg src={`${item.avatar_url}`} alt='img-avatar' />
				</Styled.User>
			))}
		</Styled.UsersBlock>
	)
}

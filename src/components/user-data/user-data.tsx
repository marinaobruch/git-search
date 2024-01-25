import { IGetUsers, IGetUsersItems } from 'interface/api-interface'
import { FC } from 'react'
import * as Styled from './user-data-styled'

interface IProps {
	users: IGetUsers
	setOpenAddInfo: (item: boolean) => void
	setSelectedUser: (item: IGetUsersItems) => void
}

export const UserData: FC<IProps> = ({
	users,
	setOpenAddInfo,
	setSelectedUser,
}) => {
	const handleSelectUser = (user: IGetUsersItems) => {
		setOpenAddInfo(true)
		setSelectedUser(user)
	}

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

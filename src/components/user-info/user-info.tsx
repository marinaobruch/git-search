import { IGetUsersItems } from 'interface/api-interface'
import { FC } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import * as Styled from './user-info-styled'

interface IProps {
	isLoading: boolean
	setOpenAddInfo: (item: boolean) => void
	selectedUser: IGetUsersItems
}

export const UserInfo: FC<IProps> = ({
	isLoading,
	setOpenAddInfo,
	selectedUser,
}) => {
	const handleCloseModal = () => setOpenAddInfo(false)

	return (
		<Styled.UserDataBlock>
			<Styled.Cross onClick={handleCloseModal}>
				<IoIosCloseCircleOutline />
			</Styled.Cross>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<Styled.UserDataInfoContainer>
					<Styled.UserDataMobileInfo>
						Информация о пользователе
					</Styled.UserDataMobileInfo>
					<Styled.UserImgSmall
						src={`${selectedUser?.avatar_url}`}
						alt='img-avatar'
					/>
					<Styled.UserDataIntoText>
						<Styled.UserDataIntoTextBox>
							<Styled.UserDataTextHeader>Логин:</Styled.UserDataTextHeader>
							<Styled.UserDataText>{selectedUser?.login}</Styled.UserDataText>
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
	)
}

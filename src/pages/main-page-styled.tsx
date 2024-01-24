import styled from 'styled-components'

export const Header = styled.h1`
	font-size: 40px;
`
export const UsersBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`

export const User = styled.div`
	border: 1px solid #5b5b5c;

	padding: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
`

export const UserImg = styled.img`
	border-radius: 50%;
`

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
`

export const ShowMoreButton = styled.button`
	color: #333333;
	background: none;
	font-size: 14px;
	text-align: center;
	border: 2px solid #333333;
	border-radius: 4px;
	padding: 10px 0;
	width: 170px;

	&:hover {
		cursor: pointer;
		color: #fff;
		background: #333333;
		border: 2px solid white;
	}
`

export const baseText = styled.h4`
	font-size: 14px;
`

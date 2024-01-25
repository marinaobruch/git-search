import styled from 'styled-components'

export const UsersBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`

export const User = styled.div`
	border: 1px solid #5b5b5c;
	background-image: url('./src/assets/backgrounds/texture.png');

	padding: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
	cursor: pointer;

	&:hover {
		border: 1px solid #240ecd;
		box-shadow: 0px 0px 10px 5px #d2d1d1;
		transition: all 0.3s ease-out;
	}
`

export const UserImg = styled.img`
	border-radius: 50%;
`

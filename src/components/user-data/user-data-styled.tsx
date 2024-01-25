import styled from 'styled-components'

export const UsersBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	width: 100%;

	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 550px) {
		grid-template-columns: repeat(1, 1fr);
		margin: 10px;
	}
`

export const User = styled.div`
	border: 1px solid #5b5b5c;
	background-image: url('texture.png');

	padding: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
	cursor: pointer;

	&:hover {
		border: 1px solid #6632a2;
		box-shadow: 0px 0px 10px 5px #d2d1d1;
		transition: all 0.3s ease-out;
	}
`

export const UserTitle = styled.div`
	color: #464546;
	font-size: 20px;
`

export const UserImg = styled.img`
	border-radius: 50%;
	max-width: 240px;
`

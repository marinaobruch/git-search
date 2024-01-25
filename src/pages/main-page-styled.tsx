import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from {
		opacity: 0;
  }
  to {
		opacity: 1;
  }
`

export const MainContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const Header = styled.h1`
	font-size: 40px;
`
export const UsersBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`

export const User = styled.div`
	border: 1px solid #5b5b5c;

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

export const UserImgSmall = styled.img`
	border-radius: 50%;
	height: 140px;
`

export const ButtonsContainer = styled.div`
	margin-top: 10px;
	display: flex;
	gap: 20px;
`

export const ShowMoreButton = styled.button`
	color: #333333;
	background: none;
	font-size: 20px;
	text-align: center;
	border: 2px solid #333333;
	border-radius: 4px;
	padding: 16px;
	width: 170px;

	&:hover {
		cursor: pointer;
		color: #fff;
		background: #333333;
		border: 2px solid white;
	}
`

export const baseText = styled.h4`
	font-size: 16px;
`
export const UserDataBlock = styled.div`
	animation: ${show} 0.4s ease-in-out;
	position: fixed;
	height: 500px;
	width: 400px;
	word-wrap: break-word;
	background-color: #ececec;
	box-shadow: 0px 0px 10px 5px #d2d1d1;
	top: 150px;
	right: 0;
`

export const UserDataInfoContainer = styled.div`
	height: 100%;
	word-wrap: break-word;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 20px;
`

export const UserDataIntoText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 20px;
`
export const UserDataIntoTextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 5px;
`

export const UserDataTextHeader = styled.p`
	font-size: 20px;
	word-wrap: break-word;
`

export const UserDataText = styled.p`
	font-size: 14px;
	word-wrap: break-word;
`

export const UserDataLink = styled.a`
	font-size: 14px;
	word-wrap: break-word;
`
export const Cross = styled.div`
	cursor: pointer;
	position: absolute;
	padding: 10px;
	font-size: 24px;
`

import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from {
		opacity: 0;
  }
  to {
		opacity: 1;
  }
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

export const UserImgSmall = styled.img`
	border-radius: 50%;
	height: 140px;
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

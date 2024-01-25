import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from {
		opacity: 0;
  }
  to {
		opacity: 1;
  }
`

export const UserDataMobileInfo = styled.h2`
	display: none;
	@media (max-width: 700px) {
		display: block;
		font-size: 34px;
	}

	@media (max-width: 400px) {
		display: block;
		font-size: 26px;
	}
`

export const UserDataBlock = styled.div`
	animation: ${show} 0.4s ease-in-out;
	position: fixed;
	top: 250px;
	right: 45px;
	height: 400px;
	width: 400px;
	word-wrap: break-word;
	background-color: #e6e0ed;
	box-shadow: 0px 0px 10px 5px #bfafd1;

	@media (max-width: 1000px) {
		height: 400px;
		width: 300px;
	}

	@media (max-width: 700px) {
		top: 0px;
		right: 0px;
		height: 100vh;
		width: 100vw;
	}
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

	@media (max-width: 700px) {
		height: 240px;
	}
	@media (max-width: 400px) {
		height: 200px;
	}
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

	@media (max-width: 700px) {
		font-size: 34px;
	}

	@media (max-width: 400px) {
		font-size: 26px;
	}
`

export const UserDataText = styled.p`
	color: #6632a2;
	font-size: 14px;
	word-wrap: break-word;

	@media (max-width: 700px) {
		font-size: 20px;
	}

	@media (max-width: 400px) {
		font-size: 16px;
	}
	@media (max-width: 400px) {
		font-size: 16px;
	}
`

export const UserDataLink = styled.a`
	color: #6632a2;
	font-size: 14px;
	word-wrap: break-word;

	@media (max-width: 700px) {
		font-size: 20px;
	}

	@media (max-width: 400px) {
		font-size: 16px;
	}
`

export const Cross = styled.div`
	cursor: pointer;
	position: absolute;
	padding: 10px;
	font-size: 24px;

	@media (max-width: 700px) {
		font-size: 60px;
	}
`

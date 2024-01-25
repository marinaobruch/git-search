import styled from 'styled-components'

export const ButtonsContainer = styled.div`
	margin-top: 10px;
	display: flex;
	gap: 20px;

	@media (max-width: 450px) {
		flex-direction: column;
	}
`

export const ShowMoreButtonBack = styled.button`
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
		background: #6a597e;
		border: 2px solid white;
	}
`

export const ShowMoreButtonFwd = styled.button`
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
		background: #6632a2;
		border: 2px solid white;
	}
`

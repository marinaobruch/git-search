import styled from 'styled-components'

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

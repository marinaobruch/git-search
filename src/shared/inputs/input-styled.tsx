import styled from 'styled-components'

export const Input = styled.input`
	width: 100%;
	margin: 10px 0px 10px 0px;
	display: block;
	padding: 8px 12px;
	font-size: 15px;
	line-height: 1.42857143;
	color: #777;
	background-image: none;
	border: 1px solid #676a7e;
	border-radius: 4px;
	transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border: 1px solid #240ecd;
	}
`

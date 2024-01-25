import { motion } from 'framer-motion'
import styled from 'styled-components'

export const NavMenuContainer = styled.div`
	width: 100%;
	background-image: url('texture.png');
	border: 1px solid #e2e3e3;
	box-sizing: border-box;
`

export const NavMenuWrapper = styled.div`
	position: relative;
	margin-bottom: 64px;
`

export const NavMenuButton = styled.button`
	border: none;
	background: none;
`

export const NavMenuBurgerIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	font-size: 24px;
	cursor: pointer;
`

export const NavMenuBurgerText = styled.div`
	font-size: 14px;
	cursor: pointer;
`

export const NavMenuCrossIcon = styled.div`
	font-size: 24px;
	cursor: pointer;
`

export const NavMenuDropdown = styled(motion.div)`
	position: absolute;
	left: 0;
	top: 40px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100px;
	height: 112px;
	overflow: hidden;
`

export const NavMenuItem = styled.div`
	font-size: 16px;
	color: black;
	cursor: pointer;
	transition: color 0.2s linear;

	&:hover {
		color: #6e6d6d;
	}
`

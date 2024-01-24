import { FC, ReactNode } from 'react'
import * as Styled from './layout.styled'

interface IContainerProps {
	children: ReactNode
}

export const ContainerContent: FC<IContainerProps> = ({ children }) => (
	<Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>
)

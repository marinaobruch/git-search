import { FC } from 'react'
import * as Styled from './pagin-buttons-styled'

interface IProps {
	currentPages: number
	pagePagination: number
	setPagePagination: (value: number | ((prevVar: number) => number)) => void
}

export const PaginationButtons: FC<IProps> = ({
	currentPages,
	pagePagination,
	setPagePagination,
}) => {
	const handleForward = () => {
		if (currentPages === pagePagination) {
			setPagePagination(1)
			return
		}
		setPagePagination((prev: number) => prev + 1)
	}

	const handleBack = () => {
		if (pagePagination === 1) {
			return
		}
		setPagePagination((prev: number) => prev - 1)
	}

	return (
		<Styled.ButtonsContainer>
			<Styled.ShowMoreButton onClick={handleBack}>Назад</Styled.ShowMoreButton>
			<Styled.ShowMoreButton onClick={handleForward}>
				Вперед
			</Styled.ShowMoreButton>
		</Styled.ButtonsContainer>
	)
}

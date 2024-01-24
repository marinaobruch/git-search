import { FC } from 'react'
import * as Styled from './input-styled'

interface IProps {
	setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const Input: FC<IProps> = ({ setInputValue }) => {
	const handleSearch = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>
	) => {
		setInputValue(event.currentTarget.value)
	}
	return (
		<Styled.Input onChange={handleSearch} placeholder='Поиск...' type='text' />
	)
}

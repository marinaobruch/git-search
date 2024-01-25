import { useLatest } from 'hooks/debounce'
import { debounce } from 'lodash-es'
import { FC, useEffect, useMemo, useState } from 'react'
import * as Styled from './input-styled'

interface IProps {
	setInputValue: React.Dispatch<React.SetStateAction<string>>
}

// ts-ignore
function makeDebouncedHook(debounceFn: any) {
	// ts-ignore
	return function useDebounce(cb: any, ms: number) {
		const latestCb = useLatest(cb)

		const debouncedFn = useMemo(
			() =>
				debounceFn((...args: any[]) => {
					latestCb.current(...args)
				}, ms),
			[ms, latestCb]
		)

		useEffect(() => () => debouncedFn.cancel(), [debouncedFn])

		return debouncedFn
	}
}
const useDebounce = makeDebouncedHook(debounce)

export const Input: FC<IProps> = ({ setInputValue }) => {
	const [query, setQuery] = useState<string>('')
	const makeRequest = useDebounce(() => {
		setInputValue(query)
	}, 500)

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		makeRequest(value)
		setQuery(value)
	}

	return (
		<Styled.Input onChange={handleSearch} placeholder='Поиск...' type='text' />
	)
}

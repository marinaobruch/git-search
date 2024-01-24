import { useLayoutEffect, useRef } from 'react'

export function useLatest(value: string) {
	const latestValue = useRef(value)

	useLayoutEffect(() => {
		latestValue.current = value
	})

	return latestValue
}

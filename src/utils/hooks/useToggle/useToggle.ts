import { useCallback, useState } from 'react'


const useCallbackToggle = (initialState = false) => {
	const [ state, setState ] = useState<boolean>(initialState)

	const onToggle = useCallback(() => setState((state) => !state), [])

	const onReset = () => setState(initialState)

	return [ state, onToggle, onReset ] as const
}

export default useCallbackToggle

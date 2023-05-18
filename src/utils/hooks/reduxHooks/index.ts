import { AppDispatch, RootState } from 'store/types'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


const useAppDispatch: () => AppDispatch = useDispatch
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default {
	useAppDispatch,
	useAppSelector
}

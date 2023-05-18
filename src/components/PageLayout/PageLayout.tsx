import { Header } from 'components'
import { PageLayoutProps } from 'components/PageLayout/types'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector, useAuth } from 'utils/hooks'
import { todoOperations, todoSelectors } from 'store/todo'


const PageLayout = ({ children }: PageLayoutProps) => {
	const { isAuth, autoLogin } = useAuth()
	const dispatch = useAppDispatch()
	const limit = useAppSelector(todoSelectors.getLimit())
	const page = useAppSelector(todoSelectors.getPage())

	useEffect(() => {
		document.body.style.overflow = 'initial'
		autoLogin()
	}, [ autoLogin ])

	useEffect(() => {
		if (isAuth) {
			dispatch(todoOperations.fetchTodo({ page, limit }))
		}
	}, [])

	return (
		<>
			<Header/>
			{ children }
		</>
	)
}

export default PageLayout

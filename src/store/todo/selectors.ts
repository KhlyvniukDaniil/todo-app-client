import { RootState } from 'store/types'
import { createDraftSafeSelector } from '@reduxjs/toolkit'


const selectSelf = (state: RootState) => state

const getTodoList = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.todo.data
)

const getTodoById = (id: number) => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.todo.data.find(todo => todo.id === id)
)

const getIsLoading = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.todo.isLoading
)

const getError = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.todo.error
)

const getIsLimitReached = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.todo.limitReached
)

const getLimit = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.todo.limit
)
const getPage = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.todo.page
)

export default {
	getTodoList,
	getTodoById,
	getIsLoading,
	getError,
	getIsLimitReached,
	getLimit,
	getPage
}



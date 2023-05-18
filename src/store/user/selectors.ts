import { RootState } from 'store/types'
import { createDraftSafeSelector } from '@reduxjs/toolkit'


const selectSelf = (state: RootState) => state

const getData = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.user.data
)

const getIsLoading = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.user.isLoading
)

const getError = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.user.error
)

const getToken = () => createDraftSafeSelector(
	selectSelf,
	(state: RootState) => state.user.token
)

export default {
	getData,
	getIsLoading,
	getError,
	getToken
}



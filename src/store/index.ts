import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import user from 'store/user'
import todo from 'store/todo'


const store = configureStore({
	reducer: {
		todo,
		user,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
})

export default store

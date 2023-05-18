import reducer, { actions } from 'store/user/slice'


export { default as userSelectors } from 'store/user/selectors'
export { default as userOperations } from 'store/user/operations'
export const userActions = actions

export default reducer

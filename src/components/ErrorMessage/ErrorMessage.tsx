import { StyledErrorMessage } from 'components/ErrorMessage/styles'
import { HTMLAttributes } from 'react'


const ErrorMessage = (props: HTMLAttributes<HTMLParagraphElement>) => <StyledErrorMessage { ...props }/>

export default ErrorMessage

import { ForwardedRef, forwardRef } from 'react'
import { StyledTextField } from 'components/TextField/styles'
import { Input } from '@mui/material'
import { TextFieldProps } from 'components/TextField/types'
import { ErrorMessage } from 'components'


const TextField =
	forwardRef(({ form, name, placeholder, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => (
		<StyledTextField>
			<Input
				sx={ { fontSize: 14, width: '100%'} }
				ref={ ref }
				placeholder={ placeholder }
				onChange={ form.handleChange }
				onBlur={ form.handleBlur }
				value={ form.values[name] }
				{ ...props }
			/>
			{ form.touched[name] && form.errors[name] && <ErrorMessage>{ form.errors[name] }</ErrorMessage> }
		</StyledTextField>
	))

export default TextField

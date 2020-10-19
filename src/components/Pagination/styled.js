import styled from 'styled-components'
import { Box, Button } from 'grommet'
import { edgeSize } from '../../theme'

export const Wrapper = styled(Box)`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-bottom: ${edgeSize.small};
`

export const PreviousButton = styled(Button)`
	div {
		display: flex;
		flex-direction: row-reverse;
	}
`

export const NextButton = styled(Button)``

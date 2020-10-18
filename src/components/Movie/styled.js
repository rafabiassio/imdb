import styled from 'styled-components'
import { CardHeader, Stack, Text } from 'grommet'
import { edgeSize } from '../../theme'

export const CardTextWrapper = styled(CardHeader)`
  width: 100%;
	justify-content: flex-start;
	padding: ${edgeSize.small};
	background: #000000A0 ;
	padding: ${edgeSize.small};
	bottom: 0;
  left: 0;
  position: absolute;
`

export const CardContent = styled(Stack)`
  width: 100%;
`

export const TextCard = styled(Text)`
	font-size: 16px;
	line-height: 22px;
`

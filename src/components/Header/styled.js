import styled from 'styled-components'
import { Header } from 'grommet'
import { edgeSize, sizing } from '../../theme'

export const HeaderWrapper = styled(Header)`
	display: flex;
	justify-content: center;
	padding: ${edgeSize.small};
	height: ${sizing.headerHeight}
`

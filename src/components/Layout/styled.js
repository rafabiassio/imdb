import styled from 'styled-components'
import { Main } from 'grommet'
import { edgeSize, sizing } from '../../theme'

export const MainWrapper = styled(Main)`
  height: calc(100% - ${sizing.headerHeight} - ${sizing.footerHeight} );
	padding: ${edgeSize.small};
`

import styled from 'styled-components'
import { Main } from 'grommet'
import { sizing } from '../../theme'

export const MainWrapper = styled(Main)`
	display: inline-block;
	width: 100%;
  height: calc(100% - ${sizing.headerHeight} - ${sizing.footerHeight} );
`

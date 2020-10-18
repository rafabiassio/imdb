import styled from 'styled-components'
import { Footer, Anchor } from 'grommet'
import { edgeSize, sizing } from '../../theme'

export const FooterWrapper = styled(Footer)`
	width: 100%;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	padding: ${edgeSize.small};
	background-color: #333333;
	height: ${sizing.footerHeight};
`

export const Link = styled(Anchor)`
	display: flex;
	padding: 0;
	margin: 0;
`

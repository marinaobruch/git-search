import { ContainerContent } from 'layouts/layout'
import { MainPage } from 'pages/main-page'
import { GlobalStyle } from './style'

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<ContainerContent>
				<MainPage />
			</ContainerContent>
		</>
	)
}

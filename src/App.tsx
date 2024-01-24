import { ContainerContent } from 'layouts/layout'
import { MainPage } from 'pages/main-page'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './style'

export const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<ContainerContent>
				<MainPage />
			</ContainerContent>
		</Provider>
	)
}

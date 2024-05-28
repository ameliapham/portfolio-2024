import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from "./theme"
import { SelectedPageProvider } from 'hooks/useSelectedPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SelectedPageProvider defaultSelectedPage="home">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SelectedPageProvider>
)

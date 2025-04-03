import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyle} from './styles/Global.styled'

createRoot(document.getElementById('root')!).render(
    <>
        <GlobalStyle/>
        <App />
    </>

)

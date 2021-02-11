import './App.css'
import ContanerMain from './components/main/mainCONTAINER'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
return  <BrowserRouter>
            <div className="App">
              <ContanerMain />
            </div>
        </BrowserRouter>
}

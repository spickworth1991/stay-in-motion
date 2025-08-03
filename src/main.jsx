import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="bg-cream min-h-screen">
      <App />
    </div>
    <div className="min-h-screen bg-cream text-gray-800">
    </div>
  </BrowserRouter>
)

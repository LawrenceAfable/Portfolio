import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// routes
import MainRoute from "./routes/MainRoute"

export default function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  )
}


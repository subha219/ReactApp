import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/"></Route>
                <Route path="/login"></Route>
            </Routes>
            <App />
        </BrowserRouter>
    </StrictMode>,
)

import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './Components/MainLayout'
import { HomePage } from './Pages/HomePage'
import { ExchangePage } from './Pages/ExchangePage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='exchange' element={<ExchangePage/>}/>
      </Route>
    </Routes>
   
    </>
  )
}

export default App

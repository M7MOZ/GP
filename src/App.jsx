import { lazy, Suspense } from "react"
import {  Route, Routes } from "react-router-dom"
function App() {
  const Chat = lazy(() => import("./pages/Chat"))
  const Login = lazy(() => import("./pages/Login"))
  const Register = lazy(() => import("./pages/Register"))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index path="/" element={<Login/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Suspense>
    
  )
}

export default App

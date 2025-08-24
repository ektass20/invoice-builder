import React from 'react'
import { BrowserRouter, Route } from 'react-router'
import CreateInvoice from '../pages/CreateInvoice'
import Companies from '../pages/Companies'
import MyInvoices from '../pages/MyInvoices'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/home'
import PageNotFound from '../pages/PageNotFound'
import { Routes } from 'react-router'
import Navbar from '../components/layout/Navbar'
import Container from '../components/layout/Container'
import AuthLayout from '../pages/layouts/AuthLayout'
import MainLayout from '../pages/layouts/MainLayout'
import { AuthProvider } from '../auth/AuthContext'
import ProtectedRoute from '../auth/ProtectedRoute'
import { InvoiceProvider } from '../context/InvoiceContext'



const AppRouter = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <InvoiceProvider>
    <Navbar />
    <Routes>
    {/* we will use auth for the main layout part */}
      <Route path="/auth" element={ <AuthLayout />}>
          <Route index element={<Login />}></Route>
    {/* we will remove the slash from the signup bec we are not rendering it
    and will remove the path from the login and give index because it is for default at auth */}
          <Route path="signup" element={<SignUp />}></Route>
</Route>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="create-invoice" element={ <ProtectedRoute> <CreateInvoice /> </ProtectedRoute>}></Route>
      <Route path="companies" element={<ProtectedRoute> <Companies /> </ProtectedRoute>}></Route>
      <Route path="my-invoices" element={<ProtectedRoute> <MyInvoices /> </ProtectedRoute>}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      </Route>
</Routes>
</InvoiceProvider>
  </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRouter
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Layout } from 'antd'
import AppBar from './components/AppBar'
import { Content } from 'antd/lib/layout/layout'
import Home from './pages/home/Home'
import { UserLayout } from './layouts/UserLayout'

function App() {
  return (
    <UserLayout></UserLayout>
  )
}

export default App;

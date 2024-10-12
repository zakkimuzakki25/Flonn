import { Navigate, Outlet } from 'react-router-dom'

const AdminProtect = () => {
  if (window.localStorage.getItem('token-adm')) 
  return <Outlet />
  
  return <Navigate to='/' />
}

export default AdminProtect
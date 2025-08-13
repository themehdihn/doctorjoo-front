import React from 'react'
import AppLayout from '../../components/modules/AppLayout'
import Sidebar from '../../components/modules/Sidebar'
import AdminSideMenu from './AdminSideMenu'

function AdminLayout() {
  return (
    <AppLayout>
         <Sidebar>
            <AdminSideMenu/>
        </Sidebar>

    </AppLayout>
  )
}

export default AdminLayout
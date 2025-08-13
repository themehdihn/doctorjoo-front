import React from 'react'
import UserTable from '../features/user/UserTable'
import PanelTitle from '../features/PanelTitle'

function Users() {
  return (
    <div>
      <PanelTitle title="کاربران"/>
      <UserTable/>
    </div>
  )
}

export default Users
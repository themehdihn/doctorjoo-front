import React from 'react'
import Empty from '../../components/modules/Empty'
import useUsers from './useUsers'
import Loading from '../../components/modules/Loading'
import Table from '../../components/modules/Table'
import UserRow from './UserRow'

function UserTable() {
     const {isLoading, users} = useUsers()

    if(isLoading) return <Loading/>
    if(!users) return <Empty resourceName="کاربر"/>

  return (
    <Table>
        <Table.Header>
            <th>#</th>
            <th>نام کاربر</th>
            <th>ایمیل</th>
            <th>جنسیت</th>
            <th>نقش</th>
            <th>عملیات</th>
        </Table.Header>
        <Table.Body>
            {
                users.map((user, index)=> (
                    <UserRow key={user._id} user={user} index={index}/>
                ))
            }
        </Table.Body>
    </Table>
  )
}

export default UserTable
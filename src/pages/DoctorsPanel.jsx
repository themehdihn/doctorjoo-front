import React from 'react'
import DoctorTable from '../features/doctor/DoctorTable'
import DoctorHeader from '../features/doctor/DoctorHeader'

function DoctorsPanel() {
  return (
    <div>
        <DoctorHeader/>
        <DoctorTable/>
    </div>
  )
}

export default DoctorsPanel
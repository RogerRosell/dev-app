import React from 'react'
import EmulsionForm from '@/components/Forms/Emulsions';
import EmulsionsList from '@/components/Molecules/EmulsionsList'

const page = async () => {
  return (
    <>
    <EmulsionsList />
    <EmulsionForm />
    </>
  )
}

export default page
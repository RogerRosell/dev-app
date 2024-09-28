import React from 'react'

import Timer from '@/components/Timer'

const page = () => {
  return (
    <div><Timer initialTime={120} alertTime={30}  /></div>
  )
}

export default page
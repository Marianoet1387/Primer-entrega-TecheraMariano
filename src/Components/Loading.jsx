import React from 'react'
import { Spinner } from '@chakra-ui/react'
const Loading = () => {
  return (
    <div className='spinner'>
        <Spinner color='red.500' /> Reload ...
    </div>
  )
}

export default Loading
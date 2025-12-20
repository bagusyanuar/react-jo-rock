import React from 'react'
import { GButton } from '../ui/components/button'
import { ToastContainer, toast } from '../ui/components/toast'

const PreviewPage = () => {
  return (
    <div className='w-full h-dvh'>
      <p>This is Preview</p>
      <GButton
        text='My Button'
        onClick={() => {
          toast.success('successfully show toast', 1000)
        }}
      />
      <ToastContainer />
    </div>
  )
}

export default PreviewPage
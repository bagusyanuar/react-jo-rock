import React from 'react'
import { Card } from '../../ui/components/container'
import { Paragraph } from '../../ui/components/typography'

const LoginFormStory = () => {
    return (
        <div className='w-full h-dvh bg-(--g-brand-500) flex flex-col items-center justify-center'>
            <p className='text-lg text-white mb-3 font-semibold'>
                LOGIN STORY
            </p>
            <Card className='w-72'>
                <Paragraph className='font-semibold '>
                    40
                </Paragraph>
            </Card>
        </div>
    )
}

export default LoginFormStory
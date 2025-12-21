import React from 'react'
import { GCard, GFlex } from '../../ui/components/container'
import { GText } from '../../ui/components/typography'

const LoginFormStory = () => {
    return (
        <div className='w-full h-dvh bg-(--g-brand-500) flex flex-col items-center justify-center'>
            <p className='text-lg text-white mb-3 font-semibold'>
                LOGIN STORY
            </p>
            <GCard className='w-72'>
                <GText>
                    GTEXT
                </GText>
                <GFlex className='gap-3'>
                    <span>CEK</span>
                    <span>FLEX</span>
                    <span>BOX</span>
                </GFlex>
            </GCard>
        </div >
    )
}

export default LoginFormStory
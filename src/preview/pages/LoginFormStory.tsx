import React from 'react'
import { GCard, GFlex } from '../../ui/components/container'
import { GText } from '../../ui/components/typography'
import { Controller, useForm, type Control, type FieldValues, type Path } from 'react-hook-form'
import { GTextfield } from '../../ui/components/input'
import { GButton } from '../../ui/components/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LuMail } from 'react-icons/lu'

const loginSchema = z.object({
    email: z.string()
        .min(1, 'email is required')
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email tidak valid")
})

type TLoginSchema = z.infer<typeof loginSchema>

const LoginFormStory = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onSubmit',
        shouldFocusError: false,
        defaultValues: {
            email: ''
        }
    })

    const onSubmit = async (data: TLoginSchema) => {
        console.log(data)
    }
    return (
        <div className='w-full h-dvh bg-(--g-brand-500) flex flex-col items-center justify-center'>
            <p className='text-lg text-white mb-3 font-semibold'>
                LOGIN STORY
            </p>
            <GCard className='w-72'>
                <GText>
                    GTEXT
                </GText>
                <div className='w-full mb-3'>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field }) => (
                            <GTextfield
                                placeholder='email'
                                prefixIcon={LuMail}
                                isError={!!errors.email}
                                {...field}
                            />
                        )}
                    />
                </div>
                <GButton
                    text='login'
                    onClick={handleSubmit(onSubmit)}
                />
            </GCard>
        </div >
    )
}

export default LoginFormStory
import React from 'react'
import { GCard, GFlex } from '../../ui/components/container'
import { GText } from '../../ui/components/typography'
import { Controller, useForm, type Control, type FieldValues, type Path } from 'react-hook-form'
import { GTextfield, GPasswordfield } from '../../ui/components/input'
import { GLabel, GHelperText } from '../../ui/components/label'
import { GButton } from '../../ui/components/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LuMail } from 'react-icons/lu'

const loginSchema = z.object({
    email: z.string()
        .min(1, 'email is required')
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email tidak valid"),
    password: z.string()
        .min(1, 'password is required')
        .min(8, 'password minimal 8 karakter')
        .regex(/[A-Z]/, "password harus mengandung huruf kapital")
        .regex(/[0-9]/, "password harus mengandung angka")
        .regex(/[^A-Za-z0-9]/, "password harus mengandung special karakter")
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
            <GCard className='w-72 py-4 px-6'>
                <GText className='text-center mb-5' weight='semi-bold'>
                    Login Form
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
                    {errors.email && <GHelperText isError={!!errors.email} text={errors.email.message} />}
                </div>
                <div className='w-full mb-5'>
                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <GPasswordfield
                                placeholder='password'
                                isError={!!errors.password}
                                {...field}
                            />
                        )}
                    />
                    {errors.password && <GHelperText isError={!!errors.password} text={errors.password.message} />}
                </div>
                <GButton
                    text='Login'
                    className='w-full'
                    onClick={handleSubmit(onSubmit)}
                />
            </GCard>
        </div >
    )
}

export default LoginFormStory
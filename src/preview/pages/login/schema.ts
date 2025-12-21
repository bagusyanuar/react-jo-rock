import {z} from 'zod'

export const loginSchema = z.object({
    email: z.string()
        .min(1, 'email is required')
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email tidak valid")
})

export type TLoginSchema = z.infer<typeof loginSchema>
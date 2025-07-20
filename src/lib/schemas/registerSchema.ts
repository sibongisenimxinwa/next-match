import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string().min(3, { message: 'Name is required' }),
  email: z.string().refine((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
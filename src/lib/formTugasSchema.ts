import { z } from "zod";

export const formSchema = z.object(
    {
        name: z.string().min(1).max(100),
        phone: z.string().min(1),
        instagramUsername: z.string().min(1),
        source: z.enum(['Instagram', 'TikTok', 'Marketplace', 'Teman', 'Iklan', 'Lainnya']),
        satisfaction: z.enum(['0', '1', '2', '3']),
        likes: z.string().min(1),
        saran: z.string().min(1)
    }
)

export type FormData = z.infer<typeof formSchema>;

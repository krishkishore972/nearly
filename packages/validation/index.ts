import { z } from 'zod';

export const communityPostTypeSchema = z.enum([
  'general',
  'recommendation',
  'alert',
  'poll',
  'event',
  'lost_found',
]);

export const createCommunityPostSchema = z.object({
  type: communityPostTypeSchema.default('general'),

//   title: z
//     .string()
//     .trim()
//     .min(3, 'Title must be at least 3 characters')
//     .max(80, 'Title must be 80 characters or less'),

  body: z
    .string()
    .trim()
    .min(10, 'Post must be at least 10 characters')
    .max(1000, 'Post must be 1000 characters or less'),

  tags: z
    .array(
      z
        .string()
        .trim()
        .min(1)
        .max(32)
        .regex(/^#?[a-zA-Z0-9_]+$/, 'Tags can only contain letters, numbers, and underscores')
        .transform((tag) => (tag.startsWith('#') ? tag : `#${tag}`)),
    )
    .max(5, 'You can add up to 5 tags')
    .default([]),

  visibility: z.enum(['society', 'neighborhood', 'public']).default('neighborhood'),

//   location: z
//     .object({
//       label: z.string().trim().min(1).max(80),
//       area: z.string().trim().min(1).max(80),
//       city: z.string().trim().min(1).max(80),
//     })
//     .optional(),

  attachments: z
    .array(
      z.object({
        uri: z.string().min(1),
        type: z.enum(['image', 'video']),
        name: z.string().trim().max(120).optional(),
      }),
    )
    .max(4, 'You can attach up to 4 files')
    .default([]),
});

export type CommunityPostType = z.infer<typeof communityPostTypeSchema>;
export type CreateCommunityPostInput = z.infer<typeof createCommunityPostSchema>;
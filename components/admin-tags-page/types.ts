import z from 'zod'

z.config(z.locales.zhCN())
export const createTagFormSchema = z.object({
  name: z.string().min(1, { error: 'name 不能为空' }),
  slug: z
    .string()
    .max(30, { error: '最长不得超过15个字符' })
    .regex(/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/, {
      error: 'slug 只能为" kebab-case "模式！',
    }),
  icon: z.url({ protocol: /^https|http$/ }).optional(),
  iconDark: z.url({ protocol: /^https|http$/ }).optional(),
})
export const updateTagFormSchema = createTagFormSchema.extend({
  id: z.string(),
})

export type CreateTagForm = z.infer<typeof createTagFormSchema>
export type UpdateTagForm = z.infer<typeof updateTagFormSchema>

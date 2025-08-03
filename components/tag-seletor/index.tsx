import { ControllerRenderProps } from 'react-hook-form'
import { getAllTags } from '../admin-tags-page/actions'
import { MutipleSelector } from '../ui/multiple-selector'
import { CreateBlogForm } from '../admin-blogs-page/types'
import Tag from '../tag'

export default async function TagSelector({
  values,
  onChange,
}: {
  values: ControllerRenderProps<CreateBlogForm, 'tags'>['value']
  onChange: ControllerRenderProps<CreateBlogForm, 'tags'>['onChange']
}) {
  const tags = await getAllTags()
  return (
    <MutipleSelector
      options={tags}
      valueGetter={(x) => x.id}
      values={values!}
      onChange={onChange}
      optionRenderer={(option) => (
        <Tag name={option.name} icon={option.icon} iconDark={option.iconDark} />
      )}
    />
  )
}

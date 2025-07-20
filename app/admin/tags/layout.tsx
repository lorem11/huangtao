export default function Layout({
  children,
  form,
  table,
}: {
  children: React.ReactNode
  form: React.ReactNode
  table: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-col gap-5">
        {children}
        <h1>添加标签</h1>
        {form}
        <h1>所有标签</h1>
        {table}
      </div>
    </>
  )
}

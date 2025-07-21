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
        {form}
        {table}
      </div>
    </>
  )
}

export default function Layout({
  children,
  form,
  table,
  modal,
}: {
  children: React.ReactNode
  form: React.ReactNode
  table: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-col gap-5">
        {children}
        {form}
        {table}
        {modal}
      </div>
    </>
  )
}

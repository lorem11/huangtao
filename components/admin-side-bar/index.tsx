import AdminMenu from '../admin-menu'
import Logo from '../logo'

export default function SideBar() {
  return (
    <aside className="h-[96vh] w-[400px] bg-slate-200 dark:bg-slate-700 rounded-r-[3rem] translate-y-[2vh] relative border shadow-[5px_0px_10px_1px_rgba(125,125,125,0.5)]">
      <div className="p-4 flex flex-col items-center gap-4 h-full justify-center">
        <div className="scale-125">
          <Logo />
        </div>
        <AdminMenu />
      </div>
    </aside>
  )
}

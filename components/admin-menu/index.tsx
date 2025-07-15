import { ChartAreaIcon, HammerIcon, NotebookPenIcon } from 'lucide-react'

const menu = [
  {
    label: '统计',
    icon: <ChartAreaIcon />,
  },
  {
    label: '博客',
    icon: <NotebookPenIcon />,
  },
  {
    label: '项目',
    icon: <HammerIcon />,
  },
]

export default function AdminMenu() {
  return (
    <nav>
      <ul>
        {menu.map((m) => (
          <div
            key={m.label}
            className="flex items-center text-xl font-bold mt-4 hover:bg-slate-300 dark:hover:bg-slate-600 py-2 px-8 cursor-pointer rounded-2xl"
          >
            {m.icon}
            <span className="ml-4">{m.label}</span>
          </div>
        ))}
      </ul>
    </nav>
  )
}

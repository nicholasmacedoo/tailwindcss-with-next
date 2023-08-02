import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/nicholasmacedoo.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Nicholas Macedo
        </span>
        <span className="text-smtext-zinc-500 truncate">
          nicholasmacedoo@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-full p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}

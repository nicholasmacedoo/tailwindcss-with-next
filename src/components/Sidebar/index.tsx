import { Logo } from './Logo'
import {
  Search,
  BarChart,
  Flag,
  Home,
  SquareStack,
  Users,
  Cog,
  Package,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import * as Input from '../Input'
import { Profile } from './Profile'
import Image from 'next/image'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      {/* <Logo /> */}
      <Image
        height={20}
        width={187}
        src="/logotipo.svg"
        alt="Seeksales"
        className="mb-10"
      />
      {/* <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root> */}

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Negocios" icon={SquareStack} />
        <NavItem title="Produtos" icon={Package} />
        <NavItem title="Reporting" icon={Flag} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          {/* <NavItem title="Support" icon={LifeBuoy} /> */}
          <NavItem title="Usuários" icon={Users} />
          <NavItem title="Configurações" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}

import { 
  LayoutDashboard, Server, Wallet, CreditCard, 
  ShoppingBag, Box, Sun, Moon, LogOut, Plus, MoreVertical, 
  ExternalLink, ShieldAlert 
} from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen w-screen bg-black text-zinc-400 font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col p-4 bg-[#0a0a0a]">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-white font-bold">KS</div>
          <h1 className="text-white font-bold text-lg">KSCloud</h1>
          <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500">v2.0</span>
        </div>

        <nav className="flex-1 space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4 px-2">Hosting</p>
            <div className="space-y-1">
              <NavItem icon={<LayoutDashboard size={18}/>} label="Dashboard" active />
              <NavItem icon={<Server size={18}/>} label="Servers" />
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4 px-2">Economy</p>
            <div className="space-y-1">
              <NavItem icon={<Wallet size={18}/>} label="Wallet" />
              <NavItem icon={<CreditCard size={18}/>} label="Billing" />
              <NavItem icon={<ShoppingBag size={18}/>} label="Store" />
              <NavItem icon={<Box size={18}/>} label="Crates" />
            </div>
          </div>
        </nav>

        {/* Promo Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-4">
          <p className="text-white text-xs font-bold mb-1">Introducing KSCloud 8</p>
          <p className="text-[10px] text-zinc-500 mb-3">Truly the next generation of our platform.</p>
          <button className="text-blue-500 text-[10px] flex items-center gap-1 hover:underline">
            Learn more <ExternalLink size={10}/>
          </button>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
          <button className="p-2 hover:bg-zinc-800 rounded-lg"><Sun size={16}/></button>
          <button className="p-2 bg-zinc-800 text-white rounded-lg"><Moon size={16}/></button>
        </div>

        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">AZ</div>
          <div className="flex-1 overflow-hidden">
            <p className="text-white text-xs font-bold truncate">azureknightfr</p>
            <p className="text-[9px] text-zinc-500 truncate">AZUREKNIGHTFR@GMAIL.COM</p>
          </div>
          <LogOut size={16} className="text-zinc-600 hover:text-white cursor-pointer"/>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col relative overflow-y-auto">
        <header className="p-8 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">Servers</h2>
            <p className="text-zinc-500">View a list of your servers.</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-zinc-200 transition-colors">
            <Plus size={18}/> Create Server
          </button>
        </header>

        <div className="px-8 space-y-8">
          {/* Blue Hero Card */}
          <div className="bg-gradient-to-r from-[#0d1526] to-[#0a0a0a] border border-blue-900/30 rounded-2xl p-8 flex justify-between items-center relative overflow-hidden group">
            <div className="relative z-10 max-w-md">
              <h3 className="text-white text-xl font-bold mb-2">Server hosting</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Deploy your own free game server, Discord bot, application - or pretty much anything.
                All built on top of KSCloud's high-performance network.
              </p>
              <button className="text-blue-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Create a new server <span>→</span>
              </button>
            </div>
            {/* Abstract Graphic */}
            <div className="w-32 h-32 bg-zinc-800 rotate-12 rounded-2xl border border-zinc-700 opacity-50 shadow-2xl"></div>
          </div>

          {/* List Section */}
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-600 font-bold px-4">
              <span>Name</span>
              <span>Updated</span>
            </div>

            <ServerRow name="Survival SMP" ram="4096 MB memory" cpu="200% CPU cores" updated="1d ago" />
            <ServerRow name="Lobby Network" ram="1024 MB memory" cpu="100% CPU cores" updated="3d ago" />
          </div>
        </div>

        {/* --- DEV BANNER --- */}
        <div className="mt-auto p-4">
          <div className="bg-red-600 text-white rounded-xl p-4 flex gap-4 items-start border border-red-500/50 shadow-lg shadow-red-900/20">
            <ShieldAlert className="shrink-0" size={24}/>
            <div>
              <p className="font-bold text-sm">Developer mode is enabled</p>
              <p className="text-[11px] opacity-80">You are running KSCloud Panel v2.0 in developer mode. This should not be used in production.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Small helper component for navigation items
function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300'}`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

// Small helper component for server rows
function ServerRow({ name, ram, cpu, updated }: { name: string, ram: string, cpu: string, updated: string }) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-900 transition-colors group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
          <Server size={20} className="text-zinc-500"/>
        </div>
        <div>
          <p className="text-white font-bold text-sm">{name}</p>
          <p className="text-[10px] text-zinc-600">{ram}  •  {cpu}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="bg-blue-600/10 text-blue-500 p-1.5 rounded-md border border-blue-500/20">
          <LayoutDashboard size={14}/>
        </div>
        <div className="text-right">
          <p className="text-white text-xs font-bold">You</p>
          <p className="text-[10px] text-zinc-600">{updated}</p>
        </div>
        <MoreVertical size={18} className="text-zinc-700 cursor-pointer hover:text-white"/>
      </div>
    </div>
  );
}

export default App;
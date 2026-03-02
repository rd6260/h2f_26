export default function Navbar() {
    return (
        <div className="fixed flex animate-slide-up [animation-delay:0.5s] z-50 opacity-0 pr-4 pl-4 top-6 right-0 left-0 justify-center">
            <nav className="flex transition-all duration-300 bg-neutral-900/60 w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-2 shadow-2xl backdrop-blur-xl items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 pl-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon icon="solar:planet-bold-duotone" width="18" />
                    </div>
                    <span className="font-bricolage text-lg tracking-tight font-medium">
                        VELOS
                    </span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
                    <a href="#" className="text-white hover:text-white transition-colors">
                        Fleet
                    </a>
                    <a href="#projects" className="hover:text-white transition-colors">
                        Missions
                    </a>
                    <a href="#process" className="hover:text-white transition-colors">
                        Tech
                    </a>
                    <a href="#careers" className="hover:text-white transition-colors">
                        Crew
                    </a>
                    <a href="#methodology" className="hover:text-white transition-colors">
                        Protocol
                    </a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon icon="solar:magnifer-linear" width="20" />
                    </button>
                    <button className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors group">
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon icon="solar:menu-dots-square-linear" width="20" />
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </button>
                </div>
            </nav>
        </div>
    );
}

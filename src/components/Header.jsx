import { useLocation } from "react-router-dom";

export default function Header() {
	const location = useLocation();

	return (
		<header className="py-[20px]">
			<div className={`container flex sm:flex-wrap items-center gap-[40px] md:gap-[24px] ${location.pathname !== "/wiki" ? "justify-between" : "justify-center"}`}>
				<img className="h-[20px] md:max-h-[16px]" src="/img/logo.svg" alt="Лого" />
				{location.pathname !== "/wiki" && (
					<div className="flex-1 h-[36px] rounded-[6px] bg-white/10 px-[12px] flex items-center gap-[10px] sm:w-full sm:min-w-[200px] sm:order-1">
						<img src="/icons/search.svg" alt="Поиск" />
						<input className="w-full placeholder:text-white/30" type="text" placeholder="Поиск" />
					</div>
				)}
				<div className="gap-[40px] md:gap-[24px] flex items-center">
					<img
						className="hover:opacity-65 cursor-pointer transition-opacity"
						src="/icons/gallery.svg"
						alt=""
					/>
					<img
						className="hover:opacity-65 cursor-pointer transition-opacity"
						src="/icons/favorites.svg"
						alt=""
					/>
					<img className="hover:opacity-65 cursor-pointer transition-opacity" src="/icons/user.svg" alt="" />
				</div>
			</div>
		</header>
	);
}

import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="mt-auto bg-white/10 pt-[60px] pb-[20px] md:pt-[24px]">
			<div className="container">
				<div className="flex items-center justify-between gap-[20px] sm:flex-col">
					<img className="h-[20px] md:h-[16px] sm:!h-[20px] sm:my-[8px]" src="/img/logo.svg" alt="Лого" />
					<div className="rounded-[8px] border border-white/10 h-[56px] max-w-[589px] w-full inline-flex justify-between items-center">
						<input
							className="text-white font-normal w-full placeholder:text-white px-[16px]"
							type="text"
							placeholder="Email для рассылки"
						/>
						<button className="hover:bg-white/15 bg-white/10 rounded-[6px] h-[36px] w-[36px] flex-middle mr-[10px]">
							<img className="h-[20px]" src="/icons/arrow-to-right.svg" alt="Отправить" />
						</button>
					</div>
				</div>
				<div className="bg-white/10 h-px w-full my-[32px] md:my-[24px]" />
				<div className="grid grid-cols-4 items-end gap-[16px] md:grid-cols-2 sm:!grid-cols-1 sm:text-center sm:gap-[8px]">
					{[
						["РЭР", "РЭБ"],
						["Системы связи", "СППР"],
						["Беспилотные системы", "Датчики"],
						["AI", "ML"],
					].map((arr, arr_index) => (
						<ul key={arr_index} className="flex flex-col gap-[12px]">
							{arr_index === 0 && (
								<li className="uppercase font-bold tracking-[1px] text-white/30 mb-[8px]">Категории</li>
							)}
							{arr.map(text => (
								<li key={text}>
									<Link to="#" className="relative group">
										{text}
										<span className="transition-all w-0 group-hover:w-full inline-flex absolute bg-white h-px -bottom-px left-0"></span>
									</Link>
								</li>
							))}
						</ul>
					))}
				</div>
				<div className="bg-white/10 h-px w-full my-[32px] md:my-[24px]" />
				<div className="grid grid-cols-4 items-start gap-[16px] md:grid-cols-2 sm:!grid-cols-1 sm:text-center">
					{[
						["Пристрелка", "О маркетплейсе", "Пользовательское соглашение"],
						["Покупателям", "Доставка и оплата", "Вопросы и ответы"],
						["Продавцам", "Стать поставщиком", "Личный кабинет"],
						["Поддержка", "Телеграмм-бот", "Обратная связь"],
					].map((arr, arr_index) => (
						<ul key={arr_index} className="flex flex-col gap-[12px] sm:text-center sm:gap-[8px]">
							<li className="uppercase font-bold tracking-[1px] text-white/30 mb-[8px]">{[arr[0]]}</li>
							{arr.slice(1).map(text => (
								<li key={text}>
									<Link to="#" className="relative group inline-flex items-center gap-[8px]">
										{text === "Телеграмм-бот" && <img src="/icons/telegram.svg" alt={text} />}
										{text === "Обратная связь" && <img src="/icons/mail.svg" alt={text} />}
										{text}
										<span className="transition-all w-0 group-hover:w-full inline-flex absolute bg-white h-px -bottom-px left-0"></span>
									</Link>
								</li>
							))}
						</ul>
					))}
				</div>
				<div className="bg-white/10 h-px w-full my-[32px] md:my-[24px]" />
				<div className="flex items-center justify-between text-[12px] text-white/70 opacity-50 -mt-[10px]">
					<p>© 2022 ЦРВИ «Пристрелка»</p>
					<p>Версия 4.28.397</p>
				</div>
			</div>
		</footer>
	);
}

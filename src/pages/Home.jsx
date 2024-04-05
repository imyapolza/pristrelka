import RecentlyAdd from "../components/RecentlyAdd";

export default function HomePage() {
	return (
		<section className="pt-[20px] pb-[60px]">
			<div className="relative">
				<img src="/img/home/1.jpg" className="rounded-[12px] md:min-h-[300px]" />
				<div className="absolute top-1/2 -translate-y-1/2 left-[80px] max-w-[352px] lg:left-[5%]">
					<h2 className="uppercase font-bold tracking-[1px] lg:text-[12px]">Программно-аппаратный комплекс</h2>
					<h1 className="my-[6px] text-[96px] font-extrabold leading-[110%] lg:text-[48px]">ГРАНЬ</h1>
					<p className="max-w-[273px] lg:text-[12px]">
						Новейшая эффективная разработка ЛОКТАР АРМ СОФТВЕР для войск радио-электронной борьбы
					</p>
					<div className="gap-[20px] flex mt-[20px] md:flex-col md:gap-[16px] md:items-start">
						<button className="bg-white pl-[8px] pr-[16px] rounded-[6px] hover:opacity-80 font-bold uppercase tracking-[0.5px] text-[12px] leading-[120%] flex gap-[12px] items-center h-[36px] text-[#151313]">
							<img src="/icons/eye.svg" />
							Запросить демо
						</button>
						<button className="font-bold uppercase tracking-[0.5px] text-[12px] leading-[120%] flex gap-[12px] items-center h-[36px] hover:opacity-80">
							Подробнее
							<img src="/icons/arrow-to-right.svg" />
						</button>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 mt-[40px] mb-[44px] gap-[32px] xl:gap-[16px] xl:mt-[16px] md:grid-cols-1">
				{["РЭБ", "РЭР", "Системы связи", "СППР", "Беспилотные системы", "Датчики", "AI", "ML"].map(
					(title, index) => (
						<div key={title} className="relative">
							<img className="rounded-[12px] md:w-full md:rounded-[26px]" src={`/img/home/${index + 2}.jpg`} />
							<span className="absolute font-bold text-[24px] leading-[120%] bottom-[32px] left-[32px] uppercase max-w-[240px] xl:text-[14px] xl:bottom-[12%] xl:left-[8%] md:!text-[18px]">
								{title}
							</span>
						</div>
					),
				)}
			</div>
			<RecentlyAdd />
		</section>
	);
}

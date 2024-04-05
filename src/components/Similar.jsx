export default function Similar() {
	return (
		<section>
			<h5 className="uppercase mb-[32px] font-bold tracking-[1px]">Похожие</h5>
			<div className="flex gap-[32px]">
				{[...new Array(1)].map((_, index) => (
					<div className="bg-[#282525] rounded-[8px] p-[20px] flex flex-col gap-[20px] md:w-full" key={index}>
						<h6 className="font-semibold text-[12px] leading-[16px] text-[#7c7474]">Системы связи</h6>
						<img src="/img/home/drone.png" className="rounded-[4px]" alt="" />
						<div>
							<h6 className="uppercase tracking-[1px] font-bold">Гранит</h6>
							<p className="mt-[4px] text-[#7c7474] text-[12px] font-normal max-w-[316px]">
								Комплекс средств радиосвязи для организации сетей информационного обмена ...
							</p>
						</div>
						<div className="w-full h-px bg-white/10" />
						<div className="flex gap-[8px]">
							<img src="/icons/stars.svg" />
							<span className="opacity-50 text-[12px] font-medium">211 отзывов</span>
						</div>
						<div className="w-full h-px bg-white/10" />
						<div className="flex items-center gap-[12px]">
							<img className="rounded-[4px]" src="/img/home/volnovaya.png" alt="" />
							<span className="uppercase text-[10px] tracking-[0.4px] leading-[16px] font-semibold">
								Волновая сеть
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

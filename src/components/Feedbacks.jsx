export default function Feedbacks() {
	return (
		<section>
			<h5 className="uppercase mb-[32px] font-bold tracking-[1px]">Отзывы</h5>
			<div className="flex gap-[32px] xxl:gap-[16px] xl:flex-wrap">
				{[...new Array(4)].map((_, index) => (
					<div
						className="rounded-[12px] p-[20px] bg-white/10 flex gap-[20px] flex-col max-w-[356px] md:w-full md:max-w-none"
						key={index}>
						<div className="flex gap-[8px] items-center">
							<img src="/img/loktar.png" className="rounded-[4px] h-[40px] w-[40px]" />
							<h6 className="font-semibold text-[10px] leading-[16px] tracking-[0.4px] uppercase">
								45-я отдельная гвардейская бригада специального назначения
							</h6>
						</div>
						<div className="h-px w-full bg-white/10" />
						<div className="flex justify-between items-center">
							<div className="text-[12px] opacity-50">Оценка</div>
							<img src="/icons/stars.svg" />
						</div>
						<div className="flex justify-between items-center">
							<div className="text-[12px] opacity-50">Версия продукта</div>
							<div className="flex items-center gap-[8px]">
								<span>V.456-09</span>
								<img src="/icons/arrow-right.svg" />
							</div>
						</div>
						<div className="flex justify-between items-center">
							<div className="text-[12px] opacity-50">Результат апробации</div>
							<div className="flex items-center gap-[8px]">
								<span className="whitespace-nowrap">.PDF/126.5 Mb</span>
								<img src="/icons/download.svg" />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

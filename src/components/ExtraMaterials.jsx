export default function ExtraMaterials() {
	return (
		<section>
			<h5 className="uppercase mb-[44px] font-bold tracking-[1px]">Дополнительные материалы</h5>
			<div className="flex gap-[20px] md:flex-wrap sm:grid sm:grid-cols-1 sm:gap-[12px]">
				{[...new Array(3)].map((_, index) => (
					<div key={index} className="max-w-[176px] rounded-[8px] p-[12px] bg-white/10 sm:w-full sm:max-w-none">
						<div className="flex items-center gap-[9px] mb-[20px]">
							<img src="/icons/pdf-size.svg" />
							<span className="text-[12px] opacity-50">12.4 Мб</span>
						</div>
						<p className="text-[12px] text-[#f8fbfc]">Исследование необходимости применения средс ...</p>
					</div>
				))}
			</div>
		</section>
	);
}

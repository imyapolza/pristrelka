export default function WikiItem() {
	return (
		<div className="rounded-[12px] bg-white/10 p-[20px]">
			<h6 className="leading-[120%] font-bold text-[20px] lg:text-[18px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit
			</h6>
			<p className="mt-[12px] mb-[32px] lg:mb-[24px] text-[12px] opacity-50">
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident ...
			</p>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-[27px] lg:gap-[12px]">
					<div className="gap-[8px] lg:gap-[5px] flex items-center">
						<img
							className="hover:opacity-70 transition-opacity cursor-pointer"
							src="/icons/images.svg"
							alt=""
						/>
						<span className="opacity-50 text-[12px]">4</span>
					</div>
					<div className="gap-[8px] lg:gap-[5px] flex items-center">
						<img
							className="hover:opacity-70 transition-opacity cursor-pointer"
							src="/icons/pdf.svg"
							alt=""
						/>
						<span className="opacity-50 text-[12px]">2</span>
					</div>
					<div className="gap-[8px] lg:gap-[5px] flex items-center">
						<img
							className="hover:opacity-70 transition-opacity cursor-pointer"
							src="/icons/comments.svg"
							alt=""
						/>
						<span className="opacity-50 text-[12px]">345</span>
					</div>
				</div>
				<img
					className="hover:opacity-70 transition-opacity cursor-pointer"
					src="/icons/add-to-folder.svg"
					alt=""
				/>
			</div>
		</div>
	);
}

import {  useState } from "react";
import ReactPaginate from "react-paginate";

import Icon from "./../components/Icon";
import WikiItem from "../components/WikiItem";

const TABS = [
	"Все материалы",
	"Рэб",
	"Рэр",
	"Системы связи",
	"Системы помощи принятия решений",
	"Беспилотные системы",
	"Датчики",
	"AI",
	"ML",
];

export default function WikiPage() {
	const [currentTab, setCurrentTab] = useState(TABS[0]);
	const [items, setItems] = useState([...new Array(900)]);

	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + 15;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / 15);

	const handlePageClick = event => {
		const newOffset = (event.selected * 15) % items.length;
		setItemOffset(newOffset);
	};

	return (
		<section>
			<div className="mt-[28px] mb-[48px] flex items-center justify-between md:flex-col md:gap-[20px] md:mb-[20px]">
				<h1 className="text-[24px] font-bold leading-[120%]">Викисклад</h1>
				<div className="flex items-stretch gap-[20px] md:gap-[8px]">
					<Icon icon="search" />
					<Icon icon="folder" />
					<button className="px-[12px] flex items-center gap-[12px] h-[44px] rounded-[8px] bg-white/10 font-bold tracking-[1px] uppercase hover:bg-white/15 leading-[120%] md:text-[13px] md:px-[10px]">
						<img className="invert-[1]" src="/icons/plus.svg" alt="" />
						Создать материал
					</button>
				</div>
			</div>
			<div className="flex items-start gap-[32px] mb-[40px] md:flex-col md:gap-[20px]">
				<nav className="min-w-[356px] lg:min-w-[250px] md:w-full md:text-center">
					{TABS.map((tab, index) => (
						<div
							className={`py-[20px] md:py-[15px] uppercase font-bold tracking-[1px] hover:text-white text-white/50 cursor-pointer ${
								index !== TABS.length - 1 && "border-b border-white/10"
							} ${currentTab === tab && "text-white"}`}
							onClick={() => setCurrentTab(tab)}
							key={tab}>
							{tab}
						</div>
					))}
				</nav>
				<div>
					<div className="grid grid-cols-3 gap-[32px] mb-[52px] xl:grid-cols-2 lg:gap-[16px] lg:mb-[32px] md:!grid-cols-1">
						{currentItems.map((_, index) => (
							<WikiItem key={index} />
						))}
					</div>
					<div className="flex-middle">
						<ReactPaginate
							className="flex items-center gap-[8px]"
							breakLabel={<>...</>}
                            breakLinkClassName="h-[36px] w-[36px] hover:bg-white/20 font-bold text-[12px] tracking-[0.5px] flex-middle rounded-[6px]"
							onPageChange={handlePageClick}
							pageRangeDisplayed={1}
							pageCount={pageCount}
                            pageLinkClassName="flex-middle bg-[#2C2B2B] rounded-[6px] w-[36px] h-[36px] sm:w-[25px] sm:h-[25px] sm:rounded-[3px] font-bold text-[12px] tracking-[0.5px] hover:bg-white/20"
                            activeLinkClassName="!bg-white text-[#151313]"
							previousLabel={
								<button className="flex-middle bg-[#2C2B2B] rounded-[6px] w-[36px] h-[36px] sm:w-[25px] sm:h-[25px] sm:rounded-[3px] hover:bg-white/20">
									<img className="w-[20px] sm:w-[15px] rotate-180" src="/icons/arrow-to-right.svg" />
								</button>
							}
							nextLabel={
								<button className="flex-middle bg-[#2C2B2B] rounded-[6px] w-[36px] h-[36px] sm:w-[25px] sm:h-[25px] sm:rounded-[3px] hover:bg-white/20">
									<img className="w-[20px] sm:w-[15px]" src="/icons/arrow-to-right.svg" />
								</button>
							}
							renderOnZeroPageCount={null}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

import { useState } from "react";

import Icon from "../components/Icon";

export default function CustomerPage() {
	const [currentTab, setCurrentTab] = useState("Мои продукты");

	return (
		<section className="pt-[20px] pb-[60px]">
			<div className="flex sm:flex-col sm:items-end justify-between items-center gap-[20px]">
				<div className="flex items-center gap-[32px] md:gap-[20px]">
					<img
						className="rounded-[8px] md:w-[52px] md:h-[52px] md:rounded-[4px]"
						src="/img/loktar.png"
						alt="45-я отдельная гвардейская бригада специального назначения"
					/>
					<h1 className="leading-[120%] font-bold text-[24px] max-w-[530px] md:text-[18px] sm:!text-[16px]">
						45-я отдельная гвардейская бригада специального назначения
					</h1>
				</div>
				<div className="flex gap-[20px] md:gap-[12px]">
					<Icon icon="people" />
					<Icon icon="gear" />
				</div>
			</div>
			<div className="my-[40px] lg:mb-[16px] rounded-[12px] bg-white/10 p-[20px] w-full flex justify-between md:p-[16px] md:rounded-[6px]">
				<div>
					<div className="font-bold text-[48px] leading-[120%] lg:text-[36px] md:!text-[22px]">3 781 094 ₽</div>
					<p className="text-[12px] opacity-50 mt-[12px]">Баланс счета</p>
				</div>
				<div className="flex gap-[20px] md:gap-[8px] md:flex-col md:items-end">
					<button className="h-[44px] gap-[12px] flex hover:bg-white/85 uppercase font-bold tracking-[1px] bg-white rounded-[8px] text-[#151313] flex-middle px-[12px] leading-[120%] md:text-[12px] md:gap-[6px]">
						Пополнить
						<img src="/icons/plus.svg" alt="Пополнить" />
					</button>
					<button className="h-[44px] gap-[12px] flex hover:bg-white/15 uppercase font-bold tracking-[1px] rounded-[8px] flex-middle px-[12px] bg-white/10 leading-[120%] md:text-[12px] md:gap-[6px]">
						Бухгалтерия
						<img src="/icons/docs.svg" alt="Бухгалтерия" />
					</button>
					<Icon icon="more" />
				</div>
			</div>
			<div className="my-[40px] lg:mt-[16px] flex gap-[32px] lg:gap-[16px] lg:flex-wrap justify-between">
				{[
					...new Array(5).fill({
						count: 12,
						text: "Продуктов приобретено",
					}),
				].map(({ count, text }, index) => (
					<div key={index} className="rounded-[12px] bg-white/10 p-[20px] w-full md:p-[16px] md:rounded-[6px]">
						<div className="font-bold text-[48px] leading-[120%]">{count}</div>
						<div className="mt-[12px] flex items-center justify-between">
							<p className="text-[12px] opacity-50">{text}</p>
							<img className="h-[20px]" src="/icons/arrow-to-right.svg" alt="" />
						</div>
					</div>
				))}
			</div> 
			<section>
				<nav className="flex border-b border-white/10">
					{["Мои продукты", "Демо-режим", "Избранное"].map(tab => (
						<div key={tab} className="px-[40px] md:px-[16px] pb-[32px] md:pb-[16px] relative sm:!px-[8px] sm:!pb-[12px] sm:flex">
							<button
								onClick={() => setCurrentTab(tab)}
								className={`tracking-[1px] font-bold uppercase hover:opacity-80 sm:text-[12px]`}>
								{tab}
							</button>
							{currentTab === tab && <div className="h-px bg-white absolute left-0 right-0 bottom-0" />}
						</div>
					))}
				</nav>
				<div className="mt-[32px] gap-[20px] md:gap-[16px] flex flex-col">
					<div className="rounded-[12px] bg-white/10 p-[20px] flex items-center justify-between md:flex-col md:gap-[20px] md:items-start sm:p-[12px] sm:rounded-[6px]">
						<div className="flex gap-[20px] items-center">
							<img className="rounded-[8px]" src="/img/shorox.jpg" alt="" />
							<div>
								<p className="font-bold text-[20px] leading-[120%]">Комплекс связи {`"Шорох"`}</p>
								<p className="uppercase mt-[8px] font-bold text-white/30">ЛОКТАР АРМ СОФТВЕР</p>
							</div>
						</div>
						<div className="flex items-stretch gap-[20px]">
							<div className="bg-white/10 p-[12px] rounded-[4px]">
								<img src="/icons/stars.svg" alt="" />
								<p className="mt-[12px] text-white/30 text-[12px]">Моя оценка</p>
							</div>
							<div className="bg-white/10 p-[12px] rounded-[4px]">
								<img src="/icons/stars.svg" alt="" />
								<p className="mt-[12px] text-white/30 text-[12px]">Средняя оценка</p>
							</div>
						</div>
					</div>
                    <div className="rounded-[12px] bg-white/10 p-[20px] flex items-center justify-between md:flex-col md:gap-[20px] md:items-start sm:p-[12px] sm:rounded-[6px]">
						<div className="flex gap-[20px] items-center">
							<img className="rounded-[8px]" src="/img/shorox.jpg" alt="" />
							<div>
								<p className="font-bold text-[20px] leading-[120%]">Комплекс связи {`"Шорох"`}</p>
								<p className="uppercase mt-[8px] font-bold text-white/30">ЛОКТАР АРМ СОФТВЕР</p>
							</div>
						</div>
						<div className="flex items-stretch gap-[20px]">
							<div className="bg-white/10 p-[12px] rounded-[4px]">
								<button className="uppercase font-semibold text-[10px] border-[2px] border-white/10 rounded-[4px] px-[8px] h-[28px] hover:bg-white hover:border-white hover:text-[#151313]">Оставить отзыв</button>
								<p className="mt-[4px] text-white/30 text-[12px]">Моя оценка</p>
							</div>
							<div className="bg-white/10 p-[12px] rounded-[4px]">
								<img src="/icons/stars.svg" alt="" />
								<p className="mt-[12px] text-white/30 text-[12px]">Средняя оценка</p>
							</div>
						</div>
					</div>
                    <div className="rounded-[12px] bg-white/10 p-[20px] flex items-center justify-between md:flex-col md:gap-[20px] md:items-start sm:p-[12px] sm:rounded-[6px]">
						<div className="flex gap-[20px] items-center">
							<img className="rounded-[8px]" src="/img/shorox.jpg" alt="" />
							<div>
								<p className="font-bold text-[20px] leading-[120%]">Комплекс связи {`"Шорох"`}</p>
								<p className="uppercase mt-[8px] font-bold text-white/30">ЛОКТАР АРМ СОФТВЕР</p>
							</div>
						</div>
						<div className="flex items-stretch gap-[20px]">
							<div className="bg-white/10 p-[12px] rounded-[4px]">
								<img src="/icons/stars.svg" alt="" />
								<p className="mt-[12px] text-white/30 text-[12px]">Моя оценка</p>
							</div>
							<div className="bg-white/10 p-[12px] rounded-[4px]">
								<img src="/icons/stars.svg" alt="" />
								<p className="mt-[12px] text-white/30 text-[12px]">Средняя оценка</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

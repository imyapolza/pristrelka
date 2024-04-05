import Icon from "../components/Icon";
import Feedbacks from "../components/Feedbacks";
import Similar from "../components/Similar";

import { useEffect, useRef, useState } from "react";

import { register } from "swiper/element/bundle";
register();

export default function ItemPage() {
	const [expandedOpinion, setExpandedOpinion] = useState(false);
	const [expandedParameters, setExpandedParameters] = useState(false);

	const sliderMain = useRef();
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		sliderMain.current.addEventListener("swiperslidechange", () => {
			setSlideIndex(sliderMain?.current?.swiper?.realIndex || 0);
		});

		sliderMain.current.initialize();
	}, []);

	return (
		<section className="pt-[20px] pb-[60px]">
			<div className="flex gap-[20px] sm:flex-wrap sm:gap-[12px]">
				<div className="rotate-180">
					<Icon icon="arrow-to-right" />
				</div>
				<button className="font-bold tracking-[1px] p-[12px] flex items-center gap-[12px] rounded-[8px] bg-white/10 hover:bg-white/15">
					<img src="/icons/stars.svg" alt="" />
					164 отзыва
				</button>
				<Icon icon="gallery" />
				<Icon icon="favorites" />
			</div>
			<div className="my-[40px] flex items-start gap-[32px] justify-between xxl:flex-col">
				<div className="relative max-w-[744px] lg:max-w-none lg:w-full">
					<swiper-container ref={sliderMain} init={false} loop={true} slides-per-view="1" class="flex">
						{Array(4)
							.fill(1)
							.map((_, index) => (
								<swiper-slide key={index}>
									<img className="rounded-[12px]" src="/img/slider/photo.jpg" alt="" />
								</swiper-slide>
							))}
					</swiper-container>
					<div className="absolute items-center left-[16px] bottom-[12px] flex gap-[12px] sm:gap-[8px] z-10">
						{Array(4)
							.fill(1)
							.map((_, index) => (
								<img
									key={index}
									className={`block rounded-lg sm:rounded-[4px]  ${
										slideIndex === index
											? "border-[2px] border-white w-[105px] h-[64px] sm:w-[64px] sm:h-[48px]"
											: "cursor-pointer hover:opacity-100 transition-opacity w-[92px] h-[56px] sm:w-[52px] sm:h-[40px]"
									}`}
									onClick={() => sliderMain.current.swiper.slideToLoop(index)}
									src="/img/slider/photo.jpg"
									alt=""
								/>
							))}
					</div>
				</div>
				<div className="w-[744px] lg:w-full">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-[12px]">
							<img className="w-[56px] h-[56px] sm:w-[40px] sm:h-[40px]" src="/img/loktar.png" alt="" />
							<div>
								<h6 className="mb-[6px] uppercase font-bold tracking-[1px] text-[16px] leading-[20px] sm:text-[14px]">
									локтар арм софтвер
								</h6>
								<img className="sm:h-[16px]" src="/icons/stars.svg" />
							</div>
						</div>
						<Icon icon="arrow-to-right" />
					</div>
					<div className="mt-[57px] sm:mt-[32px] mb-[32px]">
						<h2 className="text-[32px] sm:text-[28px] font-bold leading-[40px]">Комплекс связи {`"Шорох"`}</h2>
						<p className="mt-[12px] text-[16px] sm:text-[14px] leading-[24px]">
							Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных,
							поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат
							для обмена информацией.
						</p>
					</div>
					<div className="bg-white/10 p-[20px] rounded-[12px] sm:p-[16px] sm:rounded-[8px]">
						<div className="flex items-center justify-between md:flex-col md:gap-[12px]">
							<button className="h-[56px] text-white uppercase bg-white/10 rounded-[12px] p-[16px] inline-flex items-center gap-[12px] font-bold text-[16px] tracking-[1px] leading-[20px] hover:bg-white/15">
								<img className="invert-[1] h-[24px]" src="/icons/eye.svg" />
								Запросить демо
							</button>
							<div className="flex items-center gap-[12px]">
								<div className="rounded-[8px] border border-white/10 flex items-center flex-middle p-[10px]">
									<button className="rounded-[6px] bg-white/10 flex-middle hover:bg-white/15 h-[36px] w-[36px]">
										<img className="h-[20px]" src={`/icons/minus.svg`} />
									</button>
									<span className="inline-flex justify-center w-[40px] mx-[12px]">1</span>
									<button className="rounded-[6px] bg-white/10 flex-middle hover:bg-white/15 h-[36px] w-[36px]">
										<img className="invert-[1] h-[20px]" src={`/icons/plus.svg`} />
									</button>
								</div>
								<button className="bg-white text-[#10120E] text-[16px] tracking-[1px] font-bold leading-[20px] px-[16px] py-[18px] rounded-[8px] uppercase hover:opacity-80">
									Купить
								</button>
							</div>
						</div>
						<div className="bg-white/10 h-px my-[20px] sm:my-[16px]" />
						<div className="flex items-start gap-[20px]">
							<img src="/icons/danger.svg" />
							<p className="text-[16px] sm:text-[14px] opacity-50">
								В настоящее время поставляются устройства
								<br /> с мощностью излучения 0,15Вт, на частоте 433МГц
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between gap-[20px] xxl:flex-wrap xxl:justify-start xxl:gap-y-[32px]">
				<div className="max-w-[464px]">
					<h5 className="uppercase mb-[28px] font-bold tracking-[1px]">Описание</h5>
					<div>
						<p
							className={` ${
								expandedOpinion
									? ""
									: "h-[200px] overflow-hidden bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent"
							}`}>
							Комплекс связи «Шорох» позволяет:
							<br /> • Быстро развернуть низовую сеть передачи данных; <br />• Встроиться в существующие
							сети передачи данных (пример: Wi-Fi); <br />• Предоставляет шлюзы между различными видами
							транспорта (пример: LoRa в Аналог, Аналог в Wi-Fi и т.д.); <br />• Формирует mesh узел;{" "}
							<br />• Позволяет передавать точки внутри группы пользователей; <br />• Позволяет
							обмениваться текстовой и графической информацией; <br />• Позволяет обмениваться медиа
							файлами и голосовой информацией (скоро); <br />• «Из коробки» позволяет организовать
							передачу данных на дистанцию до 1,5 км без ретранслятора и на 5 км с ретрансляционным
							устройством; <br />• Позволяет создавать единую обновляемую карту точек между несколькими
							подразделениями; <br />• Позволяет каждому участнику делиться собственной гео позицией для
							отметки на гео слое.
						</p>
						<button
							className="uppercase font-semibold text-[10px] py-[6px] px-[8px] inline-flex gap-[8px] items-center hover:opacity-80 mt-[12px]"
							onClick={() => setExpandedOpinion(!expandedOpinion)}>
							<img
								className={expandedOpinion ? "-rotate-90" : "rotate-90"}
								src="/icons/arrow-right.svg"
							/>
							{expandedOpinion ? "Свернуть" : "Развернуть"}
						</button>
					</div>
				</div>
				<div className="max-w-[464px]">
					<h5 className="uppercase mb-[28px] font-bold tracking-[1px]">Характеристики</h5>
					<div>
						<p
							className={` ${
								expandedParameters
									? ""
									: "h-[200px] overflow-hidden bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent"
							}`}>
							Обеспечивается совместимость с транспортами: <br />• VHF/UHF радиостанции <br />• DMR
							радиостанции <br />• Wi-Fi <br />• LoRa <br />• UART <br />• Bluetooth <br />• LTE (скоро).
							<br />
							<br /> Обеспечивается совместимость с КПК (смартфонами, планшетами): <br />• Xiaomi <br />•
							Redmi <br />• Realme <br />• Google.
						</p>
						<button
							className="uppercase font-semibold text-[10px] py-[6px] px-[8px] inline-flex gap-[8px] items-center hover:opacity-80 mt-[12px]"
							onClick={() => setExpandedParameters(!expandedParameters)}>
							<img
								className={expandedParameters ? "-rotate-90" : "rotate-90"}
								src="/icons/arrow-right.svg"
							/>
							{expandedParameters ? "Свернуть" : "Развернуть"}
						</button>
					</div>
				</div>
				<div className="max-w-[464px] w-full">
					<h5 className="uppercase mb-[28px] font-bold tracking-[1px]">Документация</h5>
					<div className="flex justify-between items-center border-b border-white/10 py-[20px]">
						<div className="text-[12px] opacity-50">Сертификат соответствия</div>
						<div className="flex items-center gap-[8px]">
							<span>.PDF/126.5 Mb</span>
							<img
								className="cursor-pointer hover:opacity-70 transition-opacity"
								src="/icons/download.svg"
							/>
						</div>
					</div>
					<div className="flex justify-between items-center border-b border-white/10 py-[20px]">
						<div className="text-[12px] opacity-50">Лицензия производителя РПО</div>
						<div className="flex items-center gap-[8px]">
							<span>.PDF/4.2 Mb</span>
							<img
								className="cursor-pointer hover:opacity-70 transition-opacity"
								src="/icons/download.svg"
							/>
						</div>
					</div>
					<div className="flex justify-between items-center border-b border-white/10 py-[20px]">
						<div className="text-[12px] opacity-50">Инструкция пользователя</div>
						<div className="flex items-center gap-[8px]">
							<span>.PDF/12 Mb</span>
							<img
								className="cursor-pointer hover:opacity-70 transition-opacity"
								src="/icons/download.svg"
							/>
						</div>
					</div>
				</div>
			</div> 
			<div className="my-[44px]">
				<Feedbacks />
			</div>
			<Similar />
		</section>
	);
}

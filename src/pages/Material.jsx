import Comments from "../components/Comments";
import ExtraMaterials from "../components/ExtraMaterials";
import Icon from "./../components/Icon";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MaterialPage() {
	return (
		<section className="max-w-[960px] mx-auto pt-[20px] pb-[40px]">
			<div className="flex items-center gap-[20px]">
				<div className="w-[56px] h-[56px] bg-white/10 flex-middle rounded-[8px] font-bold text-[16px] tracking-[1px]">
					АЛ
				</div>
				<div>
					<p className="mb-[4px] font-bold text-[16px] tracking-[0.15px]">Андрей Лавров</p>
					<p className="text-[12px] opacity-50">10 сентября 10:23</p>
				</div>
			</div>
			<h1 className="mt-[32px] mb-[52px] font-bold leading-[120%] text-[48px] sm:text-[32px] sm:mb-[32px]">
				Ut enim ad minima veniam, quis nostrum exercitationem
			</h1>
			<div className="flex items-center gap-[20px] justify-between sm:flex-col">
				<button className="p-[12px] flex items-center gap-[12px] h-[44px] bg-white/10 rounded-[8px] uppercase text-[14px] font-bold tracking-[1px] leading-[120%] hover:bg-white/15">
					<img className="h-[20px] rotate-180" src="/icons/arrow-to-right.svg" alt="" />
					На склад
				</button>
				<div className="flex items-center gap-[20px]">
					<button className="p-[12px] flex items-center gap-[12px] h-[44px] bg-white/10 rounded-[8px] uppercase text-[14px] font-bold tracking-[1px] leading-[120%] hover:bg-white/15">
						145
						<img src="/icons/comments.svg" alt="" />
					</button>
					<Icon icon="folder" />
					<Icon icon="pen" />
				</div>
			</div>
			<p className="mt-[52px] mb-[32px] font-bold text-[16px] tracking-[0.15px] text-[#F8fbfc] sm:mt-[32px] sm:text-[14px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur.
			</p>
			<p className="my-[32px] text-[16px] sm:text-[14px] text-white/70">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et
				quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
				aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi
				nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
				velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur?
			</p>
			<div>
				<div className="relative">
					<Swiper
						navigation={{
                            enabled: true,
							nextEl: "#next",
							prevEl: "#prev",
						}}
                        loop={true}
						modules={[Navigation]}
						className="mySwiper">
						{[...new Array(10)].map(_ => (
							<SwiperSlide key={_}>
								<img src="/img/slider/photo.jpg" />
							</SwiperSlide>
						))}
					</Swiper>
                    <button id="prev" className="hover:opacity-80 z-10 absolute top-1/2 -translate-y-1/2 left-[12px] rotate-180">
						<img className="" src="/img/slider/button.png" />
					</button>
					<button id="next" className="hover:opacity-80 z-10 absolute top-1/2 -translate-y-1/2 right-[12px]">
						<img className="" src="/img/slider/button.png" />
					</button>
				</div>
				<p className="mt-[12px] opacity-50 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
			<p className="my-[32px] text-[16px] sm:text-[14px] text-white/70">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et
				quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
				aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi
				nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
				velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate
				velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
				pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium
				voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate
				non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum
				fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
				eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas
				assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
				necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
				earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
				aut perferendis doloribus asperiores repellat.
			</p>
			<ExtraMaterials />
			<div className="mt-[56px]">
				<Comments />
			</div>
		</section>
	);
}

export default function Comment() {
	return (
		<div>
			<div className="flex gap-[20px] items-center">
				<div className="w-[56px] h-[56px] bg-white/10 flex-middle rounded-[8px] font-bold text-[16px] tracking-[1px]">
					АЛ
				</div>
				<div>
					<p className="mb-[4px] font-bold text-[16px] tracking-[0.15px]">Андрей Лавров</p>
					<p className="text-[12px] opacity-50">10 сентября 10:23</p>
				</div>
			</div>
			<p className="text-[16px] mt-[12px] opacity-70 sm:text-[14px]">
				Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et
				voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
				delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
				repellat.
			</p>
		</div>
	);
}

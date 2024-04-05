export default function LoginPage() {
	return (
		<div className="h-full flex gap-[85px]">
			<div className="h-full">
				<img className="min-h-full h-full" src="/img/drone-operator.png" alt="Оператор дрона" />
				<div className="absolute top-[80px] left-[80px]">
					<img className="max-w-[248px]" src="/img/logo.svg" alt="Лого" />
					<p className="mt-[10px]">Desine sperare qui hic intras</p>
				</div>
				<p className="absolute left-[80px] bottom-[80px]">V 183.09</p>
			</div>
			<div className="min-h-full flex-middle pr-[20px]">
				<button className="absolute top-[20px] right-[20px] rounded-[8px] bg-white/10 h-[44px] w-[44px] flex-middle hover:bg-white/15">
					<img src="/icons/info.svg" alt="Дополнительная информация" />
				</button>
				<form className="w-[375px] flex flex-col gap-[20px]">
					<input className="transition-all focus:border-white/60 w-full h-[56px] border border-white/10 rounded-[12px] px-[16px] placeholder:text-white/30" placeholder="Логин" type="text" />
					<input className="transition-all focus:border-white/60 w-full h-[56px] border border-white/10 rounded-[12px] px-[16px] placeholder:text-white/30" placeholder="Пароль" type="password" />
					<div className="text-right">
						<button className="uppercase font-bold inline-flex items-center gap-[12px] px-[12px] tracking-[1px] bg-white/10 rounded-[8px] h-[44px] hover:bg-white/15" type="button">
							Войти
							<img src="/icons/arrow-to-right.svg" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

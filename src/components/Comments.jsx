import Comment from "./Comment";

export default function Comments() {
	return (
		<section>
			<h5 className="uppercase mb-[44px] font-bold tracking-[1px]">Комментарии</h5>
			<div className="bg-white/10 p-[16px] pr-[18px] rounded-[8px] h-[52px] mb-[32px] flex justify-between items-center gap-[20px]">
				<input className="placeholder:text-white/30 w-full" type="text" placeholder="Ваш комментарий" />
				<img className="hover:opacity-70 cursor-pointer transition-opacity" src="/icons/send.svg" alt="Отправить" />
			</div>
            <div className="flex gap-[32px] flex-col">
                <Comment/>
                <div className="flex gap-[12px] items-start">
                    <img src="/icons/structure-comment.svg" alt="" />
                    <Comment/>
                </div>
                <Comment/>
                <Comment/>
            </div>
		</section>
	);
}

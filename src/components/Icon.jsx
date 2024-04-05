export default function Icon({ width = 44, height = 44, icon }) {
	return (
		<button
        className="rounded-[8px] bg-white/10 flex-middle hover:bg-white/15"
			style={{
				width: `${width}px`,
				height: `${height}px`,
			}}>
			<img className="h-[24px]" src={`/icons/${icon}.svg`} />
		</button>
	);
}

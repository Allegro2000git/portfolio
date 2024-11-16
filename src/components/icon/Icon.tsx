import IconsSprite from './../../assets/icons/icons-sprite.svg';

type IconPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
}

export const Icon = (props: IconPropsType) => {
	return (
		<svg width={props.width || "60"} height={props.height || "60"} viewBox={props.viewBox || "0 0 60 60"}
			fill="none" xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`${IconsSprite}#${props.iconId}`} />
		</svg>

	);
};
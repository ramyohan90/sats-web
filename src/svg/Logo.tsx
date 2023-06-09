
interface IProps {
    width: number;
    height: number;
    outerColor: string;
    innerColor: string;
}

export function LogoComponent({height, width, outerColor, innerColor }: IProps) {
    return (
        <svg width={width} height={height} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 30 30">
            <path fill={outerColor} d="M0.1,30.1c0-10,0-20,0-30c10,0,20,0,30,0c0,10,0,20,0,30C20.1,30.1,10.1,30.1,0.1,30.1z M16.5,9.7L16.5,9.7
	c2.2,0,4.4,0,6.6,0c0.6,0,0.8-0.2,0.8-0.8c0-0.7,0-1.4,0-2.1c0-0.6-0.2-0.8-0.8-0.8c-0.5,0-1.1,0-1.6,0c-3.8,0-7.6,0-11.4,0
	C9.4,6,9.2,6.2,9.2,6.9s0,1.4,0,2.1c0,0.5-0.1,0.6-0.7,0.6c-0.7,0-1.4,0-2.2,0c-0.5,0-0.7,0.2-0.7,0.7c0,0.8,0,1.5,0,2.3
	c0,0.5,0.2,0.7,0.7,0.7c0.7,0,1.4,0,2.2,0c0.5,0,0.6,0.1,0.6,0.6c0,0.7,0,1.4,0,2.1c0,0.7,0.2,0.8,0.8,0.8c2.8,0,5.5,0,8.3,0
	c0.6,0,1.3,0,1.9,0c0.4,0,0.5,0.1,0.5,0.5c0,0.7,0,1.3,0,2s-0.1,0.8-0.8,0.8c-4.2,0-8.4,0-12.6,0c-0.6,0-0.8,0.2-0.8,0.7
	c0,0.7,0,1.5,0,2.2c0,0.5,0.2,0.7,0.7,0.7c4.3,0,8.5,0,12.8,0c0.5,0,0.7-0.2,0.7-0.8c0-0.7,0-1.4,0-2.2c0-0.5,0.1-0.6,0.6-0.6
	c0.7,0,1.4,0,2.1,0s0.9-0.2,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.2-0.8-0.8-0.8c-0.7,0-1.4,0-2.1,0c-0.5,0-0.6-0.1-0.6-0.6
	c0-0.7,0-1.4,0-2.1c0-0.6-0.2-0.8-0.8-0.8c-1.3,0-2.6,0-3.9,0c-2.1,0-4.2,0-6.3,0c-0.5,0-0.6-0.1-0.6-0.6c0-0.7,0-1.3,0-2
	c0-0.6,0.1-0.7,0.7-0.7C12.2,9.7,14.4,9.7,16.5,9.7z"/>
            <path fill={innerColor} d="M16.5,9.7c-2.2,0-4.3,0-6.5,0c-0.6,0-0.7,0.1-0.7,0.7c0,0.7,0,1.3,0,2c0,0.5,0.1,0.6,0.6,0.6c2.1,0,4.2,0,6.3,0
	c1.3,0,2.6,0,3.9,0c0.6,0,0.8,0.2,0.8,0.8c0,0.7,0,1.4,0,2.1c0,0.5,0.1,0.6,0.6,0.6c0.7,0,1.4,0,2.1,0c0.6,0,0.8,0.2,0.8,0.8
	c0,0.7,0,1.4,0,2.1s-0.2,0.9-0.9,0.9c-0.7,0-1.4,0-2.1,0c-0.5,0-0.6,0.1-0.6,0.6c0,0.7,0,1.4,0,2.2c0,0.6-0.2,0.8-0.7,0.8
	c-4.3,0-8.5,0-12.8,0c-0.5,0-0.7-0.2-0.7-0.7c0-0.7,0-1.5,0-2.2c0-0.5,0.2-0.7,0.8-0.7c4.2,0,8.4,0,12.6,0c0.7,0,0.8-0.1,0.8-0.8
	c0-0.7,0-1.3,0-2c0-0.4-0.1-0.5-0.5-0.5c-0.6,0-1.3,0-1.9,0c-2.8,0-5.5,0-8.3,0c-0.7,0-0.8-0.2-0.8-0.8c0-0.7,0-1.4,0-2.1
	c0-0.5-0.1-0.6-0.6-0.6c-0.7,0-1.4,0-2.2,0c-0.5,0-0.7-0.2-0.7-0.7c0-0.8,0-1.5,0-2.3C5.8,10,6,9.8,6.5,9.8c0.7,0,1.4,0,2.2,0
	c0.5,0,0.6-0.1,0.7-0.6c0-0.7,0-1.4,0-2.1s0.2-0.9,0.9-0.9c3.8,0,7.6,0,11.4,0c0.5,0,1.1,0,1.6,0c0.6,0,0.8,0.2,0.8,0.8
	c0,0.7,0,1.4,0,2.1c0,0.6-0.2,0.8-0.8,0.8C20.9,9.7,18.7,9.7,16.5,9.7L16.5,9.7z"/>
        </svg>

    )
}

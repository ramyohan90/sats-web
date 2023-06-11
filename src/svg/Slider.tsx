import { useSelector } from "react-redux";


export function SliderComponent() {
    const theme = useSelector((state: any) => state['theme']);
    return (
        <svg transform={theme.isDark ? 'scale(-1, 1)' : 'scale(1, -1)'} height={40} width={40} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 40 40" xmlSpace="preserve">
            <path id="XMLID_1_" fill={theme.isDark ? '#f85d1d' : '#FFFFFF'} stroke="#f85d1d" strokeWidth={2} strokeMiterlimit={10} d="M28.1,29.2H11.9c-5.1,0-9.2-4.1-9.2-9.2v0c0-5.1,4.1-9.2,9.2-9.2h16.3c5.1,0,9.2,4.1,9.2,9.2v0
            C37.4,25.1,33.2,29.2,28.1,29.2z"/>
            <circle id="XMLID_2_" fill={theme.isDark ? '#FFFFFF' : '#f85d1d'} stroke="#FFFFFF" strokeMiterlimit={10} cx="12.2" cy="20" r="6.6" />
        </svg>
    )
}
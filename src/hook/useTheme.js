import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";
import { useEffect } from "react";


export const useTheme = () => {
	const theme = useSelector(state => state.theme.theme)
	const dispatch = useDispatch()
	const toogleMoon = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return [theme, toogleMoon]
}
import { IoMoon, IoMoonOutline } from "react-icons/io5"
import styled from "styled-components"
import { useTheme } from "../hook/useTheme";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const ThemeSwitcher = () => {
	const [theme, toogleMoon] = useTheme()

	return (
		< ModeSwitcher onClick={toogleMoon} >
			{theme === 'light' ? (
				<IoMoonOutline size="16px" />
			) : (
				<IoMoon size="16px" />
			)
			}{' '}
			<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
		</ModeSwitcher >
	)
}
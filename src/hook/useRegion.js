import { useDispatch, useSelector } from "react-redux"
import { setRegion } from "../redux/slices/controlseSlice"


export const useRegion = () => {
	const dispatch = useDispatch()
	const region = useSelector(state => state.controlse.region)
	const handleSelect = (reg) => {
		dispatch(setRegion(reg?.value || ''))
	}

	return [region, handleSelect]
}
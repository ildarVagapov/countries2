import { useDispatch } from "react-redux"
import { clearControle } from "../redux/slices/controlseSlice"


export const useClear = () => {
	const dispatch = useDispatch()
	const handleClearControle = () => {
		dispatch(clearControle())
	}
	return handleClearControle
}
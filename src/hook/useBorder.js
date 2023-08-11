import { useDispatch, useSelector } from "react-redux"
import { loadingNeighborsByBorder } from "../redux/slices/detailsSlice"
import { useEffect } from "react"


export const useBorder = (borders) => {
	const dispatch = useDispatch()

	useEffect(() => {
		if (borders.length) {
			dispatch(loadingNeighborsByBorder(borders))
		}
	}, [borders, dispatch])

	const bordersData = useSelector(state => state.details.neighbors)

	return bordersData
}
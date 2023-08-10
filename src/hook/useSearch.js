import debounce from "lodash.debounce"
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { setSearch } from "../redux/slices/controlseSlice"


export const useSearch = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearch(str))
		}, 500)
		, [])

	const onChangeInput = (str) => {
		setValue(str)
		updateSearchValue(str)
	}

	return [value, onChangeInput]
}
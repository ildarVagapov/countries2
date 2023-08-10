import { useDispatch, useSelector } from "react-redux";
import { clearDetails, loadCountriesByName } from "../redux/slices/detailsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const useDetails = (name) => {
	const navigate = useNavigate();
	const { currentCountry, status, error } = useSelector(state => state.details);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadCountriesByName(name))

		return () => {
			dispatch(clearDetails())
		}
	}, [name, dispatch])

	return [{ currentCountry, status, error }, navigate]
}
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCountriesInfo, selectVisibalCountry } from "../redux/selectors/countriesSelector";
import { loadCountries } from "../redux/slices/countriesSlice";
import { useEffect } from "react";


export const useCountries = () => {
	const { search, region } = useSelector(state => state.controlse)
	const countries = useSelector(state => selectVisibalCountry(state, { search, region }));
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const { status, qty, error } = useSelector(selectCountriesInfo)

	useEffect(() => {
		if (!countries.length) {
			dispatch(loadCountries())
		}
	}, [countries.length, dispatch])

	return [countries, navigate, { status, error }]
}
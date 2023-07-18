export const selectCountriesInfo = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length
})

export const selectAllCountries = (state) => state.countries.list
export const selectVisibalCountry = (state, { search = '' }) => {
	return state.countries.list.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
}
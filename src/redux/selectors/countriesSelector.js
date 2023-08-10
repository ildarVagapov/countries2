export const selectCountriesInfo = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length
})

export const selectVisibalCountry = (state, { search = '', region = '' }) => {
	return state.countries.list.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) && c.name.includes(region))
}
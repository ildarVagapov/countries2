import { useNavigate } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCountries } from '../redux/slices/countriesSlice';
import { selectCountriesInfo, selectVisibalCountry } from '../redux/selectors/countriesSelector';

export const HomePage = () => {
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

	return (
		<>
			<Controls />
			{error && <h4>ошибка</h4>}
			{status === 'loading' && <h4>Loading</h4>}
			{status === 'received' &&
				<List >
					{
						countries.map((c) => {
							const countryInfo = {
								img: c.flags.png,
								name: c.name,
								info: [
									{
										title: 'Population',
										description: c.population.toLocaleString(),
									},
									{
										title: 'Region',
										description: c.region,
									},
									{
										title: 'Capital',
										description: c.capital,
									},
								],
							};
							return (
								<Card
									key={c.name}
									onClick={() => navigate(`/country/${c.name}`)}
									{...countryInfo}
								/>
							);
						})
					}
				</List >
			}
		</>
	);
};

import { useNavigate } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCountries, selectCountriesInfo } from '../redux/selectors/countriesSelector';
import { useEffect } from 'react';
import { loadCountries } from '../redux/reducers/countriesReducer';

export const HomePage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const countries = useSelector(selectAllCountries);
	const { status, qty, error } = useSelector(selectCountriesInfo)

	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries())
		}
	}, [qty, dispatch])

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

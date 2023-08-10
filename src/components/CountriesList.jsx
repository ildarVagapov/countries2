import { useCountries } from "../hook/useCountries";
import { Card } from "./Card";
import { List } from "./List";


export const CountriesList = () => {
	const [countries, navigate, { status, error }] = useCountries()

	return (
		<>
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
			}</>
	)
}
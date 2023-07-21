import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails } from '../redux/selectors/detailsSelector';
import { clearDetails, loadCountriesByName } from '../redux/reducers/detailsReducer';
import { useEffect } from 'react';

export const Details = () => {
	const { currentCountry, status, error } = useSelector(selectDetails);
	const { name } = useParams();
	const dispatch = useDispatch()
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(loadCountriesByName(name))

		return () => {
			dispatch(clearDetails())
		}
	}, [name, dispatch])


	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			{status === 'loading' && <h4>Loading</h4>}
			{status === 'rejected' && <h4>ошибка</h4>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</div>
	);
};

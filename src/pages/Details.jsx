import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { DetailsList } from '../components/DetailsList';
import { useNavigate } from 'react-router-dom';

export const Details = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			<DetailsList />
		</div>
	);
};

import { useParams } from "react-router-dom";
import { useDetails } from "../hook/useDetails";
import { Info } from "./Info"

export const DetailsList = () => {
	const { name } = useParams();
	const [{ currentCountry, status, error }, navigate] = useDetails(name)

	return (
		<>
			{status === 'loading' && <h4>Loading</h4>}
			{error && <h4>{error}</h4>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	)
}
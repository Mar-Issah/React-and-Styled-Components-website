import { StyledCard } from "../components/styles/Card.Styles";

export default function Card({ item: { id, title, body, image } }) {
	return (
		// if the modolus of the index is testing 0 which is an even then reverse the flex so if the condition is true the row-reverse will take effect

		//&& means then, used in tenery operator where there is no else
		<StyledCard layout={id % 2 === 0 && "row-reverse"}>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>

			<div>
				<img src={`./images/${image}`} alt="" />
			</div>
		</StyledCard>
	);
}

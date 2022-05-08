import React from "react";
import "./tours.css";
const url = "https://course-api.com/react-tours-project";
const Tours = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [isError, setIsError] = React.useState(false);
	const [tours, setTours] = React.useState([]);
	const [show, setShow] = React.useState(new Map());
	// const [readMore, setReadMore] = React.useState(true);

	React.useEffect(() => {
		fetch(url)
			.then((res) => {
				if (res.status >= 200 && res.status <= 299) {
					return res.json();
				}
				setIsLoading(false);
				setIsError(true);
				throw new Error(res.statusText);
			})
			.then((tours) => {
				setIsLoading(false);
				setIsError(false);
				setTours(tours);
				// console.log(tours);
				let temp = new Map();
				tours.forEach((tour) => {
					temp.set(tour.id, false);
				});
				setShow(temp);
				// console.log(temp);
			})
			.catch((e) => {
				setIsLoading(false);
				setIsError(true);
				console.log(e.message);
			});
		return () => {};
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (isError) {
		return <h1>Error...</h1>;
	}
	return (
		<section>
			<div className="heading">
				<h1>Our Tours</h1>
			</div>
			{tours.map((tour) => {
				const { id, name, info, image, price } = tour;
				return (
					<div className="tour" key={id}>
						<img src={image} alt="destination" />
						<div className="info">
							<div className="title">
								<h2>{name}</h2>
								<p className="price">${price}</p>
							</div>
							<p>
								{info.slice(0, 200)}
								{!show.get(id) && <span>...</span>}
								{show.get(id) && (
									<span>{info.slice(200, -1)}</span>
								)}
								<button
									className="read"
									onClick={() => {
										setShow(
											new Map([
												...show,
												[id, !show.get(id)],
											])
										);
										// console.log(show.get(id));
									}}
								>
									{!show.get(id) && "Read More"}
									{show.get(id) && "Show Less"}
								</button>
							</p>
							<div className="center">
								<button
									className="not-interested"
									onClick={() => {
										setTours(
											tours.filter(
												(tour) => !(id === tour.id)
											)
										);
										show.delete(id);
									}}
								>
									Not Interested
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Tours;

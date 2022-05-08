import React from "react";
import "./birthday.css";
import { birthdayList } from "./birthdays";

const BirthdayReminder = () => {
	return (
		<article className="mainBG">
			<section className="card">
				<h3>5 birthdays today</h3>
				{birthdayList.map((bday) => {
					return (
						<div className="list">
							<h4>{bday.name}</h4>
							<p>{`${bday.age} years`}</p>
						</div>
					);
				})}
			</section>
		</article>
	);
};

export default BirthdayReminder;

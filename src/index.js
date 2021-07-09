"use strict";

import "./assets/img/github.png";
import "./assets/img/linkedin.png";
import "./assets/img/wine.png";
import "./css/index.scss";

// equation: 17 grams of sugar (const) x Desired volume (liters) x desired % of alcohol = x

document.querySelector(".calc").addEventListener("click", function () {
	const desiredAlcohol = Number(
		document.querySelector(".desired-alcohol").value
	);

	// console.log(desiredAlcohol);

	const desiredVolume = Number(document.querySelector(".volume").value);

	// console.log(desiredVolume)

	const outcome = 17 * desiredVolume * desiredAlcohol;

	// 1kg of dissolved sugar has 600ml of volume
	const outcomeText = `You need to add ${outcome} grams of sugar. This amount of sugar will add ${Math.trunc(
		0.6 * outcome
	)} ml to the total volume.`;

	document.querySelector(".sugar-to-add").textContent = outcomeText;

	// changing styles TEST

	// document.querySelector('#brewingCalc').style.borderColor = 'black';
});

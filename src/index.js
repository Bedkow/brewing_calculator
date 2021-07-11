"use strict";

import "./assets/img/github.png";
import "./assets/img/linkedin.png";
import "./assets/img/wine.png";
import "./css/index.scss";

// equation: 17 grams of sugar (const) x Desired volume (liters) x desired % of alcohol = x

const vm = Vue.createApp({
	data() {
		return {
			alcoholContent: "",
			finalVolume: "",
		};
	},
	methods: {
		sugarToAdd() {
			return this.alcoholContent * this.finalVolume * 17;
		},
	},
}).mount("#app");

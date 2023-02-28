export default{
    template:
    `
    <style>
    * {
	box-sizing: border-box;
}

html,
body {
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100%;
}

body {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #81c3d7;
}

.support {
	position: absolute;
	right: 10px;
	bottom: 10px;
	padding: 10px;
	display: flex;
	a {
		margin: 0 10px;
		color: #16425b;
		font-size: 1.8rem;
		backface-visibility: hidden;
		transition: all 150ms ease;
		&:hover {
			transform: scale(1.1);
		}
	}
}
</style>
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 135.46666 135.46667">
	<defs>
		<g id="morphs">
			<g id="morph-original">
				<path d="m 27.757534,89.340963 h 7.98198 c 4.64028,0.009 6.96042,2.0548 6.96042,6.13606 v 4.180464 c 0,1.927263 -0.77338,3.216833 -2.32014,3.868703 1.54676,0.65187 2.32014,1.94143 2.32014,3.86869 v 4.19463 c 0,4.07182 -2.41826,6.11245 -7.25477,6.12189 h -7.68763 z m 6.82406,5.04973 v 6.338957 h 0.0498 c 0.38946,0 0.49816,6e-4 0.68284,-0.0561 0.6652,-0.23618 0.56165,-0.770553 0.56165,-1.545247 v -3.12212 c 0,-1.077 -0.0595,-1.6064 -0.63849,-1.6155 -0.19537,-0.003 -0.65579,0 -0.65579,0 z m 0,11.402857 v 6.33896 c 0,0 0.492217,-0.008 0.72194,-0.008 0.704873,0 0.57234,-0.52593 0.57234,-1.59348 v -3.13629 c 0,-0.77469 0.0954,-1.34556 -0.56164,-1.5606 -0.19623,-0.0661 -0.23478,-0.0408 -0.68285,-0.0407 z" />
				<path d="m 59.401464,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59693,7.0072 -5.40485,0 -7.57812,-3.04129 -7.57812,-7.0072 V 96.334426 c 0,-3.95675 2.17327,-6.993463 7.57812,-6.993463 5.4174,0 7.59693,3.132363 7.59693,6.993463 z m -6.79184,-13.392207 c 0,-1.02582 -0.0694,-1.51125 -0.78628,-1.55247 h -0.0376 c -0.77042,0 -0.76746,0.51749 -0.76746,1.55247 v 12.398437 c 0,1.03499 -0.0132,1.55248 0.78627,1.55248 0.77899,0 0.80509,-0.51749 0.80509,-1.55248 z" />
				<path d="m 76.091984,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59692,7.0072 -5.40486,0 -7.57812,-3.04129 -7.57812,-7.0072 V 96.334426 c 0,-3.95675 2.17326,-6.993463 7.57812,-6.993463 5.41739,0 7.59692,3.132363 7.59692,6.993463 z m -6.79184,-13.392207 c 0,-1.02582 -0.0694,-1.51125 -0.78627,-1.55247 h -0.0376 c -0.77043,0 -0.76747,0.51749 -0.76747,1.55247 v 12.398437 c 0,1.03499 -0.0132,1.55248 0.78628,1.55248 0.77898,0 0.80508,-0.51749 0.80508,-1.55248 z" />
				<path d="m 77.800634,95.276093 c 0,-3.95675 2.55028,-5.93513 7.65084,-5.93513 5.1124,0 7.66859,1.97838 7.66859,5.93513 v 3.9018 h -7.0068 v -2.36273 c 0,-1.02582 0.12314,-1.26943 -0.58029,-1.28008 h -0.0355 c -0.48143,0.0115 -0.45821,0.2451 -0.45821,1.28008 v 1.62207 c 0,1.117424 0.18736,1.290104 3.21693,2.975387 3.24258,1.78604 4.86388,3.92928 4.86388,6.42973 v 3.92023 c 0,3.96591 -2.55028,5.94887 -7.65084,5.94887 -5.1124,-0.009 -7.66859,-1.99212 -7.66859,-5.94887 v -3.9018 h 7.052 v 2.36273 c 0,1.03498 -0.14519,1.40494 0.61659,1.40494 0.66798,0 0.54966,-0.36996 0.54966,-1.40494 v -1.56922 c 0,-1.21817 -0.32481,-1.61303 -3.35438,-3.29832 -3.24258,-1.78603 -4.86387,-3.96133 -4.86387,-6.525907 z" />
				<path d="m 107.70914,89.340963 v 6.73593 H 104.6121 V 117.71145 H 97.614454 V 96.076893 h -3.08042 v -6.73593 z" />
			</g>
			<g id="morph-stretched">
				<path d="m 27.757535,71.349301 h 7.98198 c 4.64028,0.009 6.96042,2.0548 6.96042,6.13606 v 13.176297 c 0,1.927263 -0.77338,3.216833 -2.32014,3.868703 1.54676,0.65187 2.32014,1.94143 2.32014,3.86869 v 13.190459 c 0,4.07182 -2.41826,6.11245 -7.25477,6.12189 h -7.68763 z m 4.17823,3.991397 v 16.393123 h 0.0498 c 0.38946,0 3.8443,-0.0561 4.91617,-0.0561 0.6652,-0.23618 1.61998,-0.770553 1.61998,-1.545247 V 76.956188 c 0,-1.077 -1.11783,-1.606609 -1.69682,-1.6155 -0.9907,-0.01521 -4.88912,0 -4.88912,0 z m 0,21.457023 v 16.393129 c 0,0 4.72554,-0.008 4.95527,-0.008 0.70487,0 1.63067,-0.52593 1.63067,-1.59348 V 98.398911 c 0,-0.77469 -0.92864,-1.5606 -1.61997,-1.5606 -0.70553,0 -4.46811,-0.0408 -4.91618,-0.0407 z" />
				<path d="m 59.401465,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59693,7.0072 -5.40485,0 -7.57812,-3.04129 -7.57812,-7.0072 V 78.342764 c 0,-3.95675 2.17327,-6.993463 7.57812,-6.993463 5.4174,0 7.59693,3.132363 7.59693,6.993463 z m -4.14601,-31.383869 c 0,-1.02582 0.53893,-4.198303 -3.43211,-4.198303 -3.94108,0 -3.37279,3.250132 -3.45089,4.198303 v 30.390099 c 0,1.03499 -0.28904,4.19832 3.4321,4.19832 3.83077,0 3.45092,-3.16333 3.45092,-4.19832 z" />
				<path d="m 76.091985,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59692,7.0072 -5.40486,0 -7.57812,-3.04129 -7.57812,-7.0072 V 78.342764 c 0,-3.95675 2.17326,-6.993463 7.57812,-6.993463 5.41739,0 7.59692,3.132363 7.59692,6.993463 z m -4.14601,-31.383869 c 0,-1.02582 0.14737,-4.198303 -3.4321,-4.198303 -3.62718,0 -3.45051,3.739427 -3.4509,4.198303 v 30.390099 c 0,1.03499 -0.32453,4.19832 3.43211,4.19832 3.78345,0 3.45091,-3.16333 3.45091,-4.19832 z" />
				<path d="m 77.800635,77.284431 c 0,-3.95675 2.55028,-5.93513 7.65084,-5.93513 5.1124,0 7.66859,1.97838 7.66859,5.93513 v 10.2518 h -4.36097 v -8.71273 c 0,-1.02582 0.29055,-3.872671 -3.22612,-3.925913 h -0.0355 c -3.49264,0 -3.10404,2.890933 -3.10404,3.925913 v 7.97207 c 0,1.518901 2.83319,2.482263 5.86276,4.167546 3.24258,1.78604 4.86388,3.266287 4.86388,5.766737 v 15.032726 c 0,3.96591 -2.55028,5.94887 -7.65084,5.94887 -5.1124,-0.009 -7.66859,-1.99212 -7.66859,-5.94887 V 96.748284 h 4.40617 v 13.475226 c 0,1.03498 -0.37661,4.05078 3.26242,4.05078 3.47832,0 3.19549,-3.0158 3.19549,-4.05078 V 97.541794 c 0,-1.937482 -3.62304,-3.325441 -6.65261,-5.010731 -3.24258,-1.78603 -4.21147,-2.778085 -4.21147,-5.342662 z" />
				<path d="m 107.70913,71.349301 v 4.090097 h -4.15537 V 117.71145 H 98.672785 V 75.439398 h -4.13875 v -4.090097 z" />
			</g>
			<g id="morph-small">
				<path d="m 27.757534,93.574339 h 7.98198 c 4.64028,0.009 6.96042,2.0548 6.96042,6.13606 v 2.063801 c 0,1.92726 -0.77338,3.21683 -2.32014,3.8687 1.54676,0.65187 2.32014,1.94143 2.32014,3.86869 v 2.07797 c 0,4.07182 -2.41826,6.11245 -7.25477,6.12189 h -7.68763 z m 6.82406,5.04973 v 4.222291 h 0.0498 c 0.38946,0 0.49816,6e-4 0.68284,-0.0561 0.6652,-0.23618 0.56165,-0.77055 0.56165,-1.54525 v -1.00545 c 0,-1.077001 -0.0595,-1.606401 -0.63849,-1.615501 -0.19537,-0.003 -0.65579,0 -0.65579,0 z m 0,9.286191 v 4.2223 c 0,0 0.492217,-0.008 0.72194,-0.008 0.704873,0 0.57234,-0.52593 0.57234,-1.59348 v -1.01963 c 0,-0.77469 0.0954,-1.34556 -0.56164,-1.5606 -0.19623,-0.0661 -0.23478,-0.0408 -0.68285,-0.0407 z" />
				<path d="m 59.401464,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59693,7.0072 -5.40485,0 -7.57812,-3.04129 -7.57812,-7.0072 v -10.13649 c 0,-3.95675 2.17327,-6.993463 7.57812,-6.993463 5.4174,0 7.59693,3.132363 7.59693,6.993463 z m -6.79184,-9.15887 c -3e-6,-1.02582 -0.0694,-1.51125 -0.78628,-1.552473 h -0.0376 c -0.77042,0 -0.76746,0.517493 -0.76746,1.552473 v 8.1651 c 0,1.03499 -0.0132,1.55248 0.78627,1.55248 0.77899,0 0.805093,-0.51749 0.80509,-1.55248 z" />
				<path d="m 76.091984,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59692,7.0072 -5.40486,0 -7.57812,-3.04129 -7.57812,-7.0072 v -10.13649 c 0,-3.95675 2.17326,-6.993463 7.57812,-6.993463 5.41739,0 7.59692,3.132363 7.59692,6.993463 z m -6.79184,-9.15887 c -3e-6,-1.02582 -0.0694,-1.51125 -0.78627,-1.552473 h -0.0376 c -0.77043,0 -0.76747,0.517493 -0.76747,1.552473 v 8.1651 c 0,1.03499 -0.0132,1.55248 0.78628,1.55248 0.77898,0 0.805083,-0.51749 0.80508,-1.55248 z" />
				<path d="m 77.800634,99.509427 c -2.8e-5,-3.95675 2.55028,-5.93513 7.65084,-5.93513 5.1124,0 7.66859,1.97838 7.66859,5.93513 v 1.785133 h -7.0068 v -0.24606 c 0,-1.02582 0.12314,-1.269433 -0.58029,-1.280083 h -0.0355 c -0.48143,0.0115 -0.45821,0.245103 -0.45821,1.280083 v 0.0346 c 0,1.11742 0.18736,0.76093 3.21693,2.44622 3.24258,1.78604 4.86388,2.87094 4.86388,5.37139 v 2.8619 c 0,3.96591 -2.55028,5.94887 -7.65084,5.94887 -5.1124,-0.009 -7.66859,-1.99212 -7.66859,-5.94887 v -2.84347 h 7.052 v 1.3044 c 0,1.03498 -0.14519,1.40494 0.61659,1.40494 0.66798,0 0.54966,-0.36996 0.54966,-1.40494 v -0.24631 c 0,-1.21817 -0.322385,-0.75404 -3.35438,-2.50456 -3.205959,-1.85096 -4.863852,-3.96133 -4.86387,-6.52591 z" />
				<path d="m 107.70914,93.574297 v 6.735933 h -3.09704 v 17.40122 h -6.997646 v -17.40122 h -3.08042 v -6.735933 z" />
			</g>
		</g>

		<filter id="shadow" width="200%">
			<feDropShadow dx="10" dy="0" stdDeviation="0" flood-color="#16425b" flood-opacity="1" />
		</filter>
	</defs>

	<g class="container">
		<g class="boost boost-1" filter="url(#shadow)" style="transform: translateX(4px); fill: #3a7ca5; stroke: #2d2e38; stroke-width: 0.5px">
			<path d="m 27.757534,89.340963 h 7.98198 c 4.64028,0.009 6.96042,2.0548 6.96042,6.13606 v 4.180464 c 0,1.927263 -0.77338,3.216833 -2.32014,3.868703 1.54676,0.65187 2.32014,1.94143 2.32014,3.86869 v 4.19463 c 0,4.07182 -2.41826,6.11245 -7.25477,6.12189 h -7.68763 z m 6.82406,5.04973 v 6.338957 h 0.0498 c 0.38946,0 0.49816,6e-4 0.68284,-0.0561 0.6652,-0.23618 0.56165,-0.770553 0.56165,-1.545247 v -3.12212 c 0,-1.077 -0.0595,-1.6064 -0.63849,-1.6155 -0.19537,-0.003 -0.65579,0 -0.65579,0 z m 0,11.402857 v 6.33896 c 0,0 0.492217,-0.008 0.72194,-0.008 0.704873,0 0.57234,-0.52593 0.57234,-1.59348 v -3.13629 c 0,-0.77469 0.0954,-1.34556 -0.56164,-1.5606 -0.19623,-0.0661 -0.23478,-0.0408 -0.68285,-0.0407 z" />
			<path d="m 59.401464,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59693,7.0072 -5.40485,0 -7.57812,-3.04129 -7.57812,-7.0072 V 96.334426 c 0,-3.95675 2.17327,-6.993463 7.57812,-6.993463 5.4174,0 7.59693,3.132363 7.59693,6.993463 z m -6.79184,-13.392207 c 0,-1.02582 -0.0694,-1.51125 -0.78628,-1.55247 h -0.0376 c -0.77042,0 -0.76746,0.51749 -0.76746,1.55247 v 12.398437 c 0,1.03499 -0.0132,1.55248 0.78627,1.55248 0.77899,0 0.80509,-0.51749 0.80509,-1.55248 z" />
			<path d="m 76.091984,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59692,7.0072 -5.40486,0 -7.57812,-3.04129 -7.57812,-7.0072 V 96.334426 c 0,-3.95675 2.17326,-6.993463 7.57812,-6.993463 5.41739,0 7.59692,3.132363 7.59692,6.993463 z m -6.79184,-13.392207 c 0,-1.02582 -0.0694,-1.51125 -0.78627,-1.55247 h -0.0376 c -0.77043,0 -0.76747,0.51749 -0.76747,1.55247 v 12.398437 c 0,1.03499 -0.0132,1.55248 0.78628,1.55248 0.77898,0 0.80508,-0.51749 0.80508,-1.55248 z" />
			<path d="m 77.800634,95.276093 c 0,-3.95675 2.55028,-5.93513 7.65084,-5.93513 5.1124,0 7.66859,1.97838 7.66859,5.93513 v 3.9018 h -7.0068 v -2.36273 c 0,-1.02582 0.12314,-1.26943 -0.58029,-1.28008 h -0.0355 c -0.48143,0.0115 -0.45821,0.2451 -0.45821,1.28008 v 1.62207 c 0,1.117424 0.18736,1.290104 3.21693,2.975387 3.24258,1.78604 4.86388,3.92928 4.86388,6.42973 v 3.92023 c 0,3.96591 -2.55028,5.94887 -7.65084,5.94887 -5.1124,-0.009 -7.66859,-1.99212 -7.66859,-5.94887 v -3.9018 h 7.052 v 2.36273 c 0,1.03498 -0.14519,1.40494 0.61659,1.40494 0.66798,0 0.54966,-0.36996 0.54966,-1.40494 v -1.56922 c 0,-1.21817 -0.32481,-1.61303 -3.35438,-3.29832 -3.24258,-1.78603 -4.86387,-3.96133 -4.86387,-6.525907 z" />
			<path d="m 107.70914,89.340963 v 6.73593 H 104.6121 V 117.71145 H 97.614454 V 96.076893 h -3.08042 v -6.73593 z" />
		</g>

		<g class="boost boost-2" style="fill: #e4e7e1; stroke: #2d2e38; stroke-width: 0.5px">
			<path d="m 27.757534,89.340963 h 7.98198 c 4.64028,0.009 6.96042,2.0548 6.96042,6.13606 v 4.180464 c 0,1.927263 -0.77338,3.216833 -2.32014,3.868703 1.54676,0.65187 2.32014,1.94143 2.32014,3.86869 v 4.19463 c 0,4.07182 -2.41826,6.11245 -7.25477,6.12189 h -7.68763 z m 6.82406,5.04973 v 6.338957 h 0.0498 c 0.38946,0 0.49816,6e-4 0.68284,-0.0561 0.6652,-0.23618 0.56165,-0.770553 0.56165,-1.545247 v -3.12212 c 0,-1.077 -0.0595,-1.6064 -0.63849,-1.6155 -0.19537,-0.003 -0.65579,0 -0.65579,0 z m 0,11.402857 v 6.33896 c 0,0 0.492217,-0.008 0.72194,-0.008 0.704873,0 0.57234,-0.52593 0.57234,-1.59348 v -3.13629 c 0,-0.77469 0.0954,-1.34556 -0.56164,-1.5606 -0.19623,-0.0661 -0.23478,-0.0408 -0.68285,-0.0407 z" />
			<path d="m 59.401464,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59693,7.0072 -5.40485,0 -7.57812,-3.04129 -7.57812,-7.0072 V 96.334426 c 0,-3.95675 2.17327,-6.993463 7.57812,-6.993463 5.4174,0 7.59693,3.132363 7.59693,6.993463 z m -6.79184,-13.392207 c 0,-1.02582 -0.0694,-1.51125 -0.78628,-1.55247 h -0.0376 c -0.77042,0 -0.76746,0.51749 -0.76746,1.55247 v 12.398437 c 0,1.03499 -0.0132,1.55248 0.78627,1.55248 0.77899,0 0.80509,-0.51749 0.80509,-1.55248 z" />
			<path d="m 76.091984,110.70425 c 0,3.95675 -2.17953,6.99804 -7.59692,7.0072 -5.40486,0 -7.57812,-3.04129 -7.57812,-7.0072 V 96.334426 c 0,-3.95675 2.17326,-6.993463 7.57812,-6.993463 5.41739,0 7.59692,3.132363 7.59692,6.993463 z m -6.79184,-13.392207 c 0,-1.02582 -0.0694,-1.51125 -0.78627,-1.55247 h -0.0376 c -0.77043,0 -0.76747,0.51749 -0.76747,1.55247 v 12.398437 c 0,1.03499 -0.0132,1.55248 0.78628,1.55248 0.77898,0 0.80508,-0.51749 0.80508,-1.55248 z" />
			<path d="m 77.800634,95.276093 c 0,-3.95675 2.55028,-5.93513 7.65084,-5.93513 5.1124,0 7.66859,1.97838 7.66859,5.93513 v 3.9018 h -7.0068 v -2.36273 c 0,-1.02582 0.12314,-1.26943 -0.58029,-1.28008 h -0.0355 c -0.48143,0.0115 -0.45821,0.2451 -0.45821,1.28008 v 1.62207 c 0,1.117424 0.18736,1.290104 3.21693,2.975387 3.24258,1.78604 4.86388,3.92928 4.86388,6.42973 v 3.92023 c 0,3.96591 -2.55028,5.94887 -7.65084,5.94887 -5.1124,-0.009 -7.66859,-1.99212 -7.66859,-5.94887 v -3.9018 h 7.052 v 2.36273 c 0,1.03498 -0.14519,1.40494 0.61659,1.40494 0.66798,0 0.54966,-0.36996 0.54966,-1.40494 v -1.56922 c 0,-1.21817 -0.32481,-1.61303 -3.35438,-3.29832 -3.24258,-1.78603 -4.86387,-3.96133 -4.86387,-6.525907 z" />
			<path d="m 107.70914,89.340963 v 6.73593 H 104.6121 V 117.71145 H 97.614454 V 96.076893 h -3.08042 v -6.73593 z" />
		</g>
	</g>
</svg>

<div class="support">
	<a href="https://twitter.com/DevLoop01" target="_blank"><i class="fab fa-twitter-square"></i></a>
	<a href="https://dribbble.com/devloop01" target="_blank"><i class="fab fa-dribbble"></i></a>
</div>

<script>
console.clear();

const { gsap } = window;

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(CustomEase);

gsap.ticker.fps(24);

const morphs = {
	original: gsap.utils.toArray("#morph-original path"),
	stretched: gsap.utils.toArray("#morph-stretched path"),
	small: gsap.utils.toArray("#morph-small path")
};

const TL_DEFAULTS = {
	delay: 1,
	defaults: {
		duration: 1,
		stagger: {
			each: 0.038,
			from: "center"
		}
	},
	repeat: -1,
	repeatDelay: 1
};

const CUSTOM_EASE = {
	jump: CustomEase.create(
		"jump",
		"M0,0 C0.084,0.61 0.14,0.788 0.236,0.878 0.337,0.972 0.374,1 1,1 "
	),
	drop: CustomEase.create(
		"drop",
		"M0,0,C0.25,0,0.258,0.024,0.314,0.07,0.399,0.14,0.466,0.292,0.498,0.502,0.532,0.73,0.552,0.992,0.604,0.998,0.613,0.999,0.698,1,1,1"
	)
};

function animate(el) {
	const tl = gsap.timeline(TL_DEFAULTS);

	tl.addLabel("start", 0).addLabel("upcoming", 0.8).addLabel("end", 1.35);
	tl.timeScale(1.15);

	tl
		.to(
			el,
			{
				duration: 0.8,
				morphSVG: (i) => morphs.small[i],
				stagger: null,
				ease: "none"
			},
			"start"
		)
		.to(
			el,
			{
				duration: 0.8,
				y: -60,
				ease: CUSTOM_EASE.jump,
				morphSVG: (i) => morphs.stretched[i]
			},
			"upcoming"
		)
		.to(
			el,
			{
				y: 0,
				ease: CUSTOM_EASE.drop
			},
			"end"
		)
		.to(
			el,
			{
				duration: 0.5,
				morphSVG: (i) => morphs.small[i],
				ease: CUSTOM_EASE.drop
			},
			"end+=0.2"
		)
		.to(
			el,
			{
				duration: 0.7,
				morphSVG: (i) => morphs.original[i],
				ease: "elastic.out(1, 1)"
			},
			"end+=.6"
		);
}

animate(".boost-1 path");
animate(".boost-2 path");
</script>
`
}
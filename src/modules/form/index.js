"use strict";

import CheckboxController from "./controllers/checkbox";
import NumberController from "./controllers/number";
import DateController from "./controllers/date";

export default angular.module("modules.form", [])
	.controller("CheckboxController", CheckboxController)
	.controller("NumberController", NumberController)
	.controller("DateController", DateController)
	.name;
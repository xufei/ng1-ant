"use strict";

import CheckboxController from "./controllers/checkbox";
import DateController from "./controllers/date";

export default angular.module("modules.form", [])
	.controller("CheckboxController", CheckboxController)
	.controller("DateController", DateController)
	.name;
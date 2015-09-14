"use strict";

import CheckboxController from "./controllers/checkbox";

export default angular.module("modules.form", [])
	.controller("CheckboxController", CheckboxController)
	.name;
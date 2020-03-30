
Handlebars.registerHelper('fullName', function (person) {

	//person = Handlebars.Utils.escapeExpression(person);

	var result = person.firstName + " " + person.lastName;

	return new Handlebars.SafeString(result);

});

Handlebars.registerHelper("fullDate", function () {

	var date = new Date(),
		day = date.getDate(),
		month,
		year = date.getFullYear();

	if (date.getMonth() < 10) {

		month = "0" + (date.getMonth() + 1);

	} else {

		month = date.getMonth() + 1;

	}

	var result = day + "." + month + "." + year;

	return new Handlebars.SafeString(result);

});

//--------------------------------------------------------
//-- Properties - Unit tests
//--------------------------------------------------------
import { given, when, then } from './properties.gwt';


describe(`Validate that properties works`, () => {

	beforeEach(() => {
		given.noProperty();
		given.oasa();
	});


	//-- Does validate
	test(`Ensure binary is valid`, () => {
		given.property('binary');
		when.propertyFetched();
		then.propertyValueShouldBe('sft');
	});

	test(`Ensure name is valid`, () => {
		given.property('name');
		when.propertyFetched();
		then.propertyValueShouldBe('Okta Advanced Server Access');
	});

	test(`Ensure enrollCommand is valid`, () => {
		given.property('enrollCommand');
		when.propertyFetched();
		then.propertyValueShouldBe('sft enroll');
	});

});

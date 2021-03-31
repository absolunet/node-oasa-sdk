//--------------------------------------------------------
//-- Properties - Unit tests
//--------------------------------------------------------
import * as gwt from '../../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let oasa;
let propertyName;
let propertyValue;


//-- Given - Reset
given.noProperty = () => {
	propertyName = undefined;
	propertyValue = undefined;
};


//-- Given
given.oasa = () => {
	({ oasa } = given.importedOASA());
};

given.property = (name) => {
	propertyName = name;
};


//-- When
when.propertyFetched = () => {
	propertyValue = oasa[propertyName];
};


//-- Then
then.propertyValueShouldBe = (expected) => {
	expect(propertyValue).toBe(expected);
};


export { given, when, then };

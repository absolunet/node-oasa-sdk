//--------------------------------------------------------
//-- isCLIInstalled - Unit tests
//--------------------------------------------------------
import * as gwt from '../unit.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let oasa;
let response;



//-- Given - Reset
given.noInstallationState = () => {
	response = undefined;
};


//-- Given
given.oasa = () => {
	({ oasa } = given.importedOASA());
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		response = oasa.isCLIInstalled();
	});
};


//-- Then
then.responseToBe = (expected) => {
	expect(response).toBe(expected);
};


export { given, when, then };

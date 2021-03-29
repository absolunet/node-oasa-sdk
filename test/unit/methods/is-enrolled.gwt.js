//--------------------------------------------------------
//-- isEnrolled - Unit tests
//--------------------------------------------------------
import * as gwt from '../unit.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let oasa;
let response;



//-- Given - Reset
given.noLoginState = () => {
	response = undefined;
};


//-- Given
given.oasa = () => {
	({ oasa } = given.importedOASA());
};

given.userHasAccounts = () => {
	given.mockedTerminalProcessRunAndReadReturns('[{},{}]');
};

given.userHasNoAccounts = () => {
	given.mockedTerminalProcessRunAndReadReturns('[]');
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		response = oasa.isEnrolled();
	});
};


//-- Then
then.responseToBe = (expected) => {
	expect(response).toBe(expected);
};


export { given, when, then };

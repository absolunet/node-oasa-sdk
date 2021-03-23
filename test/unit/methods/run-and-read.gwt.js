//--------------------------------------------------------
//-- runAndRead - Unit tests
//--------------------------------------------------------
import * as gwt from '../../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let oasa;
let action;
let response;


//-- Given - Reset
given.noData = () => {
	action   = undefined;
	response = undefined;
};


//-- Given
given.oasa = () => {
	({ oasa } = given.importedOASA());
};

given.actionValue = (value) => {
	action = value;
};

given.validAction = () => {
	given.actionValue('go');
};

given.userIsAuthentifiedAndGetsResponse = () => {
	given.mockedTerminalProcessRunAndReadReturns('lorem');
};

given.userIsNotAuthentifiedAndGetsResponse = () => {
	given.mockedTerminalProcessRunAndReadReturns('Waiting on browser...\nBrowser step completed successfully.\nlorem');
};

given.commandFails = () => {
	given.mockedTerminalProcessRunAndReadThrows();
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		response = oasa.runAndRead(action);
	});
};


//-- Then
then.responseToBeNotEmpty = () => {
	expect(response).toStrictEqual('lorem');
};


export { given, when, then };

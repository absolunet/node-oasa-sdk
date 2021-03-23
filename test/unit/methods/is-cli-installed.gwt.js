//--------------------------------------------------------
//-- isCLIInstalled - Unit tests
//--------------------------------------------------------
import * as gwt from '../../base.gwt';

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

given.cliInstalled = () => {
	given.mockedTerminalProcessRunAndReadReturns('/usr/local/bin/sft');
};

given.cliNotInstalled = () => {
	given.mockedTerminalProcessRunAndReadReturns('');
};

given.commandFails = () => {
	given.mockedTerminalProcessRunAndReadThrows();
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

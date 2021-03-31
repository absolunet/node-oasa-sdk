//--------------------------------------------------------
//-- listAccounts - Unit tests
//--------------------------------------------------------
import * as gwt from '../unit.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let oasa;
let response;



//-- Given - Reset
given.noList = () => {
	response = undefined;
};


//-- Given
given.oasa = () => {
	({ oasa } = given.importedOASA());
};

given.hasAccounts = () => {
	given.mockedTerminalProcessRunAndReadReturns('[{"account":"lorem"},{"account":"ipsum"}]');
};

given.hasNoAccounts = () => {
	given.mockedTerminalProcessRunAndReadReturns('[]');
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		response = oasa.listAccounts();
	});
};


//-- Then
then.responseToBeServerList = () => {
	expect(response).toStrictEqual([{ account: 'lorem' }, { account: 'ipsum' }]);
};

then.responseToBeEmptyServerList = () => {
	expect(response).toStrictEqual([]);
};


export { given, when, then };

//--------------------------------------------------------
//-- listServers - Unit tests
//--------------------------------------------------------
import * as gwt from '../../base.gwt';

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

given.hasServers = () => {
	given.mockedTerminalProcessRunAndReadReturns('[{"hostname":"lorem"},{"hostname":"ipsum"}]');
};

given.hasNoServers = () => {
	given.mockedTerminalProcessRunAndReadReturns('[]');
};

given.commandHasEmptyResponse = () => {
	given.mockedTerminalProcessRunAndReadReturns('');
};

given.commandFails = () => {
	given.mockedTerminalProcessRunAndReadThrows();
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		response = oasa.listServers();
	});
};


//-- Then
then.responseToBeServerList = () => {
	expect(response).toStrictEqual([{ hostname: 'lorem' }, { hostname: 'ipsum' }]);
};

then.responseToBeEmptyServerList = () => {
	expect(response).toStrictEqual([]);
};


export { given, when, then };

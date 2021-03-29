//--------------------------------------------------------
//-- listServers - Unit tests
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

given.hasServers = () => {
	given.mockedTerminalProcessRunAndReadReturns('[{"hostname":"lorem"},{"hostname":"ipsum"}]');
};

given.hasNoServers = () => {
	given.mockedTerminalProcessRunAndReadReturns('[]');
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

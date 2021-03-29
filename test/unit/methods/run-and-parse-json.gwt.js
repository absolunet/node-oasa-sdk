//--------------------------------------------------------
//-- runAndParseJSON - Unit tests
//--------------------------------------------------------
import * as gwt from '../unit.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let oasa;
let action;
let response;


//-- Given - Reset
given.noData = () => {
	action = undefined;
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

given.commandReturnsJSON = () => {
	given.mockedTerminalProcessRunAndReadReturns('{"data":true}');
};

given.commandReturnsNonJSON = () => {
	given.mockedTerminalProcessRunAndReadReturns('lorem');
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		response = oasa.runAndParseJSON(action);
	});
};


//-- Then
then.responseToBeParsedJSON = () => {
	expect(response).toStrictEqual({ data: true });
};


export { given, when, then };

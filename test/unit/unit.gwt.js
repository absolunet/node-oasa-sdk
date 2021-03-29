//--------------------------------------------------------
//-- Common - Unit tests
//--------------------------------------------------------
import * as gwt from '../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


//-- Given - CLI
given.cliInstalled = () => {
	given.mockedTerminalProcessRunAndReadReturns('/usr/local/bin/sft');
};

given.cliNotInstalled = () => {
	given.mockedTerminalProcessRunAndReadReturns('');
};


//-- Given - Command
given.commandHasEmptyResponse = () => {
	given.mockedTerminalProcessRunAndReadReturns('');
};

given.commandFails = () => {
	given.mockedTerminalProcessRunAndReadThrows();
};


export { given, when, then };

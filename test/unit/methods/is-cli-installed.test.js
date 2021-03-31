//--------------------------------------------------------
//-- isCLIInstalled - Unit tests
//--------------------------------------------------------
import { given, when, then } from './is-cli-installed.gwt';


describe(`Validate that isCLIInstalled works`, () => {

	beforeEach(() => {
		given.noException();
		given.noInstallationState();
		given.mockedTerminal();
		given.oasa();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});


	//-- Approves
	test(`Ensure when installed it approves`, () => {
		given.cliInstalled();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBe(true);
	});


	//-- Disapproves
	test(`Ensure when not installed it disapproves`, () => {
		given.cliNotInstalled();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBe(false);
	});

	test(`Ensure when error thrown it disapproves`, () => {
		given.commandFails();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBe(false);
	});

});

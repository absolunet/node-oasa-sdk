//--------------------------------------------------------
//-- isEnrolled - Unit tests
//--------------------------------------------------------
import { given, when, then } from './is-enrolled.gwt';

describe(`Validate that isEnrolled works`, () => {

	beforeEach(() => {
		given.noLoginState();
		given.noException();
		given.mockedTerminal();
		given.oasa();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});


	//-- Approves
	test(`Ensure when has accounts it approves`, () => {
		given.cliInstalled();
		given.userHasAccounts();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBe(true);
	});


	//-- Disapproves
	test(`Ensure when has not accounts it disapproves`, () => {
		given.cliInstalled();
		given.userHasNoAccounts();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBe(false);
	});

	test(`Ensure when has empty response it disapproves`, () => {
		given.cliInstalled();
		given.commandHasEmptyResponse();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBe(false);
	});

	test(`Ensure when command fails it disapproves`, () => {
		given.cliInstalled();
		given.commandFails();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBe(false);
	});


	//-- Fails
	test(`Ensure when CLI not installed it fails`, () => {
		given.cliNotInstalled();
		given.userHasAccounts();
		when.methodCalled();
		then.shouldHaveThrown();
	});

});


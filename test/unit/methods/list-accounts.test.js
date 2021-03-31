//--------------------------------------------------------
//-- listAccounts - Unit tests
//--------------------------------------------------------
import { given, when, then } from './list-accounts.gwt';


describe(`Validate that listAccounts works`, () => {

	beforeEach(() => {
		given.noException();
		given.noList();
		given.mockedTerminal();
		given.oasa();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});


	//-- Works
	test(`Ensure when has accounts it works`, () => {
		given.hasAccounts();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBeServerList();
	});

	test(`Ensure when has no accounts it works`, () => {
		given.hasNoAccounts();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBeEmptyServerList();
	});


	//-- Fails
	test(`Ensure when command has empty response it fails`, () => {
		given.commandHasEmptyResponse();
		when.methodCalled();
		then.shouldHaveThrown();
	});

	test(`Ensure when command fails it fails`, () => {
		given.commandFails();
		when.methodCalled();
		then.shouldHaveThrown();
	});

});

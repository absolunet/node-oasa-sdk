//--------------------------------------------------------
//-- listServers - Unit tests
//--------------------------------------------------------
import { given, when, then } from './list-servers.gwt';


describe(`Validate that listServers works`, () => {

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
	test(`Ensure when has servers it works`, () => {
		given.hasServers();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBeServerList();
	});

	test(`Ensure when has no servers it works`, () => {
		given.hasNoServers();
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

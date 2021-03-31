//--------------------------------------------------------
//-- runAndRead - Unit tests
//--------------------------------------------------------
import { given, when, then } from './run-and-read.gwt';


describe(`Validate that runAndRead works`, () => {

	beforeEach(() => {
		given.noException();
		given.noData();
		given.mockedTerminal();
		given.oasa();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});


	//-- Works
	test(`Ensure when authentified and returns something it works`, () => {
		given.validAction();
		given.userIsAuthentifiedAndGetsResponse();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBeNotEmpty();
	});

	test(`Ensure when not authentified and returns something it works`, () => {
		given.validAction();
		given.userIsNotAuthentifiedAndGetsResponse();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBeNotEmpty();
	});


	//-- Fails
	test(`Ensure when no action it fails`, () => {
		given.userIsAuthentifiedAndGetsResponse();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('is required');
	});

	test(`Ensure when empty action it fails`, () => {
		given.actionValue('');
		given.userIsAuthentifiedAndGetsResponse();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('is not allowed to be empty');
	});

	test(`Ensure when non-string action it fails`, () => {
		given.actionValue(1);
		given.userIsAuthentifiedAndGetsResponse();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('must be a string');
	});

	test(`Ensure when command fails it fails`, () => {
		given.validAction();
		given.commandFails();
		when.methodCalled();
		then.shouldHaveThrown();
	});

});

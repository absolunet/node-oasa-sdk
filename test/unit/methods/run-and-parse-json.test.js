//--------------------------------------------------------
//-- runAndParseJSON - Unit tests
//--------------------------------------------------------
import { given, when, then } from './run-and-parse-json.gwt';


describe(`Validate that runAndParseJSON works`, () => {

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
	test(`Ensure when it returns JSON it works`, () => {
		given.validAction();
		given.commandReturnsJSON();
		when.methodCalled();
		then.shouldNotHaveThrown();
		then.responseToBeParsedJSON();
	});


	//-- Fails
	test(`Ensure when no action it fails`, () => {
		given.commandReturnsJSON();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('is required');
	});

	test(`Ensure when empty action it fails`, () => {
		given.actionValue('');
		given.commandReturnsJSON();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('is not allowed to be empty');
	});

	test(`Ensure when non-string action it fails`, () => {
		given.actionValue(1);
		given.commandReturnsJSON();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('must be a string');
	});

	test(`Ensure when returns non JSON it fails`, () => {
		given.validAction();
		given.commandReturnsNonJSON();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('Unexpected token');
	});

	test(`Ensure when returns nothing it fails`, () => {
		given.validAction();
		given.commandHasEmptyResponse();
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('Unexpected token');
	});

	test(`Ensure when command fails it fails`, () => {
		given.validAction();
		given.commandFails();
		when.methodCalled();
		then.shouldHaveThrown();
	});

});

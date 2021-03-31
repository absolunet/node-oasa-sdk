//--------------------------------------------------------
//-- Base - Given-When-Then
//--------------------------------------------------------
const given = {};
const when  = {};
const then  = {};

let exception;




//-- Mocks
const mockedTerminal = {
	process: {
		runAndRead: jest.fn()
	}
};


//-- Given - Reset
given.noException = () => {
	exception = undefined;
};

given.importedOASA = () => {
	return jest.requireActual('..');
};

given.mockedTerminal = () => {
	jest.mock('@absolunet/terminal', () => {
		return { terminal: mockedTerminal };
	});
};

given.mockedTerminalProcessRunAndReadReturns = (value) => {
	mockedTerminal.process.runAndRead.mockReturnValueOnce(value);
};

given.mockedTerminalProcessRunAndReadThrows = () => {
	mockedTerminal.process.runAndRead.mockImplementationOnce(() => {
		throw new Error('Mocked thrown error');
	});
};


//-- When - Attemping
when.attempting = (closure) => {
	try {
		closure();
	} catch (error) {
		exception = error;
	}
};

when.attemptingAsync = async (closure) => {
	try {
		await closure();
	} catch (error) {
		exception = error;
	}
};


//-- Then -- Thrown
then.shouldHaveThrown = () => {
	expect(exception).toBeTruthy();
};

then.shouldHaveThrownMessageContaining = (message) => {
	expect(exception.message).toContain(message);
};

then.shouldNotHaveThrown = () => {
	expect((exception || {}).stack).toBeFalsy();
};




export { given, when, then };

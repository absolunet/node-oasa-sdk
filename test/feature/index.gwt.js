//--------------------------------------------------------
//-- OASA - Feature tests
//--------------------------------------------------------
import * as gwt from '../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let oasa;


//-- Given - Reset
given.noImportedPackage = () => {
	oasa = undefined;
};


//-- When
when.imported = () => {
	({ oasa } = jest.requireActual('../..'));
};


//-- Then
then.importShouldContainMainComponent = () => {
	expect(oasa).toBeObject();
};


export { given, when, then };

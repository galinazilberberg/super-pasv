import {expect} from "chai";

describe('operation with numbers',function (){
    const a = 5;
    const b = 7;
    it('addition works correctly', function (){
        expect(a+b,'result should be equal').to.equal(12);
    });

    it('subtraction works correctly', function (){
        expect(b-a,'result should be equal').to.equal(2);
    });
});
//fix

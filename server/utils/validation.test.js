const expect = require('expect');
const {isRealString} =  require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    var res = isRealString(123);
    expect(res).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    var string = '    ';
    expect(isRealString(string)).toBeFalsy();
  });

  it('should allow strings with non space characters', () => {
    var string = ' abc   ';
    expect(isRealString(string)).toBeTruthy();
  });

});

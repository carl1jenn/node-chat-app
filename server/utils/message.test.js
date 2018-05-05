var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
   it('Should generate the correct message object', () => {
    var message = generateMessage('fred','message');
    expect(message.from).toBe('fred');
    expect(message.text).toBe('message');
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateMessage', () => {
   it('Should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message).toEqual(expect.objectContaining({from,text}));
    expect(typeof message.createdAt).toBe('number');
  });
});

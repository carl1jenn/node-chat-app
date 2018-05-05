var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');


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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
        var from = 'Jen';
        var latitude = 1;
        var longitude = 1;
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        var url = 'https://www.google.com/maps?q=1,1'
        expect(locationMessage).toEqual(expect.objectContaining({from,url}));
        expect(typeof locationMessage.createdAt).toBe('number');
  });
});

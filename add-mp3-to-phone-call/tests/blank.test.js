const { handler } = require('../functions/blank');

describe('add-mp3-to-phone-call function template', () => {
  it('Calls callback with empty JSON', () => {
    const callback = jest.fn();
    handler({}, {}, callback);
    expect(callback).toHaveBeenCalledWith(null, {});
  });
});

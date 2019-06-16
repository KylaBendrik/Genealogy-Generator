describe('Blazon', () => {
  it('formats a plain tincture', () => {
    const person = { tincture: 'or', charges: [], ordinaries: [] };

    expect(blazon(person)).toEqual('or');
  });

  it('formats a tincture with one ordinary', () => {
    const person = {
      tincture: 'or',
      charges: [],
      ordinaries: [{ type: 'pale', color: 'argent' }]
    };

    expect(blazon(person)).toEqual('or, a pale argent');
  });
});
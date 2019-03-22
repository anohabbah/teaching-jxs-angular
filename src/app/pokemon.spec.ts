import { Pokemon } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon()).toBeTruthy();
  });

  it('should have a name and an id', function () {
    expect(Object.keys(new Pokemon())).toContain('name');
    expect(Object.keys(new Pokemon())).toContain('id');
  });
});

import { pipeDuration } from '../timeConverter';

describe('pipeDuration testing', () => {
  const TIME_IN_MINUTES = 123;
  const EXPECTED_CORRECT_VALUE = '02:03';

  test('pipeDuration should return correct duration format', () => {
    expect(pipeDuration(TIME_IN_MINUTES)).toBe(EXPECTED_CORRECT_VALUE);
  });
});

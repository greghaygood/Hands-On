/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Mocked test of capitalize
 */


// Module imports
import capitalize from './capitalize';

jest.mock('./capitalize', () => 'some random string');

test('mocked capitalize', () => {
  expect(capitalize).toEqual('some random string');
});

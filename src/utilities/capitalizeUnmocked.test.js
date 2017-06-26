/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Mocked test of capitalize
 */


// Module imports
import capitalize from './capitalize';

test('unmocked capitalize', () => {
  expect(capitalize('some random string')).toEqual('Some random string');
});

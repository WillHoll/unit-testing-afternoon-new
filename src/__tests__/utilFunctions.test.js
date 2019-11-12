import { shortenText } from './../utils/functions';
import { wordCount, attachUserName } from '../../server/utils'
import { users, posts, shortText, longText } from './__data__/testData';

describe('shortenText function', () => {
  test('Shorten string wont work on strings < 100 characters', () => {
    const text = shortenText(shortText);
    expect(text).toHaveLength(shortText.length)
  })

  test('shortenText will shorten string > 100 and append ... to end', () => {
    const text = shortenText(longText)
    expect(text).not.toHaveLength(longText.length)
    expect(text.slice(-3)).toBe('...')
  })
})

describe('wordCount function', () => {
  test('wordCount returns number of total words', () => {
    const words = wordCount(posts)
    expect(words).toBe(233)
  })
})

describe('attachUserName function', () => {
  test('each post has a designated user', () => {
    const newpost = attachUserName(users, posts);
    expect(newpost[0]).toHaveProperty('displayName');
  })

  test('make sure posts are properly deleted', () => {
    const newposts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newposts).not.toContainEqual(deletedPost)
  })
})

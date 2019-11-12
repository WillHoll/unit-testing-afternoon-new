import React from 'react';
import { render} from '@testing-library/react';
import PostWidget from './../components/PostWidget'
import { MemoryRouter } from 'react-router';
import { shortenText } from './../utils/functions';
import { posts } from './__data__/testData';

const longPost = posts[0];
const post = posts[1];

it('successfully renders', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...post}/>
    </MemoryRouter>
  );
  expect(container.textContent).toContain(post.text);
});

it('will see if longPost will shorten by default', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...longPost}/>
    </MemoryRouter>
  );
  expect(container.textContent).toContain(shortenText(longPost.text));
});

it('will display longPost when extended prop is included', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost}/>
    </MemoryRouter>
  );
  expect(container.textContent).toContain(longPost.text);
});
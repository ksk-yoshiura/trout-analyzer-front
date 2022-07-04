/**
 * @jest-environment jsdom
 */
import React from 'react';

import ReelsList from '../../../../components/model/reels/ReelsList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('ReelsList', () => {
  const isTackle = true
  const { asFragment } = render(<ReelsList isTackle={isTackle} />);
  expect(asFragment()).toMatchSnapshot();
});
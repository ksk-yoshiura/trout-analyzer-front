/**
 * @jest-environment jsdom
 */
import React from 'react';

import TopPage from '../../../components/page/top';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('TopPage', () => {
  const { asFragment } = render(<TopPage />);
  expect(asFragment()).toMatchSnapshot();
});
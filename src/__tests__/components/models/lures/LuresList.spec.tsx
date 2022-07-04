/**
 * @jest-environment jsdom
 */
import React from 'react';

import LuresList from '../../../../components/model/lures/LuresList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LuresList', () => {
  const { asFragment } = render(<LuresList />);
  expect(asFragment()).toMatchSnapshot();
});
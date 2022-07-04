/**
 * @jest-environment jsdom
 */
import React from 'react';

import LureIndex from '../../../../components/page/lures/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LureIndex', () => {
  const { asFragment } = render(<LureIndex />);
  expect(asFragment()).toMatchSnapshot();
});
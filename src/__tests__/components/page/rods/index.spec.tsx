/**
 * @jest-environment jsdom
 */
import React from 'react';

import RodIndex from '../../../../components/page/rods/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RodIndex', () => {
  const { asFragment } = render(<RodIndex />);
  expect(asFragment()).toMatchSnapshot();
});
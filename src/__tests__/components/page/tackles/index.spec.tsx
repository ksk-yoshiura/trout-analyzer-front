/**
 * @jest-environment jsdom
 */
import React from 'react';

import TackleIndex from '../../../../components/page/tackles/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('TackleIndex', () => {
  const { asFragment } = render(<TackleIndex />);
  expect(asFragment()).toMatchSnapshot();
});
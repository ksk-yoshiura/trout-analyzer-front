/**
 * @jest-environment jsdom
 */
import React from 'react';

import LineIndex from '../../../../components/page/lines/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LineIndex', () => {
  const { asFragment } = render(<LineIndex />);
  expect(asFragment()).toMatchSnapshot();
});
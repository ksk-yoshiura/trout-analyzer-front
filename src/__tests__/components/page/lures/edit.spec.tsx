/**
 * @jest-environment jsdom
 */
import React from 'react';

import LureEdit from '../../../../components/page/lures/edit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LureEdit', () => {
  const { asFragment } = render(<LureEdit />);
  expect(asFragment()).toMatchSnapshot();
});
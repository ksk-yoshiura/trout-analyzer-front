/**
 * @jest-environment jsdom
 */
import React from 'react';

import RodEdit from '../../../../components/page/rods/edit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RodEdit', () => {
  const { asFragment } = render(<RodEdit />);
  expect(asFragment()).toMatchSnapshot();
});
/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LureEdit from '../../../../components/page/lures/edit';

test('LureEdit', () => {
  const { asFragment } = render(<LureEdit />);
  expect(asFragment()).toMatchSnapshot();
});
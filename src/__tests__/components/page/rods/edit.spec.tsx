/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RodEdit from '../../../../components/page/rods/edit';

test('RodEdit', () => {
  const { asFragment } = render(<RodEdit />);
  expect(asFragment()).toMatchSnapshot();
});
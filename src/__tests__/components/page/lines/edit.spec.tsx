/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LineEdit from '../../../../components/page/lines/edit';

test('LineEdit', () => {
  const { asFragment } = render(<LineEdit />);
  expect(asFragment()).toMatchSnapshot();
});
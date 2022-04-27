/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import TackleEdit from '../../../../components/page/tackles/edit';

test('TackleEdit', () => {
  const { asFragment } = render(<TackleEdit />);
  expect(asFragment()).toMatchSnapshot();
});
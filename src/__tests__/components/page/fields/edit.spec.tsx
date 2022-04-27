/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import FieldEdit from '../../../../components/page/fields/edit';

test('FieldEdit', () => {
  const { asFragment } = render(<FieldEdit />);
  expect(asFragment()).toMatchSnapshot();
});
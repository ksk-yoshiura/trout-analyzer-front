/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import FieldDetail from '../../../../components/model/fields/FieldDetail';

test('FieldDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<FieldDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});
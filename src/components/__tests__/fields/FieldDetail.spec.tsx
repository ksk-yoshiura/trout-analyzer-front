/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import FieldDetail from '../../model/fields/FieldDetail';

test('FieldDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<FieldDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});
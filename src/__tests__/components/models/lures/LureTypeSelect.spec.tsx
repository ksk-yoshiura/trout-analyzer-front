/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LureTypeSelect from '../../../../components/model/lures/LureTypeSelect';

test('LureTypeSelect', () => {
  const { asFragment } = render(<LureTypeSelect />);
  expect(asFragment()).toMatchSnapshot();
});
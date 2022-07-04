/**
 * @jest-environment jsdom
 */
import React from 'react';

import LureTypeSelect from '../../../../components/model/lures/LureTypeSelect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LureTypeSelect', () => {
  const { asFragment } = render(<LureTypeSelect />);
  expect(asFragment()).toMatchSnapshot();
});
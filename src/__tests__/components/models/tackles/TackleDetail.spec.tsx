/**
 * @jest-environment jsdom
 */
import React from 'react';

import TackleDetail from '../../../../components/model/tackles/TackleDetail';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('TackleDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<TackleDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});
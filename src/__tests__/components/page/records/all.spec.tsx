/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordsAll from '../../../../components/page/records/all';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordsAll', () => {

  const { asFragment } = render(<RecordsAll />);
  expect(asFragment()).toMatchSnapshot();
});
/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordPatternDetail from '../../../../components/model/records/RecordPatternDetail';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordPatternDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<RecordPatternDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});
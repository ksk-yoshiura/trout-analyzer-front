/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordPatternsList from '../../../../components/model/records/RecordPatternsList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordPatternsList', () => {
  const { asFragment } = render(<RecordPatternsList />);
  expect(asFragment()).toMatchSnapshot();
});
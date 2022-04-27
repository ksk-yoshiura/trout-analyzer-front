/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RecordPatternsList from '../../../../components/model/records/RecordPatternsList';

test('RecordPatternsList', () => {
  const { asFragment } = render(<RecordPatternsList />);
  expect(asFragment()).toMatchSnapshot();
});
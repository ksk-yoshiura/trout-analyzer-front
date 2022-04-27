/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RecordsAll from '../../../../components/page/records/all';

test('RecordsAll', () => {

  const { asFragment } = render(<RecordsAll />);
  expect(asFragment()).toMatchSnapshot();
});
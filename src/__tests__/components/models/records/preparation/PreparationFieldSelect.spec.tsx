/**
 * @jest-environment jsdom
 */
import React from 'react';

import PreparationFieldSelect from '../../../../../components/model/records/preparation/PreparationFieldSelect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';

test('PreparationFieldSelect', () => {
  const { asFragment } = render(<PreparationFieldSelect />);
  expect(asFragment()).toMatchSnapshot();
});
/**
 * @jest-environment jsdom
 */
import React from 'react';

import PreparationFieldModal from '../../../../../components/model/records/preparation/PreparationFieldModal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';

test('PreparationFieldModal', () => {
  const { asFragment } = render(<PreparationFieldModal />);
  expect(asFragment()).toMatchSnapshot();
});
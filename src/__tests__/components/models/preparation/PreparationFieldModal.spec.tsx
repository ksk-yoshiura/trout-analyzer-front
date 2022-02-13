/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import PreparationFieldModal from '../../../../components/model/preparation/PreparationFieldModal';

test('PreparationFieldModal', () => {
  const { asFragment } = render(<PreparationFieldModal />);
  expect(asFragment()).toMatchSnapshot();
});
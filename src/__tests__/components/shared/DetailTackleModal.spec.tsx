/**
 * @jest-environment jsdom
 */
import React from 'react';

import DetailTackleModal from '../../../components/shared/DetailTackleModal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('DetailTackleModal', () => {
  const title = "title"
  const isOpen = true
  const onClose = ""
  const { asFragment } = render(<DetailTackleModal isOpen={isOpen} onClose={onClose} title={title} />);
  expect(asFragment()).toMatchSnapshot();
});
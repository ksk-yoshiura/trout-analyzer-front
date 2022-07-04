/**
 * @jest-environment jsdom
 */
import React from 'react';

import TackleEdit from '../../../../components/page/tackles/edit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('TackleEdit', () => {
  const { asFragment } = render(<TackleEdit />);
  expect(asFragment()).toMatchSnapshot();
});
/**
 * @jest-environment jsdom
 */
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React from 'react';

import TackleForm from '../../../../components/model/tackles/TackleForm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

jest.mock("next-auth/react")

test('TackleForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  // ID
  const chosenId = '1'
  const { asFragment } = render(<TackleForm chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});
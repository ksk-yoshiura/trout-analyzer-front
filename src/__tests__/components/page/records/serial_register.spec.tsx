/**
 * @jest-environment jsdom
 */
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React from 'react';

import SerialRegister from '../../../../components/page/records/serial_register';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

jest.mock("next-auth/react")

test('SerialRegister', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false])
    .mockReturnValueOnce([mockSession, false]);

  const { asFragment } = render(<SerialRegister />);
  expect(asFragment()).toMatchSnapshot();
});
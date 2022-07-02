/**
 * @jest-environment jsdom
 */
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React from 'react';

import RecordStartingForm from '../../../../components/model/records/RecordStartingForm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

jest.mock("next-auth/react")

test('RecordStartingForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const { asFragment } = render(<RecordStartingForm />);
  expect(asFragment()).toMatchSnapshot();
});
/**
 * @jest-environment jsdom
 */
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React from 'react';

import DetailModal from '../../../components/shared/DetailModal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

jest.mock("next-auth/react")

test('DetailModal', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const title = "title"
  const isOpen = true
  const onClose = ""
  const { asFragment } = render(<DetailModal isOpen={isOpen} onClose={onClose} title={title} />);
  expect(asFragment()).toMatchSnapshot();
});
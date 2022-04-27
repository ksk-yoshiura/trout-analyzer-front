/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import  { useSession } from "next-auth/react";
import  { Session } from "next-auth";
import DetailModal from '../../../components/shared/DetailModal';

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
  const mutate = ""
  const { asFragment } = render(<DetailModal mutate={mutate} isOpen={isOpen} onClose={onClose} title={title} />);
  expect(asFragment()).toMatchSnapshot();
});
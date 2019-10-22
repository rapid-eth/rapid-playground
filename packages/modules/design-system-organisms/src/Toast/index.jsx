/* --- Global Dependencies --- */
import React from "react";
import { PortalContext } from 'react-portal-system'

export default ({
  content,
  id,
  label,
  styled,
  closeTimer,
  closeOnClick,
  children,
}) => (
    <PortalContext>
      {
        portal => (
          <span onClick={() => portal.openToast({ content, closeTimer, closeOnClick, label, id, styled })}>
            {children}
          </span>
        )
      }
    </PortalContext>
  )
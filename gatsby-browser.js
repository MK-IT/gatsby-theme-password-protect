/* eslint-disable import/prefer-default-export, react/prop-types, consistent-return */
/**
 * Read-only the password from cookies
 */
import React from 'react';
import { getSessionPassword } from './src/utils/utils';
import PasswordProtect from './src/components/PasswordProtect';

export const wrapRootElement = (_, themeOptions) => {
  const sessionPassword = getSessionPassword();
  if (sessionPassword === themeOptions.password) {
    return;
  }

  return <PasswordProtect />;
};

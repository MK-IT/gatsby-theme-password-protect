/* eslint-disable import/prefer-default-export, react/prop-types, consistent-return */
/**
 * Read-only the password from cookies
 */
import React from 'react';
import { isAllowed } from './utils';
import PasswordProtect from './PasswordProtect';

export const wrapRootElement = (_, themeOptions) => {
  if (isAllowed(themeOptions.password)) {
    return;
  }

  return <PasswordProtect />;
};

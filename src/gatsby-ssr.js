/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import PasswordProtect from './PasswordProtect';

export const wrapRootElement = ({ element }) => {
  return <PasswordProtect />
};

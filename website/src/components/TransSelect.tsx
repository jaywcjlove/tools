import React from 'react';
import styled from 'styled-components';
import { useTranslation, getI18n } from 'react-i18next';

const Select = styled.select`
  appearance: none;
  border: none;
  cursor: pointer;
  margin-right: 2px;
  padding: 3px 6px;
  vertical-align: middle;
  background: transparent;
  text-align: right;
`;

export function TransSelect() {
  const { i18n } = useTranslation();
  const { language } = getI18n();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
  };
  return (
    <Select defaultValue={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="cn">简体中文</option>
    </Select>
  );
}

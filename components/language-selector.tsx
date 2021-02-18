import hljs from 'highlight.js';
import { SyntheticEvent } from 'react';

interface Props {
  className?: string;
  onChange: (lang: string) => void;
  value: string | null;
}

export const LanguageSelector = ({ className, onChange, value }: Props) => {
  const handleOnChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const language = event.currentTarget.value;
    onChange(language === '(auto)' ? null : language);
  };

  return (
    <div className={className}>
      <label htmlFor="lang-selector">Language</label>
      <select id="lang-selector" onChangeCapture={handleOnChange} value={value}>
        {['(auto)', ...hljs.listLanguages()].map((language) => (
          <option key={language}>{language}</option>
        ))}
      </select>
    </div>
  );
};

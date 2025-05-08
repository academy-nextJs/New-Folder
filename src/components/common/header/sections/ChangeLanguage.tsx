'use client'
import { useTranslation } from "react-i18next";


const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: any) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={i18n.language} className="w-20 px-4">
        <option value="ar">ar</option>
        <option value="en">en</option>
        <option value="fa">fa</option>
      </select>
    </div>
  );
};

export default ChangeLanguage;

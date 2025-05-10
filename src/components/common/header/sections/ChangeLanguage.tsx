'use client'
import { useTranslation } from "react-i18next";
import CommonSelect from "../../inputs/common/CommonSelect";


const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <CommonSelect
        classname="border-subText"      
        placeholder="فارسی"
        onValueChange={(value => {
          console.log(value);
          i18n.changeLanguage(value);
        })}
        selectItems={[
          { label: 'فارسی', value: 'fa' },
          { label: 'English', value: 'en' },
          { label: 'Arabic', value: 'ar' },
        ]}
      />
    </div>
  );
};

export default ChangeLanguage;

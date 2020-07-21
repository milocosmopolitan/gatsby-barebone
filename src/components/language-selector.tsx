import React, { useState, ChangeEvent } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useTranslation } from "react-i18next"

const LanguageSelector = (props: any) => {
  const { t, i18n } = useTranslation()
  
  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event: ChangeEvent<any>) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline={true}
      inputProps={{
        name: 'language'
      }}
    >
      <MenuItem value={'en'}>EN</MenuItem>
      <MenuItem value={'es'}>ES</MenuItem>
    </Select>
  )
}

export default LanguageSelector;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Covert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const doTranslation = () => {
      const { data } = axios.post(
        "https://traslation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);

  return <div>{translated}</div>;
};

export default Covert;

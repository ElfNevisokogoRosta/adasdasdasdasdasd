import React from "react";
import style from "./CurrencyComponent.module.css";
interface CurrencyComponentProps {
  currency: {
    shorthand: string;
    base_currency: string;
    icon_path?: string;
  };
}
export const CurrencyComponent: React.FC<CurrencyComponentProps> = ({
  currency,
}) => {
  return (
    <div className={style.currency_container}>
      <div className={style.logo_container}>
        <div className={style.icon_container}>
          <img
            width="32px"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <h3 className={style.currency_title}>{currency.shorthand}</h3>
      </div>
      <p className={style.currency_type}>{currency.base_currency}</p>
    </div>
  );
};

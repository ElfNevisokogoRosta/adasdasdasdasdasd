import { useQuery } from "@tanstack/react-query";
import style from "../styles/HomePage.module.css";
import { getExchangeCourse } from "../utils/querys/getExchangeCourse";
import { CurrencyComponent } from "../Components/CurrencyComponent/CurrencyComponent";

export const HomePage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["curency"],
    queryFn: getExchangeCourse,
  });
  console.log(data);
  return (
    <main className={style.container}>
      <p className={style.grettings}> Вітаємо </p>
      <h2 className={style.exchage_title}>Поточні курси</h2>
      <div className={style.exchange_container}>
        <div className={style.exchage_currency}>
          {data?.data?.from && <CurrencyComponent currency={data.data.from} />}
          <span className={style.exchange_symbol}>↔</span>
          {data?.data?.to && <CurrencyComponent currency={data.data.to} />}
        </div>

        <span className={style.exchange_symbol}>=</span>
        <p className={style.exchange_result}>
          {data?.data?.rate?.value}: {data?.data?.to?.base_currency}
        </p>
      </div>
      <b className={style.exchage_title}>Обміняти зараз</b>
    </main>
  );
};

const telegram = window.Telegram.WebApp

const useTelegramBot = ()=>{
    const theme = telegram.themeParams
    const user=telegram.initDataUnsafe;
    const mainBtn = telegram.MainButton;
    return [telegram, user, mainBtn, theme]
}
export default useTelegramBot
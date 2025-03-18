import { useState, useEffect } from "react";

export const Timer = () => {
    const [time, setTime] = useState<number>(180);
    const [finishSale, setFinishSale] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setFinishSale(true)
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div>
            {finishSale
                ? (<p>Акция завершена</p>)
                : (<b>{`Акция заканчивается через ${minutes} минут ${seconds} секунд`}</b>)}
        </div>
    );
};


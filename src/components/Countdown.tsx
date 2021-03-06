import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');//dividi 25 = '2' '5', e quando tiver só um ex: 5, no start ele poem 0; 5 = 05 = '0' '5'
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown(){
        setIsActive(true);
    }

    function resetCountDown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if (isActive && time ==0){
            setHasFinished(true)
            setIsActive(false);
        }

    }, [isActive, time])

    return(
        <div>
            <div className={styles.countdownContainer}>            
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                { isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick= {resetCountDown}
                    >
                        Abandonar o ciclo
                    </button>
                ) : (
                    <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick= {startCountDown}
                    >
                        Iniciar um ciclo
                    </button>
                )}
                </>
            )}


            
            

        </div>
    );
}
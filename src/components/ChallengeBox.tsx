import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    
    const contextData = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada</p>
                    </main>
                    
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButtom}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButtom}
                        >
                            Completei
                        </button>

                    </footer>
                </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong> Finalize um ciclo para receber desafios </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando Desafios!
                </p>
            </div>
            )}
            
        </div>
    )
}
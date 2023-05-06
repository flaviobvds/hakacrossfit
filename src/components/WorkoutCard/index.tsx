import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './WorkoutCard.module.scss'

interface WorkoutCardProps {
    cardInfo: {
        title: string,
        description: string,
        image: string,
        times: {
            mon: string[],
            tue: string[],
            wed: string[],
            thu: string[],
            fri: string[],
            sat: string[],
            sun: string[],
        }
    },
    onChangeScheduleTime: (workout: string) => void;
    onClickSchedule: () => void;
}

export function WorkoutCard({ cardInfo, onChangeScheduleTime, onClickSchedule }: WorkoutCardProps) {
    const { language } = useLanguage();

    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img
                    src={cardInfo.image}
                    alt={cardInfo.title}
                />
            </div>
            <span className={styles.cardTitle}> {cardInfo.title} </span>
            <p className={styles.cardDescription}>
                {cardInfo.description}
            </p>
            <span className={styles.timesTitle}>
                {translatedText.times[language as keyof typeof translatedText.home]}:
            </span>

            <div className={styles.timeTable}>

                <span className={styles.day}>
                    {translatedText.mon[language as keyof typeof translatedText.home]}
                </span>
                <div className={styles.times}>
                    {(cardInfo.times.mon.length == 0)
                        ? <span className={styles.noTime}>-</span>
                        : cardInfo.times.mon.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })
                    }
                </div>

                <span className={styles.day}>
                    {translatedText.tue[language as keyof typeof translatedText.home]}
                </span>
                <div className={styles.times}>
                    {(cardInfo.times.tue.length == 0)
                        ? <span className={styles.noTime}>-</span>
                        : cardInfo.times.tue.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })
                    }
                </div>

                <span className={styles.day}>
                    {translatedText.wed[language as keyof typeof translatedText.home]}
                </span>
                <div className={styles.times}>
                    {(cardInfo.times.wed.length == 0)
                        ? <span className={styles.noTime}>-</span>
                        : cardInfo.times.wed.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })
                    }
                </div>

                <span className={styles.day}>
                    {translatedText.thu[language as keyof typeof translatedText.home]}
                </span>
                <div className={styles.times}>
                    {(cardInfo.times.thu.length == 0)
                        ? <span className={styles.noTime}>-</span>
                        : cardInfo.times.thu.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })
                    }
                </div>

                <span className={styles.day}>
                    {translatedText.fri[language as keyof typeof translatedText.home]}
                </span>
                <div className={styles.times}>
                    {(cardInfo.times.fri.length == 0)
                        ? <span className={styles.noTime}>-</span>
                        : cardInfo.times.fri.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })
                    }
                </div>

                <span className={styles.day}>
                    {translatedText.sat[language as keyof typeof translatedText.home]}
                </span>
                <div className={styles.times}>
                    {(cardInfo.times.sat.length == 0)
                        ? <span className={styles.noTime}>-</span>
                        : cardInfo.times.sat.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })
                    }
                </div>

                <span className={styles.day}>
                    {translatedText.sun[language as keyof typeof translatedText.home]}
                </span>
                <div className={styles.times}>
                    {(cardInfo.times.sun.length == 0)
                        ? <span className={styles.noTime}>-</span>
                        : cardInfo.times.sun.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })
                    }
                </div>
            </div>

            <button
                className={styles.scheduleButton}
                onClick={() => {
                    onChangeScheduleTime(cardInfo.title)
                    onClickSchedule();
                }}
            >
                {translatedText.scheduleAVisit[language as keyof typeof translatedText.home]}
            </button>
        </div>
    );
}
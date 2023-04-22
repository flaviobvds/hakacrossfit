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
            <span className={styles.timesTitle}> Horários </span>

            <div className={styles.timeTable}>

                <span className={styles.day}>Seg</span>
                <div className={styles.times}>
                    {(cardInfo.times.mon.length == 0) ?
                        <span className={styles.noTime}>-</span>
                        :
                        cardInfo.times.mon.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })}
                </div>

                <span className={styles.day}>Ter</span>
                <div className={styles.times}>
                    {(cardInfo.times.tue.length == 0) ?
                        <span className={styles.noTime}>-</span>
                        :
                        cardInfo.times.tue.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })}
                </div>

                <span className={styles.day}>Qua</span>
                <div className={styles.times}>
                    {(cardInfo.times.wed.length == 0) ?
                        <span className={styles.noTime}>-</span>
                        :
                        cardInfo.times.wed.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })}
                </div>

                <span className={styles.day}>Qui</span>
                <div className={styles.times}>
                    {(cardInfo.times.thu.length == 0) ?
                        <span className={styles.noTime}>-</span>
                        :
                        cardInfo.times.thu.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })}
                </div>

                <span className={styles.day}>Sex</span>
                <div className={styles.times}>
                    {(cardInfo.times.fri.length == 0) ?
                        <span className={styles.noTime}>-</span>
                        :
                        cardInfo.times.fri.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })}
                </div>

                <span className={styles.day}>Sáb</span>
                <div className={styles.times}>
                    {(cardInfo.times.sat.length == 0) ?
                        <span className={styles.noTime}>-</span>
                        :
                        cardInfo.times.sat.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })}
                </div>

                <span className={styles.day}>Sun</span>
                <div className={styles.times}>
                    {(cardInfo.times.sun.length == 0) ?
                        <span className={styles.noTime}>-</span>
                    :
                        cardInfo.times.sun.map((time) => {
                            return (
                                <span key={time} className={styles.time}>{time}</span>
                            )
                        })}
                </div>
            </div>

            <button 
                className={styles.scheduleButton}
                onClick={() => {
                    onChangeScheduleTime(cardInfo.title)
                    onClickSchedule();
                }}
            >
                Agende um Horário
            </button>
        </div>
    );
}
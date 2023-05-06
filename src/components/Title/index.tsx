import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import style from './Title.module.scss'

export function Title() {
    const { language } = useLanguage();

    function handleMainButton() {
        window.open(
            'https://api.whatsapp.com/send?phone=5595991245752&text=Ol%C3%A1.%20Gostaria%20de%20marcar%20uma%20aula%20experimental%20gratuita.',
            '_blank'
        )
    }

    return (
        <main className={style.main}>

            <div className={style.headTitles}>
                <section className={style.titleContent}>
                    <h1 className={style.title1}>
                        {translatedText.transformYourBody1[language as keyof typeof translatedText.home]}
                        <span>
                            {translatedText.transformYourBody2[language as keyof typeof translatedText.home]}
                        </span>
                    </h1>
                    <h2 className={style.title2}>
                        {translatedText.changeYourLife1[language as keyof typeof translatedText.home]}
                        <span>
                            {translatedText.changeYourLife2[language as keyof typeof translatedText.home]}
                        </span>
                    </h2>

                    <button
                        className={style.mainButton}
                        type='button'
                        onClick={handleMainButton}
                    >
                        {translatedText.startToday[language as keyof typeof translatedText.home]}
                    </button>
                </section>
            </div>

        </main>
    )
}
import styles from './Card.module.css'
import {Button} from '@/common/components/Button';
import {BookApp} from '@/app/appReducer.ts';


type Props={
    book:BookApp
}

export const Card = (props:Props) => {

    const {title,author, body, price, url}=props.book

    return (
        <div className={styles.cardContainer}>
            <img src={url} alt="Flowers Book" width={300} height={300} />
            <div className={styles.infoWrapper}>
                <h3 className={styles.title}>{`Название книги: ${title}`}</h3>
                <p className={styles.author}>{`Автор: ${author}`}</p>
                <p className={styles.descpition}>{`Описание: ${body}`}</p>
                <p className={styles.price}>{`Цена: ${price}р`}</p>
                <Button>Добавить в карзину</Button>
            </div>
        </div>
    )
}
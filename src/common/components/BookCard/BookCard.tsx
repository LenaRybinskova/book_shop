import styles from './BookCard.module.css'
import {Button} from '@/common/components/Button';
import {BookApp} from '@/app/appReducer.ts';


type Props = {
    book: BookApp
    callback: (book: BookApp) => void
}

export const BookCard = ({book, callback}: Props) => {

    const {title, author, body, price, url} = book

    const handleAddBook = () => {
        callback(book)
    }

    return (
        <div className={styles.cardContainer}>
            <img src={url} alt={title} width={250} height={250}/>
            <div className={styles.infoWrapper}>
                <h3 className={styles.title}>{`Название книги: ${title}`}</h3>
                <p className={styles.author}>{`Автор: ${author}`}</p>
                <p className={styles.descpition}>{`Описание: ${body}`}</p>
                <p className={styles.price}>{`Цена: ${price}р`}</p>
                <Button onClick={handleAddBook}>Добавить в корзину</Button>
            </div>
        </div>
    )
}
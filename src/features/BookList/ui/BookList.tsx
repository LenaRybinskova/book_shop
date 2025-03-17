import {useAppSelector} from '@/app/store.ts';
import {BookApp} from '@/app/appReducer.ts';
import {Card} from '@/common/components/Card';
import styles from "./BookList.module.css"

export const BookList = () => {

    const books = useAppSelector<BookApp[]>((state) => state.app.books)

    return (
        <div className={styles.cardListContainer}>
            {books.map(book => (<Card book={book}/>))}
        </div>
    )
}
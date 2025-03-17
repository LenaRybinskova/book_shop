import {useAppDispatch, useAppSelector} from '@/app/store.ts';
import {BookApp} from '@/app/appReducer.ts';
import styles from './BookList.module.css'
import {Button} from '@/common/components/Button';
import {useState} from 'react';
import {Cart} from '@/features/Cart/ui/Cart';
import {addBookAC} from '@/features/Cart/model/CartReducer.ts';
import {BookCard} from '@/common/components/BookCard';

export const BookList = () => {
    const [open, setOpen] = useState<boolean>(false)

    const books = useAppSelector<BookApp[]>((state) => state.app.books)
    const dispatch = useAppDispatch()

    const handleCartOpen = () => {
        setOpen(!open)
    }

    const onAddcToCart = (book: BookApp) => {
        dispatch(addBookAC(book))
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Button onClick={handleCartOpen} className={styles.buttonCart}>Корзина</Button>
            </div>
            <div className={styles.bookListContainer}>
                <div className={styles.cardListWrapper}>
                    {books.map(book => (<BookCard key={book.id} book={book} callback={onAddcToCart}/>))}
                </div>
                {open && <Cart onClose={handleCartOpen} open={open}/>}
            </div>
        </div>


    )
}
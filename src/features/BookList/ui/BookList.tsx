import {useAppDispatch, useAppSelector} from '@/app/store.ts';
import {BookApp} from '@/app/appReducer.ts';
import styles from './BookList.module.css'
import {Button} from '@/common/components/Button';
import {useEffect, useState} from 'react';
import {Cart} from '@/features/Cart/ui/Cart';
import {addBookAC} from '@/features/Cart/model/CartReducer.ts';
import {BookCard} from '@/common/components/BookCard';
import {FormFilter} from '@/features/BookList/ui/FormFilter/FormFilter.tsx';
import {Timer} from '@/features/BookList/ui/Timer/Timer.tsx';

export const BookList = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [booksForRender, setBooksForRender] = useState<BookApp[]>([])

    const books = useAppSelector<BookApp[]>((state) => state.app.books)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setBooksForRender(books);
    }, [books]);

    const handleCartOpen = () => {
        setOpen(!open)
    }

    const onAddcToCart = (book: BookApp) => {
        dispatch(addBookAC(book))
    }

    const handleFilter = (price: number) => {
        const filteredBooks = books.filter(book => book.price <= price);
        setBooksForRender(filteredBooks);
    };

    const handleShowAll = () => {
        setBooksForRender(books);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.lefSide}><Timer/></div>
                <div className={styles.right}>
                    <Button onClick={handleCartOpen} className={styles.buttonCart}>Корзина</Button>
                    <FormFilter handleFilter={handleFilter}/>
                    <Button onClick={handleShowAll}>показать все книги</Button>
                </div>
            </div>
            <div className={styles.bookListContainer}>
                <div className={styles.cardListWrapper}>
                    {booksForRender.map(book => (<BookCard key={book.id} book={book} callback={onAddcToCart}/>))}
                </div>
                {open && <Cart onClose={handleCartOpen} open={open}/>}
            </div>
        </div>
    )
}
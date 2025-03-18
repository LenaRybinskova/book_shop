import  {useEffect} from 'react';
import styles from "./PublicPage.module.css"
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '@/app/store.ts';
import {fetchBooksData} from '@/app/appReducer.ts';

export const PublicPage = () => {

    const navigate = useNavigate();
    const dispatch=useAppDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchBooksData()).then(()=>{

            })
            navigate('/catalog');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);



    return (
        <h1 className={styles.publicTitle}>
            Добро пожаловать в наш книжный магазин!
        </h1>
    );
};


import {Button} from '@/common/components/Button';
import {deleteBookAC} from '@/features/Cart/model/CartReducer.ts';
import {BookApp} from '@/app/appReducer.ts';
import {useAppDispatch} from '@/app/store.ts';

type Props={
    book:BookApp
}

export const CartItem=(props:Props)=>{
    const {id, price, title}=props.book
    const dispatch=useAppDispatch()

    const handleDeleteItem=()=>{
        dispatch(deleteBookAC(id))
    }

    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <Button onClick={handleDeleteItem}>удалить из корзины</Button>
        </div>
    )
}
import {Modal} from '@/common/components/Modal';
import {Button} from '@/common/components/Button';
import styles from './Cart.module.css'
import {useAppSelector} from '@/app/store.ts';
import {CartItem} from '@/features/Cart/ui/CartItem/CartItem.tsx';


type Props = {
    onClose: (open: boolean) => void
    open: boolean
}

export const Cart = ({onClose}: Props) => {

    const cart = useAppSelector(state => state.cart.cart)
    const cartItems = Object.values(cart);

    const handleModal = () => {
        onClose(true)
    }

    return (
        <div>
            <Modal open={open}>
                <div className={styles.modalContent}>
                    {cartItems.map(item => (<CartItem book={item} key={item.id}/>))}
                    <Button onClick={handleModal}>закрыть</Button>
                </div>
            </Modal>
        </div>


    )
}
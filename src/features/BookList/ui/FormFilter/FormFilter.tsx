import { useForm } from "react-hook-form";
import {Button} from '@/common/components/Button';
import styles from "./FormFilter.module.css"

type Props = {
    handleFilter:(price:number)=>void
}

type FormValues = {
    number: string;
};

export const FormFilter = (props:Props) => {
    const { register, handleSubmit} = useForm<FormValues>({
        defaultValues: { number: "" },
    });

    const onSubmit = (data: FormValues) => {
        props.handleFilter(Number(data.number))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
                type="text"
                {...register("number")}
                placeholder="Введите мах стоимость"
            />
            <Button type="submit">найти книги</Button>
        </form>
    );
};


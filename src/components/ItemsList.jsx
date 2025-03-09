import { ItemCard } from './ItemCard'
import styles from './ItemsList.module.css'

export const ItemsList = ({ itemsList }) => {
    return (
        <ul className={styles['items-list__container']}>
            {itemsList.map((item) => (
                <ItemCard key={item.uuid} item={item} />
            ))}
        </ul>
    )
}

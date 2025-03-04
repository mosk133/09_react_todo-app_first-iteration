import styles from "./ItemCard.module.css";

export const ItemCard = ({ item }) => {
    return (
        <ul>
            <li className={styles["item-card"]}>
                <h4 className={styles[`item-card__title--${item.status}`]}>
                    {item.title}
                </h4>
                <p>{item.description}</p>
                <span className={styles[`item-card__status--${item.status}`]}>{item.status}</span>
            </li>
        </ul>
    )
}

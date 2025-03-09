import styles from "./ItemCard.module.css";

export const ItemCard = ({ item }) => {
    return (
        <li className={styles["item-card__container"]}>
            <h4 className={styles[`item-card__title--${item.status}`]}>
                {item.title}
            </h4>
            <p>{item.description}</p>
            <span className={`${styles["item-card__status"]} ${styles[`item-card__status--${item.status.replace(" ", "-")}`]}`}>{item.status}</span>
        </li>
    )
}

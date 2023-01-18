import { Beer } from "../types";
import styles from "./Card.module.css";

interface IBeerCardProps {
  data: Beer;
}

export default function Card(props: IBeerCardProps) {
  const { image_url, name, description } = props.data;

  return (
    <article className={styles.beerCard} style={{ backgroundImage: `url(${image_url})` }}>
      <div className={styles.data}>
        {/*
        изображение
        название
        описание не более 140 символов в случае превышения добавлять троеточие
        */}
        <h3 className={styles.title}>{name}</h3>

        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

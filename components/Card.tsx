import { Beer } from "../types";
import styles from "./Card.module.css";

interface IBeerCardProps {
  data: Beer;
}

export default function Card(props: IBeerCardProps) {
  const { image_url, name, description } = props.data;
  let descriptionPrepared = description;
  if (description.length > 139) {
    descriptionPrepared = descriptionPrepared.slice(0, 139);
    if (".,;!?".includes(descriptionPrepared.charAt(descriptionPrepared.length - 1))) {
      descriptionPrepared = descriptionPrepared + "..";
    } else {
      descriptionPrepared = descriptionPrepared + "...";
    }
  }

  type style = { backgroundImage?: string };
  const style: style = {};
  if (image_url) {
    style.backgroundImage = `url(${image_url})`;
  }

  return (
    <article className={styles.beerCard} style={style}>
      <div className={styles.data}>
        <span>{props.data.id}</span>
        {/*
        изображение
        название
        описание не более 140 символов в случае превышения добавлять троеточие
        */}
        <h3 className={styles.title}>{name}</h3>

        <p className={styles.description}>{descriptionPrepared}</p>

      </div>
    </article>
  );
}

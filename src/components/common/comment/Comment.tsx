import { FaStar } from "react-icons/fa";
import styles from "./Comment.module.css";

interface CommentProps {
  client: string;
  rating: number;
  commentTitle: string;
  commentDescription: string;
  reviewDate: Date;
}

export default function Comment({
  client,
  rating,
  commentTitle,
  commentDescription,
  reviewDate,
}: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.reviewInfo}>
        <div className={styles.row}>
          <h1 className={styles.client}>{client}</h1>
          <span className={styles.stars}>{<Stars rating={rating} />}</span>
        </div>
        <p className={styles.reviewDate}>
          Avaliado em {reviewDate.toLocaleDateString()}
        </p>
      </div>
      <div className={styles.commentReview}>
        <h1 className={styles.commentTitle}>{commentTitle}</h1>
        <p className={styles.commentDescription}>{commentDescription}</p>
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.rating}>
      {Array.from({ length: rating }).map((_, i) => (
        <span className={styles.star}>
          <FaStar key={i} />
        </span>
      ))}
    </div>
  );
}

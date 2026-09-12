import Comment from "../../components/common/comment/Comment";
import Navbar from "../../components/common/navbar/Navbar";

// import styles from "./ProductPage.module.css";

// interface ProductPageProps{

// }

export default function ProductPage() {
  return (
    <div className="divDebug">
      <Navbar type={"secondary"} />
      <Comment
        client={"Julia"}
        rating={5}
        commentTitle="Incrivel"
        commentDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse aperiam recusandae sed ea nisi error possimus fugiat laborum quia accusantium natus, nulla animi laudantium, reprehenderit ducimus. Enim, fuga ex."
        reviewDate={new Date(2026, 9, 12)}
      />
    </div>
  );
}

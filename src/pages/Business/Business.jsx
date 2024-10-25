import styles from "./Business.module.scss";
import Btn from "../../components/UI/Buttons/Btn";
import Video from "../../components/UI/Video/Video";

function Business() {
  return (
    <div className="flex column gap40 greyBackground pt40 pb40">
      <div className="flex center column gap20">
        <h3 className="sText"> Business </h3>
        <h1 className="lText">Promote business</h1>
        <p className="sText textCenter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut Labore et doLore magna aliqua{" "}
        </p>
        <Btn>Request for advice</Btn>
      </div>
      <div className={styles.video}>
        <div className={styles.videoPlayer}>
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Business;

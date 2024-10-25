import styles from "./Start.module.scss";
import Btn from '../../components/UI/Buttons/Btn';

function Start() {
  return (
    <div className={styles.Container}>
      <p>Designing With Us</p>
      <div className={styles.largeText}>
        <p>The Leading Design </p>
        <p>Studio for Creators</p>
      </div>
			<p>Together we bring your vision to life and help you to say &apos;Yes&apos; to stunning,<br/> innovative, and timeless designs </p>
			<Btn>Start a project</Btn>
    </div>
  );
}

export default Start;

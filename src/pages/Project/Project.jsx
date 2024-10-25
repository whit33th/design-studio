import BorderBtn from "../../components/UI/Buttons/BorderBtn";
import styles from "./Project.module.scss";


function Project() {
  return (
    <div className='pt40'>
      <div className="center column flex gap20">
        <h3 className="sText"> Project </h3>
        <h1 className="lText">Success Project</h1>
        <p className="sText textCenter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut Labore et doLore magna aliqua{" "}
        </p>
      </div>

      <div className={styles.Container}>
        <div
          className={`card ${styles.background} ${styles.back1} ${styles.row}`}
        >
          <div>
            <h3>Website Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut Labore et doLore magna aliqua
            </p>
          </div>
          <div>
            <BorderBtn>Let`s work</BorderBtn>
          </div>
        </div>
        <div>
          <div className={`card ${styles.background}  ${styles.back2}`}>
            <div>
              <h3>Ul/UX Design </h3>
              <p>
                Our Ul/UX design services provide an intuitive interface and
                user experience that makes it easy for users to achieve their
                goals
              </p>
            </div>
          </div>
          <div className={`card ${styles.background}  ${styles.back3}`}>
            <div>
              <h3>Branding & Identity </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut Labore et doLore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </div>
			
    </div>
  );
}

export default Project;

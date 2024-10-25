import styles from "./Services.module.scss";
import code from 'asset/ico/code.png'
import ux from 'asset/ico/ux.png'
import branding from 'asset/ico/brand-image.png'


function Services() {
  return (
    <div className="flex gap40  column pt40">

			<div className='flex center column gap20'>
				<h3 className="sText"> Services </h3>
      <h1 className="lText">Our services </h1>
      <p className="sText textCenter">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br /> tempor incididunt ut Labore et doLore magna aliqua{" "}
      </p>
			</div>
      

      <div className={styles.Container}>
        <div className={`card ${styles.background}`}>

          <img className='ico' src={code} alt="" />
          <h3>Web Development</h3>
          <p>
            Our web development solutions ensure fast, secure, and scalable
            websites. From responsive designs to custom coding, our services
            cover everything you need to boost online presence
          </p>
					<a href="">View dashboard </a>
					
        </div>
        <div>
          <div className="card">
            <img className='ico' src={ux} alt="" />
            <h3>Ul/UX Design </h3>
            <p>
              Our Ul/UX design services provide an intuitive interface and user
              experience that makes it easy for users to achieve their goals
            </p>
            <a href="">View dashboard </a>
          </div>
          <div className="card">
            <img className='ico' src={branding} alt="" />
            <h3>Branding & Identity </h3>
            <p>
              Our branding service helps businesses craft a unique identity.
              From logo creation to brand strategy, we offer everything you
            </p>
						<a href="">View dashboard </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

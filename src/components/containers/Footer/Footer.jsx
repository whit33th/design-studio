import styles from "./Footer.module.scss";
import checked from "asset/ico/check.png"
import inst from 'asset/ico/instagram.svg'
import fb from 'asset/ico/facebook.svg'
import x from 'asset/ico/x.svg'
import linkedin from 'asset/ico/linkedin.png'
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topLayer}>
        <div className={styles.info}>
          <p style={{fontWeight: '300'}}>Sync Design</p>
          <h2>
            We elevate your brand <br /> with a dedicated design expert
          </h2>
          <p className="sText">whit33th. 2024</p>
        </div>
        <div>
          <p>Company</p>
          <a className="sText">Blog</a>
          <a className="sText">Careers</a>
          <a className="sText">Pricing</a>
        </div>
        <div>
          <p>Resources</p>
          <a className="sText">Documentation </a>
          <a className="sText">Papers</a>
          <a className="sText">Press Conferences </a>
        </div>
        <div>
          <p>Legal </p>
          <a className="sText">Terms of Service</a>
          <a className="sText">Privacy Policy</a>
          <a className="sText">Cookies Policy</a>
          <a className="sText">Data Processing</a>
        </div>
      </div>
      <hr />
      <div >
        <div className={styles.botInfo}>
          <img  src={checked} alt="" />
          <p > Active in all social networks</p>
        </div>
        <div className={styles.socialLinks}>
          <button>
            <img src={inst} alt="" />
            <span>Instagram</span>
          </button>
          <button>
            <img src={linkedin} alt="" />
            <span>Linkedin</span>
          </button>
          <button>
            <img src={fb} alt="" />
            <span>Facebook</span>
          </button>
          <button>
            <img src={x} alt="" />
            <span>Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import styles from "./Partners.module.scss";
import airbnb from 'asset/airbnb.webp'
import tesla from 'asset/Tesla.webp'
import canva from 'asset/Canva.webp'
import twitch from 'asset/Twitch.png'
import klarna from 'asset/Klarna.webp'
import starbucks from 'asset/Starbucks.webp'
function Partners() {
	return (
		<div className={styles.Container}>
			<p>Trusted Partner</p>
			<div className={styles.Partners}>
				<img src={airbnb} alt="" />
				<img src={tesla} alt="" />
				<img src={canva} alt="" />
				<img src={twitch} alt="" />
				<img src={klarna} alt="" />
				<img src={starbucks} alt="" />
			</div>
		</div>
	)
}

export default Partners
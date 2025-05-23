import style from './style.module.css'
import logo from '../../../images/logo.png';

const Logo = () => {
    return   (
    <>
    <a href="/" className={style.header_logo}>
        <img
          src={logo}
          alt=""
          className={style.header_logo_imeg}
          width="135"
          height="25"
          loading="lazy"
        />
      </a>
    </>
    )
}

export default Logo

import style from './style.module.css'
import cx from 'classnames'
import '../../../index.css'


const BurgerNav = () => {
    return (<div className={style.header_actions}>
        <button type="button" className={cx(style.header_book_button, style.button)}>
          Book now
        </button>
        <button className={style.header_burger_button} type="button" title="Open menu">
          <span className={style.visually_hidden}>Open menu</span>
          <span className={style.header_burger_button_line}></span>
          <span className={style.header_burger_button_line}></span>
          <span className={style.header_burger_button_line}></span>
        </button>
      </div>)
}
export default BurgerNav
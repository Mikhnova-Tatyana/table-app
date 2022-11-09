import { FC } from 'react';
import classes from './Header.module.scss';
import LanguageToggler from '../LanguageToggler/LanguageToggler';
import NavBlock from '../NavBlock/NavBlock';

const Header: FC = () => (
  <header>
    <div className={classes.wrapper}>
      <NavBlock />
      <LanguageToggler />
    </div>
  </header>
);

// const Header: FC = () => {
//   return (
//     <header className={classes.header}>
//       <div className={classes.header__menu}>
//         Header burger is going to be here:
//         <nav className={classes.nav}>
//           <ul className={classes.nav__list}>
//             <li className={classes.nav__item}>
//               <NavLink to="drivers">Drivers</NavLink>
//             </li>
//             <li className={classes.nav__item}>
//               <NavLink to="cars">Cars</NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

export default Header;

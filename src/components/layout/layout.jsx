import classes from '../../styles/Layout.module.css';
import Navbar from '../navbar/nav';

export default function Layout({children}) {
  return (
    <>
        <Navbar />
        <main className={classes.main} >
            <div className={classes.container}>
                {children}
            </div>
        </main>
    </>
  )
}

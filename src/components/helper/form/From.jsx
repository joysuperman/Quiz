import classes from '../../../styles/form.module.css'
export default function From({children, className, ...rest}) {
  return (
    <form className={`${className} ${classes.form}`}action="#" {...rest}>
        {children}
    </form>
  )
}

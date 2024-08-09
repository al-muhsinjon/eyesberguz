import { Link } from 'react-router-dom';

export const Button = ({className, spanClasses, href, onClick, children, px, py}) => {


    const classes = `relative flex items-center justify-center transition-colors text-white ${className} ${px} ${py}`;
    const spanClass = `relative z-10 text-nowrap flex item-center justify-center`;


    const renderButton = () => (
        <button className={classes} onClick={onClick} type='button'>
            <span className={`${spanClass} ${spanClasses}`}>{children}</span>
        </button>
    )

    const renderLink = () => (
        <Link className={classes} to={href}>
            <span className={`${spanClass} ${spanClasses}`}>{children}</span>
        </Link>
    )

    return href 
    ? renderLink() 
    : renderButton()
}

import { Button } from "../Button/Button"

export const CardButton = ({title, text, btnTxt, className}) => {

  const classes = `flex items-center p-10 flex-col rounded-xl justify-center transition-colors text-white ${className || ''} `;

  const textClass = `${title ? 'text-blue text-center mb-6 text-2xl' : 'text-green mb-6'}`;

  const renderHeading = () => (
    <div className={` ${classes} lg:w-[402px]`}>
      <div>
        <h3 className={`${textClass}`} >{title}</h3>
        <Button className={`rounded-xl bg-blue w-full`} to={'order'} py={`py-5`}>{btnTxt}</Button>
      </div>
  </div>
  )

  const renderParagraph = () => (
    <div className={`${classes} lg:w-[402px]`}>
      <p className={textClass}>{text}</p>

      <Button className={`rounded-xl bg-[#5DDF70] w-full`} py={`py-5`}>{btnTxt}</Button>
  </div>
  )


  return title
  ? renderHeading() 
  : renderParagraph()
}

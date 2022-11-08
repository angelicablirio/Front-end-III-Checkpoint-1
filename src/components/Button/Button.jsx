import './styles.css'

export const Button = ( {type='submit', onClick, value}) => {
  
    return(
      <>
        <button type={type} onClick={(event) => {
          if (onClick) {
            onClick(event);
          }
        }}>{value}</button>
      </>
    )
}
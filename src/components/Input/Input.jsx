import './styles.css'

export const Input = ( {type = 'text', onChange, value, htmlFor, name}) => {
  
    return(
      <>
        <label htmlFor={htmlFor}>{name}</label>
        <input type={type} value={value} onChange={(e) => {
          if (onChange) {
          onChange(e.target.value);
          }
        }}/>
      </>
    )
}
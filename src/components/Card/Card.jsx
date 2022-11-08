import './styles.css'

export function Card (props) {
  return (
    <div className="card" style={{backgroundColor: props.item.code}}>
      <p className="name">{props.item.name}</p>
      <p className="code">{props.item.code}</p>
    </div>
  )
}
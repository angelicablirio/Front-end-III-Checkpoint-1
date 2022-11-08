import { useState } from "react"
import { Card } from "./components/Card/Card"

function App() {

  const [allColors, setAllColors] = useState([])
  const [colorName, setColorName] = useState('')
  const [colorCode, setColorCode] = useState('')
  const [formularioErro, setFormularioErro] = useState(false)

  const validateColorName = (color) => {
    let colorName = color.trim();
    return colorName.length >= 3 ? colorName : false
  }

  const isHexadecimal = (color) => {
    let colorCode = color.trim()
    return /^#[0-9A-F]{6}$/i.test(colorCode);
  }

  const registerColor = (event) =>{
    event.preventDefault()

    const newColorRegister = {
        name: colorName,
        code: colorCode
    }

    if(!validateColorName(colorName) || !isHexadecimal(colorCode)) {

      setFormularioErro(true)

    }else {

      setFormularioErro(false)

      setAllColors([...allColors, newColorRegister])

      setColorName('')
      setColorCode('')
    }
}

  return (
    <div className="app">
      <div className="wrapped-form">
        <h1>ADICIONAR NOVA COR</h1>
        <form className={formularioErro ? 'formError' : ''}>
          <label htmlFor="name">Nome</label>
          <input type="text" value={colorName} onChange={event => setColorName(event.target.value)} />
          <label htmlFor="cor">Cor</label>
          <input type="color" value={colorCode} onChange={event => setColorCode(event.target.value)}/>
        </form>
        {
          formularioErro ? (
            <span>Por favor, verifique os dados inseridos no formulário</span>
          ) : null
        }
        <button type="submit" onClick={event => registerColor(event)}>ADICIONAR</button>
     </div>

      <h1>CORES FAVORITAS</h1>
      <section className="wrapped-colors">
            {allColors.map((color,index) => {
                        return (
                            <Card
                              key={index}  item={color}
                            />
                        )
                    }
                )
            }
        </section>
    </div>
  )
}

export default App
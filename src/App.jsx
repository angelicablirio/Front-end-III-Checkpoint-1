import { useState } from "react"
import { Button } from "./components/Button/Button"
import { Card } from "./components/Card/Card"
import { Input } from "./components/Input/Input"

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
        <h1 className="title">ADICIONAR NOVA COR</h1>
        <form className={formularioErro ? 'formError' : ''}>
          <Input htmlFor="name" name="Nome" value={colorName} onChange={setColorName} />
          <Input htmlFor="cor" name="Cor" value={colorCode} type="color" onChange={setColorCode} />
        </form>
        {
          formularioErro ? (
            <span>Por favor, verifique os dados inseridos no formulário</span>
          ) : null
        }
        <Button value="ADICIONAR" onClick={registerColor} />
     </div>

      <h1 className="title">CORES FAVORITAS</h1>
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
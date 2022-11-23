import { Container, Content, Row } from "./styles";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import { useState } from "react";

function App() {
  const [currentNum, setCurrentNum] = useState('0');
  const [firstNum, setFirstNum] = useState('0');
  const [operation, setOperation] = useState('');

  const onClear = () => {
    setCurrentNum('0');
    setFirstNum('0');
    setOperation('0')
  }

  const addNum = (number) => {
    setCurrentNum(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const numsSum = () => {
    if (firstNum === '0') {
      setFirstNum(String(currentNum))
      setCurrentNum('0')
      setOperation('+')
    } else {
      const sum = Number(firstNum) + Number(currentNum)
      setCurrentNum(String(sum))
      setOperation('')
    }
  }

  const numsSub = () => {
    if (firstNum === '0') {
      setFirstNum(String(currentNum))
      setCurrentNum('0')
      setOperation('-')
    } else {
      const sub = Number(firstNum) - Number(currentNum)
      setCurrentNum(String(sub))
      setOperation('')
    }
  }

  const numMult = () => {
    if (firstNum === '0') {
      setFirstNum(String(currentNum))
      setCurrentNum('0')
      setOperation('*')
    } else {
      const mult = Number(firstNum) * Number(currentNum)
      setCurrentNum(String(mult))
      setOperation('')
    }
  }

  const numDiv = () => {
    if (firstNum === '0') {
      setFirstNum(String(currentNum))
      setCurrentNum('0')
      setOperation('/')
    } else {
      const div = Number(firstNum) / Number(currentNum)
      setCurrentNum(String(div))
      setOperation('')
    }
  }

  const equals = () => {
    if (firstNum !== '0' && operation !== '' && currentNum !== '0'){
      switch (operation) {
        case '+':
          numsSum();
          break;
        
        case '-':
          numsSub();
          break;

        case '*':
          numMult();
          break;

        case '/':
          numDiv();
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container className="App">
      <Content>
        <Input value={currentNum}/>
        <Row>
          <Button label='*' onClick={numMult}/>
          <Button label='/' onClick={numDiv}/>
          <Button label='C' onClick={onClear}/>
          <Button label='0' onClick={() => addNum('0')}/>
        </Row>
        <Row>
          <Button label='7' onClick={() => addNum("7")}/>
          <Button label='8' onClick={() => addNum("8")}/>
          <Button label='9' onClick={() => addNum("9")}/>
          <Button label='+' onClick={numsSum}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => addNum("4")}/>
          <Button label='5' onClick={() => addNum("5")}/>
          <Button label='6' onClick={() => addNum("6")}/>
          <Button label='-'onClick={numsSub}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => addNum("1")}/>
          <Button label='2' onClick={() => addNum("2")}/>
          <Button label='3' onClick={() => addNum("3")}/>
          <Button label='=' onClick={equals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
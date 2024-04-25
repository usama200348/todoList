import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import innovadors from './download-removebg-preview.png'

function BasicExample() {
  return (
    <Nav className='bg-light'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <img src={innovadors}
        width={100}
        height={100}
        style={{marginLeft:30}}
        />
       
      </Nav.Item>
      
          </Nav>
  );
}

export default BasicExample;
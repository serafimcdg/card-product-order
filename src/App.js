import './App.css';
import { InputGroup,  FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar'


function App() {
  return (
    <div className="board">
      <div className="grid1">
        <div className="status-bar">
          <div className="status"><h3>Ativo</h3></div>
          <div className="timer"> 
            <InputGroup.Text className="first-timer">
            <div className="status-timer1">
              <p>Tempo Produtivo</p>
              <h2>12:00:00</h2>
            </div>
            </InputGroup.Text>
            <InputGroup.Text className="second-timer">
            <div className="status-timer1">
              <p>Tempo Ocioso</p>
              <h2>11:00:00</h2>
            </div>
            </InputGroup.Text>
          </div>
        </div>
        <div class="table-info">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Ordem</InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder="2154876"
              aria-label="Disabled input example"
              disabled
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Produto</InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder="COL-CDR-MN-TEST"
              aria-label="Disabled input example"
              disabled
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Comprimento</InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder="4000"
              aria-label="Disabled input example"
              disabled
            />
          </InputGroup>
        </div>
      </div>
      <div className="grid2">
        <div className="column-info">
          <div className="column-status">
            <div className="info-1">
              <p>Objetivo</p>
              <h3>197</h3>
            </div>
            <div className="info-2">
              <p>Delta</p>
              <h3>35</h3>
            </div>
            <div className="info-3">
              <p>Atual:</p>
              <h3>162</h3>
            </div>
          </div>
          <div className="progress-bar1">
            <ProgressBar>
              <ProgressBar striped variant="success" now={70} key={1} />
              <ProgressBar variant="warning" now={20} key={2} />
              <ProgressBar striped variant="danger" now={10} key={3} />
            </ProgressBar>
          </div>
          <div className="progress-status">
              <div className="adjust-1">
              <InputGroup.Text id="inputGroup-sizing-default">37</InputGroup.Text>
              </div>
              <div className="adjust-2">
              <InputGroup.Text id="inputGroup-sizing-default">33</InputGroup.Text>
              </div>
          </div>
          <div className="progress-status2">
          <div className="adjust-3">
              <InputGroup.Text id="inputGroup-sizing-default">125</InputGroup.Text>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

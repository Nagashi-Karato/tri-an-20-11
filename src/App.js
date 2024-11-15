import './assets/style/style.css';
import './assets/style/wickedcss.min.css'
import './assets/js/javascript.js'

const giftBox = <img id='giftbox' src='./assets/img/giftbox.png' className='giftbox floater' alt='gift box' />
function App() {
  return (
    <main className="bg">
      <div className="container">
      <div className="content">
      <h1>Bạn có quà nè!</h1>
      <p>Nhấn vào đây để nhận nà &lt;3</p>
      </div>
        {giftBox}
      </div>
    </main>
  );
}

export default App;

import dva from 'dva';
import './index.css';
import { hashHistory } from 'dva/router'

// 1. Initialize
const app = dva({
  history: hashHistory,
  onError (error) {
    console.error('app onError -- ', error)
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

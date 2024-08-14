import ReactDOM from 'react-dom/client'
import './index.css'
import AppProvider from './providers'
import AppRouter from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './i18n';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
     <AppProvider>
      <AppRouter />
      <ToastContainer />
    </AppProvider>
  // </React.StrictMode>
)

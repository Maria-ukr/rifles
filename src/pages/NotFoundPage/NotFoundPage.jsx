import { useNavigate } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>NotFoundPage</div>
      <Footer />
    </>
  );
}

export default NotFoundPage;

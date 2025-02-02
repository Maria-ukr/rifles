import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

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

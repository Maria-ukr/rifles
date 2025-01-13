import { useNavigate } from 'react-router-dom';
import Header from '../../layout/Header/Header';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >Back</button>
      <div>NotFoundPage</div>
    </>
  );
}

export default NotFoundPage;

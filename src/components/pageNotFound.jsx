import {Link} from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h2>404 - Página no encontrada</h2>
        <p>La ruta solicitada no existe.</p>
        <Link to='/' className= 'btn btn-dark'>-volver al menu principal-</Link>
    </div>
);

export default PageNotFound;
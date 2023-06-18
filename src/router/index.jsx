//react router
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//pages
import About from '../pages/About';
import Catalog from '../pages/Catalog';
import CreatePost from '../pages/CreatePost';
import Dashboard from '../pages/Dashboard';
import EditPost from '../pages/EditPost';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound/';
import Post from '../pages/Post';
import Register from '../pages/Register';
import Search from '../pages/Search';

//layouts
import { Layout } from '../layouts/Layout';

// redirects
import { RedirectIfAuthenticated } from '../redirects/RedirectIfAuthenticated';
import { RedirectIfNotAdmin } from '../redirects/RedirectIfNotAdmin';
import { RedirectIfNotAuthenticated } from '../redirects/RedirectIfNotAuthenticated';
import { RedirectIfNotAuthorized } from '../redirects/RedirectIfNotAuthorized';

export const router = createBrowserRouter(
  createRoutesFromElements(
    // layout que vai ser herdado pelas rotas da aplicação
    <Route path='/' element={<Layout />}>
      
      {/* Rotas disponível para usuários deslogados */}
      <Route element={<RedirectIfNotAuthenticated />}>
        <Route path='/login' element={<Login />} />;
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Route>

      {/* Rotas que só podem ser acessadas após efetuar o login */}
      <Route element={<RedirectIfAuthenticated />}>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/posts/:id' element={<Post />} />

        {/* Rotas que só podem ser acessadas pelo admin e funcionário */}
        <Route element={<RedirectIfNotAuthorized />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/posts/editpost/:id' element={<EditPost />} />
        </Route>

        {/* Rotas restritas apenas para admin */}
        <Route element={<RedirectIfNotAdmin />}>
          <Route path='/register' element={<Register />} />
        </Route>

        {/* Rota não encontrada */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Route>,
  ),
);

import React from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
    <Container>
      <BlogForm />
      <BlogList />
      <Footer />
    </Container>
  </div>
)

export default App;

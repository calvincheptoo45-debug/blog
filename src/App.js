import Header from "./components/Header";
import About from "./components/About";
import Article from "./components/Article";
import Footer from "./components/Footer";
import posts from "./blog";

function App() {
  const articleComponents = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));

  return (
    <div className="App">
      <Header />
      <About />
      {articleComponents}
      <Footer />
    </div>
  );
}

export default App;

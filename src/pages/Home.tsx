import logo from '../logo.svg';
import HamburgerMenu from '../components/HamburgerMenu.tsx';
import SearchBar from '../components/SearchBar.tsx';
import Cards from '../components/Cards.tsx';
import recipesData from '../testing-data/data.json';

function Home() {
  return (
    <header className="App-header" style={{ position: 'relative' }}>

      <h1>Recipe Book</h1>
      <HamburgerMenu>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/recipes" style={{ color: 'inherit', textDecoration: 'none' }}>Recipes</a></li>
            <li><a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
          </ul>
        </nav>
      </HamburgerMenu>
    <SearchBar options={["Apple Pie", "Banana Bread", "Carrot Cake", "Doughnuts", "Eclairs"]} />
    <div style={{ marginTop: 32 }}>
      <Cards recipes={recipesData} />
    </div>
    </header>
  );
}

export default Home;
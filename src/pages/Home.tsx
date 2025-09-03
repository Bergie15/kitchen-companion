import logo from '../logo.svg';
import HamburgerMenu from '../components/HamburgerMenu.tsx';
import SearchBar from '../components/SearchBar.tsx';
import Cards from '../components/Cards.tsx';
import recipesData from '../testing-data/data.json';
import Button from '@mui/material/Button';

function Home() {
  return (
    <header className="App-header" style={{ position: 'relative' }}>

      <h1>Recipe Book</h1>
      <HamburgerMenu>
        <nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button fullWidth variant="contained" sx={{ mb: 1 }} href="/">Home</Button>
            <Button fullWidth variant="contained" sx={{ mb: 1 }} href="/recipes">Recipes</Button>
            <Button fullWidth variant="contained" sx={{ mb: 1 }} href="/ask-ai">Ask AI for a recipe</Button>
            <Button fullWidth variant="contained" sx={{ mb: 1 }} href="/nearby-fast-food">Find a nearby fast food</Button>
            <Button fullWidth variant="contained" sx={{ mb: 1 }} href="/shopping-list">Shopping list</Button>
            <Button fullWidth variant="contained" sx={{ mb: 1 }} href="/calendar">Calendar</Button>
          </div>
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
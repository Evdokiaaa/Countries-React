import Controls from "./Components/Controls";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Controls /> {/*children*/}
      </Main>
    </>
  );
}

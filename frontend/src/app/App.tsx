import reactLogo from "/react.svg";
import globexLogo from "../shared/assets/images/globex_logo.png";
import viteLogo from "/vite.svg";
import "./styles/App.scss";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectTempSearchQuery } from "../store/features/tempSelector";
import { CollaboratorCard } from "../shared/components/CollaboratorCard/CollaboratorCard.component";
import { tempSearchActions } from "../store/features/tempSlice";

import { mockSubdivisions } from "./config/mockData";
import { processSubdivisions } from "../shared/utils/helpers/processSubdivisions";

// import { useGetSubdivisionsQuery } from "./states/services/tempApi";

function App() {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => selectTempSearchQuery(state));

  // Получаем данные из API
  // const { data, error, isLoading } = useGetSubdivisionsQuery("");

  // Получаем данные из mock'а
  const { data, error, isLoading } = {
    data: mockSubdivisions,
    error: false,
    isLoading: false,
  };

  return (
    <>
      <div className="logo__container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://portal.globexit.ru/wiki_programming/6740557778763125319?mode=wiki_base_20212_programming&object_id=6740557778763125319" target="_blank">
        <img src={globexLogo} className="logo globex" alt="База знаний Глобэкс АйТи" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <input
        className="searchbar"
        placeholder="Поиск по названию..."
        value={query}
        onChange={(e) => dispatch(tempSearchActions.setQuery(e.target.value))}
      />

      <div className="subdivisions">
        {isLoading && <div>Загрузка...</div>}

        {!isLoading &&
          !error &&
          processSubdivisions(data!, query).map((obj) => (
            <CollaboratorCard
              key={obj.id}
              id={obj.id}
              code={obj.code}
              name={obj.name}
              org_name={obj.org_name}
            />
          ))}
      </div>
    </>
  );
}

export default App;

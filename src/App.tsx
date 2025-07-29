import { Routes, Route } from "react-router";
import { MainLayout } from "./layout";
import { CreatePage, DeletePage, FindAllPage, FindOnePage, UpdatePage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<FindAllPage />} />
          <Route path="product/:id" element={<FindOnePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="update/:id" element={<UpdatePage />} />
          <Route path="delete/:id" element={<DeletePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

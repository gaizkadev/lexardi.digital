import Header from "../components/Header";
export default function About() {
  return (
    <>
      <Header />
      <div className="flex mx-auto container">
        <div className="bg-red-200 w-full ">
          <p>columna izda</p>
        </div>
        <aside className="bg-blue-200 w-1/2">
          <p>columna dcha</p>
        </aside>
      </div>
    </>
  );
}

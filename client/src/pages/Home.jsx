import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
        <div className="d-felx gap-3 m-b-4">
        <AddClientModal />
        </div>
        <hr/>
        <Projects />
        <Clients />
    </>
  )
}

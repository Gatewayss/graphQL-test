import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
        <div className="d-flex gap-3 m-b-4">
        <AddClientModal />
        <AddProjectModal />
        </div>
        <hr/>
        <Projects />
        <Clients />
    </>
  )
}

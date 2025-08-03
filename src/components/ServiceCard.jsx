import { IconContext } from "react-icons";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
      <IconContext.Provider value={{ className: "text-accent text-4xl mb-4" }}>
        <Icon />
      </IconContext.Provider>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

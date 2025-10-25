// src/components/ServiceCard.jsx
import { IconContext } from "react-icons"
import { useState } from "react"

export default function ServiceCard({ icon: Icon, title, description }) {
  const [show, setShow] = useState(false)
  return (
    <div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ zIndex: show ? 20 : "auto" }}
    >
      <IconContext.Provider value={{ className: "text-accent text-4xl mb-4" }}>
        <Icon />
      </IconContext.Provider>
      <h3 className="text-xl dark:text-gray-500 font-semibold mb-2">{title}</h3>
      {!show && (
        <p className="text-gray-600 dark:text-gray-200">{description.split(".")[0]}.</p>
      )}
      {show && (
        <div className="mt-4 text-gray-700 dark:text-gray-200">
          {description}
        </div>
      )}
    </div>
  )
}

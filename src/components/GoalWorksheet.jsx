// src/components/GoalWorksheet.jsx
import React, { useState } from 'react'

export default function GoalWorksheet() {
  const [goals, setGoals] = useState([{ desc: '', target: '' }])

  const updateGoal = (i, field, value) => {
    const gs = [...goals]
    gs[i][field] = value
    setGoals(gs)
  }

  const addGoal = () => {
    setGoals([...goals, { desc: '', target: '' }])
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <h3 className="text-2xl font-semibold mb-4">Goal-Setting Worksheet</h3>
      <div id="worksheet" className="space-y-4">
        {goals.map((g, i) => (
          <div key={i} className="space-y-2">
            <input
              type="text"
              placeholder="Short-term Goal"
              value={g.desc}
              onChange={e => updateGoal(i, 'desc', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="date"
              value={g.target}
              onChange={e => updateGoal(i, 'target', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={addGoal}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
        >
          Add Another
        </button>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition"
        >
          Print Worksheet
        </button>
      </div>
    </div>
)
}

import React from "react";

const fetchTaskCalendar = async () => {
  const resp = await fetch(process.env.API_URL);
  const data = await resp.json();
  return data;
};

const Calendar = async () => {
  const taskCalendar = await fetchTaskCalendar();
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">Próximos eventos</h2>
        <ul>
          {taskCalendar.map((task) => (
            <li
              key={task.id}
              className="bg-white rounded-lg shadow-lg p-4 mb-4"
            >
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <p className="text-gray-600">
                {task.eventDay} {task.startTime} - {task.endTime}
              </p>
              <p className="text-gray-600">
                Asistencia esperada: {task.expectedAssistance}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">Calendario</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
          {/* Añade aquí tu código para el calendario */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

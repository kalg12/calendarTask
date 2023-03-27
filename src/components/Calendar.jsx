import React from "react";

const Calendar = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">Próximos eventos</h2>
        <ul>
          <li className="mb-2">
            <span className="font-bold">Evento 1:</span>
            <span className="ml-2">Fecha del evento</span>
          </li>
          <li className="mb-2">
            <span className="font-bold">Evento 2:</span>
            <span className="ml-2">Fecha del evento</span>
          </li>
          <li className="mb-2">
            <span className="font-bold">Evento 3:</span>
            <span className="ml-2">Fecha del evento</span>
          </li>
          {/* Añade aquí más eventos */}
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

const fetchTaskCalendar = async () => {
  const resp = await fetch(`${process.env.API_URL}?timestamp=${Date.now()}`);
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
          {taskCalendar.map((event) => (
            <li key={event.id}>
              <div className="bg-white rounded-lg shadow-lg p-4 flex justify-between items-center m-3">
                <div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="text-gray-600 mb-2">Fecha: {event.eventDay}</p>
                  <p className="text-gray-600 mb-2">{`Horario: ${event.startTime} - ${event.endTime}`}</p>

                  <p className="text-gray-600 mb-2">
                    Asistentes esperados: {event.expectedAssistance}
                  </p>
                </div>
                <div className="flex items-center">
                  <button className="bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                    Añadir a mi calendario
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">Calendario</h2>
        <div className="bg-white rounded-lg shadow-lg p-4"></div>
      </div>
    </div>
  );
};

export default Calendar;

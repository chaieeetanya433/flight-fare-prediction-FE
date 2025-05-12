// src/FlightPricePredictor.js

import { useState } from 'react';
import axios from 'axios';

function FlightPricePredictor() {
  const [formData, setFormData] = useState({
    airline: '',
    source_city: '',
    departure_time: '',
    stops: '',
    arrival_time: '',
    destination_city: '',
    class: '',
    departure_date: '',
    duration: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', formData);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/predict`, formData);
      console.log('API Response:', response.data);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center py-10 font-mono">
      <h1 className="text-4xl font-bold text-black mb-10 underline decoration-2 decoration-blue-500 underline-offset-8">
        Flight Price Prediction
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-black shadow-[6px_6px_0px_#000] rounded-lg p-8 w-full max-w-lg space-y-6"
      >
        {/* Reusable Select Input */}
        {[
          { label: "Airline", name: "airline", options: ["SpiceJet", "AirAsia", "Vistara", "GO_FIRST", "Indigo", "Air_India"] },
          { label: "Source City", name: "source_city", options: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Hyderabad", "Chennai"] },
          { label: "Departure Time", name: "departure_time", options: ["Evening", "Early_Morning", "Morning", "Afternoon", "Night", "Late_Night"] },
          { label: "Stops", name: "stops", options: ["zero", "one", "two_or_more"] },
          { label: "Arrival Time", name: "arrival_time", options: ["Night", "Morning", "Early_Morning", "Afternoon", "Evening", "Late_Night"] },
          { label: "Destination City", name: "destination_city", options: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Hyderabad", "Chennai"] },
          { label: "Class", name: "class", options: ["Economy", "Business"] },
        ].map(({ label, name, options }) => (
          <div key={name} className="space-y-1 w-full">
            <label className="block text-sm font-semibold text-black">{label}</label>
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="block w-full px-4 py-2 border-2 border-black rounded-md shadow-[2px_2px_0px_#000] focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select {label}</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt.replaceAll('_', ' ')}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Flight Duration */}
        <div className="space-y-1 w-full">
          <label className="block text-sm font-semibold text-black">Flight Duration (hours)</label>
          <input
            type="number"
            step="0.01"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="0"
            placeholder="e.g., 2.5"
            className="block w-full px-4 py-2 border-2 border-black rounded-md shadow-[2px_2px_0px_#000] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-xs text-gray-500">Use decimal hours (e.g., 2.5 for 2h 30m)</p>
        </div>

        {/* Departure Date */}
        <div className="space-y-1 w-full">
          <label className="block text-sm font-semibold text-black">Departure Date</label>
          <input
            type="date"
            name="departure_date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.departure_date}
            onChange={handleChange}
            className="block w-full px-4 py-2 border-2 border-black rounded-md shadow-[2px_2px_0px_#000] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-300 text-black font-bold py-2 rounded-md border-2 border-black shadow-[3px_3px_0px_#000] hover:scale-[1.02] transition-transform"
        >
          Predict Price →
        </button>
      </form>

      {prediction !== null && (
        <div className="mt-6 p-4 bg-lime-200 border-2 border-black shadow-[3px_3px_0px_#000] rounded-md text-black">
          <h2 className="text-xl font-bold">Estimated Price: ₹{prediction}</h2>
        </div>
      )}
    </div>

  );
}

export default FlightPricePredictor;

# Flight Fare Prediction

![Flight Fare Prediction](https://raw.githubusercontent.com/chaieeetanya433/flight-fare-prediction/main/banner.png)

## 📋 Overview

A machine learning-powered web application that predicts domestic flight prices within India based on key parameters such as airline, departure/arrival cities, travel class, time of flights, stops, and days until departure. The system achieves 97.29% accuracy (R² score) using a Random Forest Regressor model.

## ✨ Features

- **Accurate Price Predictions**: Predict flight fares with high accuracy
- **User-friendly Interface**: Modern, responsive design built with React and TailwindCSS
- **Real-time Results**: Instant fare predictions through API integration
- **Feature Importance Analysis**: Understand which factors impact flight pricing the most

## 🛠️ Tech Stack

### Frontend
- **Framework**: React with Vite
- **Styling**: TailwindCSS
- **Deployment**: Vercel

### Backend
- **Language**: Python
- **Framework**: Flask REST API
- **ML Library**: scikit-learn
- **Deployment**: Render

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14+)
- Python (v3.8+)
- pip

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/chaieeetanya433/flight-fare-prediction-backend.git
cd flight-fare-prediction-backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```

The API will be available at `http://localhost:5000`

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/chaieeetanya433/flight-fare-prediction-frontend.git
cd flight-fare-prediction-frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📊 Dataset

The model was trained on a custom dataset (`Clean_Dataset.csv`) containing ~10,000 flight records with the following features:

| Feature | Description |
|---------|-------------|
| airline | Airline company (e.g., Indigo, Air India) |
| source_city | Departure city |
| departure_time | Departure time slot (Morning, Afternoon, Evening, Night) |
| stops | Number of stops (zero, one, two_or_more) |
| arrival_time | Arrival time slot |
| destination_city | Arrival city |
| class | Travel class (Economy/Business) |
| duration | Flight duration in hours |
| days_left | Days left until departure |
| price | Final ticket price (target variable) |

## 🤖 Machine Learning Model

- **Algorithm**: Random Forest Regressor
- **Preprocessing**: OneHotEncoder for categorical features, log transformation for price
- **Performance**: 
  - R² Score: 0.9729
  - MSE: 10,831,571.68
- **Key Features**: airline, days_left, and class were identified as the most influential features

## 🌟 Future Improvements

- Real-time data fetching from airline APIs
- Incorporating seasonal trends, discounts, and holidays
- Price history tracking and alerts for fare drops
- Mobile application development

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Demo](https://flight-fare-prediction.vercel.app)

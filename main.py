import joblib
import pandas as pd
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel


# ============================================
# Load model and preprocessor
# ============================================

model_data = joblib.load('coffee_cupping_model_v2.pkl')

model = model_data['model']
preprocessor = model_data['preprocessor']

print('Model and preprocessor loaded successfully!')


# ============================================
# Create FastAPI application
# ============================================

app = FastAPI()


# ============================================
# Serve frontend files
# ============================================

app.mount(
    '/static',
    StaticFiles(directory='.'),
    name='static'
)


@app.get('/app')
def frontend():
    return FileResponse('index.html')


# ============================================
# API home / health check
# ============================================

@app.get('/')
def home():
    return {
        'message': 'Coffee Cupping Score Prediction API is running!'
    }


# ============================================
# Input data model
# ============================================

class CoffeeFeatures(BaseModel):
    Country_of_Origin: str
    Region: str
    Number_of_Bags: int
    In_Country_Partner: str
    Harvest_Year: float
    Variety: str
    Processing_Method: str
    Moisture: float
    Category_One_Defects: int
    Quakers: int
    Color: str
    Category_Two_Defects: int
    Certification_Body: str
    unit_of_measurement: str
    altitude_mean_meters: float
    altitude_range: float


# ============================================
# Prediction endpoint
# ============================================

@app.post('/predict')
def predict_score(features: CoffeeFeatures):

    input_data = {
        'Country.of.Origin': features.Country_of_Origin,
        'Region': features.Region,
        'Number.of.Bags': features.Number_of_Bags,
        'In.Country.Partner': features.In_Country_Partner,
        'Harvest.Year': features.Harvest_Year,
        'Variety': features.Variety,
        'Processing.Method': features.Processing_Method,
        'Moisture': features.Moisture,
        'Category.One.Defects': features.Category_One_Defects,
        'Quakers': features.Quakers,
        'Color': features.Color,
        'Category.Two.Defects': features.Category_Two_Defects,
        'Certification.Body': features.Certification_Body,
        'unit_of_measurement': features.unit_of_measurement,
        'altitude_mean_meters': features.altitude_mean_meters,
        'altitude_range': features.altitude_range
    }

    input_df = pd.DataFrame([input_data])

    print('Input data:')
    print(input_df)

    input_processed = preprocessor.transform(
        input_df
    )

    prediction = model.predict(
        input_processed
    )

    return {
        'predicted_total_cup_points': round(
            float(prediction[0]),
            2
        )
    }
<div align="center">

<h1>☕ Coffee Cupping Score Prediction</h1>

<p>
An end-to-end <strong>Machine Learning Regression Project</strong> that predicts
<strong>Total Cup Points</strong> for Arabica coffee using origin, region,
processing, defect, moisture, altitude, and production-related features.
</p>

<p>
<a href="https://coffee-cupping-score-prediction.onrender.com"><strong>🌐 Live Demo</strong></a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="https://github.com/PavanIllal/Coffee-Cupping-Score-Prediction"><strong>💻 GitHub Repository</strong></a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="https://coffee-cupping-score-prediction.onrender.com/docs"><strong>⚡ API Docs</strong></a>
</p>

</div>

<hr>

<h2>📌 Project Overview</h2>

<p>
Coffee quality is evaluated through a standardized cupping process in which trained
cuppers score different sensory and quality characteristics. This project builds a
machine learning regression system that predicts the <strong>Total Cup Points</strong>
of a coffee lot without using the sensory scoring variables that directly contribute
to the final cup score.
</p>

<p>The project includes:</p>

<ul>
  <li>Data cleaning and preprocessing</li>
  <li>Exploratory Data Analysis (EDA)</li>
  <li>Feature engineering</li>
  <li>Feature selection</li>
  <li>Machine learning model comparison</li>
  <li>Hyperparameter tuning</li>
  <li>Random Forest regression</li>
  <li>FastAPI backend</li>
  <li>HTML, CSS and JavaScript frontend</li>
  <li>Deployment on Render</li>
</ul>

<hr>

<h2>🎯 Objective</h2>

<p>
The main objective is to develop a machine learning model that predicts a coffee
lot's <strong>Total Cup Points</strong> from production and quality-related features.
The prediction can be used as an additional analytical tool for understanding
factors associated with coffee quality.
</p>

<hr>

<h2>📊 Dataset</h2>

<p>
The project uses the <strong>Coffee Quality Institute Arabica Coffee Quality Database</strong>.
</p>

<table>
  <tr>
    <th align="left">Item</th>
    <th align="left">Value</th>
  </tr>
  <tr>
    <td>Records after cleaning</td>
    <td><strong>1,310</strong></td>
  </tr>
  <tr>
    <td>Predictive features</td>
    <td><strong>16</strong></td>
  </tr>
  <tr>
    <td>Target variable</td>
    <td><code>Total.Cup.Points</code></td>
  </tr>
</table>

<p>
Sensory scoring variables were excluded from the predictive feature set to reduce
target leakage because those variables directly contribute to the overall cup score.
</p>

<hr>

<h2>🧹 Data Preprocessing</h2>

<ul>
  <li>Removed the invalid record with an overall score of zero.</li>
  <li>Investigated and removed abnormal altitude observations.</li>
  <li>Checked and removed duplicate records.</li>
  <li>Removed unnecessary identifier and metadata columns.</li>
  <li>Converted <code>Bag.Weight</code> to numeric format and evaluated its usefulness.</li>
  <li>Extracted year information from <code>Harvest.Year</code>.</li>
  <li>Filled missing categorical values with <code>Unknown</code>.</li>
  <li>Filled numerical missing values using median imputation.</li>
  <li>Grouped low-frequency regions into <code>Other</code>.</li>
  <li>Created <code>altitude_range</code> from high and low altitude values.</li>
  <li>Dropped original low/high altitude columns after feature engineering.</li>
  <li>Verified the final modeling dataset for missing values and duplicates.</li>
</ul>

<hr>

<h2>🔎 Final Predictive Features</h2>

<table>
  <tr>
    <th>#</th>
    <th align="left">Feature</th>
  </tr>
  <tr><td>1</td><td><code>Country.of.Origin</code></td></tr>
  <tr><td>2</td><td><code>Region</code></td></tr>
  <tr><td>3</td><td><code>Number.of.Bags</code></td></tr>
  <tr><td>4</td><td><code>In.Country.Partner</code></td></tr>
  <tr><td>5</td><td><code>Harvest.Year</code></td></tr>
  <tr><td>6</td><td><code>Variety</code></td></tr>
  <tr><td>7</td><td><code>Processing.Method</code></td></tr>
  <tr><td>8</td><td><code>Moisture</code></td></tr>
  <tr><td>9</td><td><code>Category.One.Defects</code></td></tr>
  <tr><td>10</td><td><code>Quakers</code></td></tr>
  <tr><td>11</td><td><code>Color</code></td></tr>
  <tr><td>12</td><td><code>Category.Two.Defects</code></td></tr>
  <tr><td>13</td><td><code>Certification.Body</code></td></tr>
  <tr><td>14</td><td><code>unit_of_measurement</code></td></tr>
  <tr><td>15</td><td><code>altitude_mean_meters</code></td></tr>
  <tr><td>16</td><td><code>altitude_range</code></td></tr>
</table>

<h3>🚫 Sensory Features Excluded to Avoid Leakage</h3>

<p>
<code>Aroma</code>,
<code>Flavor</code>,
<code>Aftertaste</code>,
<code>Acidity</code>,
<code>Body</code>,
<code>Balance</code>,
<code>Uniformity</code>,
<code>Clean.Cup</code>,
<code>Sweetness</code>,
<code>Cupper.Points</code>
</p>

<hr>

<h2>📈 Exploratory Data Analysis</h2>

<p>EDA was performed to understand:</p>

<ul>
  <li>Target distribution</li>
  <li>Numerical feature distributions</li>
  <li>Categorical feature distributions</li>
  <li>Missing values</li>
  <li>Duplicate records</li>
  <li>Feature relationships with the target</li>
  <li>Outliers and abnormal observations</li>
  <li>Correlation patterns</li>
</ul>

<table>
  <tr>
    <th align="left">Target Statistic</th>
    <th>Value</th>
  </tr>
  <tr><td>Mean</td><td>82.18</td></tr>
  <tr><td>Standard Deviation</td><td>2.69</td></tr>
  <tr><td>Minimum</td><td>59.83</td></tr>
  <tr><td>Median</td><td>82.50</td></tr>
  <tr><td>Maximum</td><td>90.58</td></tr>
</table>

<p>
Most observations were concentrated between approximately
<strong>80 and 85 Total Cup Points</strong>.
</p>

<hr>

<h2>⚙️ Machine Learning Pipeline</h2>

<h3>Numerical Features</h3>

<p>
Numerical features were standardized using <code>StandardScaler</code>.
</p>

<h3>Categorical Features</h3>

<p>
Categorical variables were transformed using
<code>OneHotEncoder(handle_unknown='ignore')</code>.
</p>

<p>
A <code>ColumnTransformer</code> combines both preprocessing pipelines.
</p>

<table>
  <tr>
    <th align="left">Processed Dataset</th>
    <th align="left">Shape</th>
  </tr>
  <tr>
    <td>Training data</td>
    <td><strong>1,048 × 186</strong></td>
  </tr>
  <tr>
    <td>Testing data</td>
    <td><strong>262 × 186</strong></td>
  </tr>
</table>

<hr>

<h2>🤖 Model Comparison</h2>

<p>Several regression algorithms were evaluated:</p>

<ul>
  <li>Random Forest Regressor</li>
  <li>Linear Regression</li>
  <li>Gradient Boosting Regressor</li>
  <li>XGBoost</li>
  <li>Decision Tree Regressor</li>
</ul>

<p>
<strong>Random Forest</strong> produced the strongest overall test performance
among the evaluated models and was selected for hyperparameter tuning.
</p>

<hr>

<h2>🔧 Hyperparameter Tuning</h2>

<p>
The Random Forest model was optimized using <code>RandomizedSearchCV</code>.
</p>

<table>
  <tr><th align="left">Configuration</th><th align="left">Value</th></tr>
  <tr><td>Parameter combinations</td><td>30</td></tr>
  <tr><td>Cross-validation</td><td>5-fold</td></tr>
  <tr><td>Scoring</td><td>R²</td></tr>
  <tr><td>Random state</td><td>42</td></tr>
</table>

<h3>Best Parameters</h3>

<pre><code>{
    'n_estimators': 500,
    'min_samples_split': 2,
    'min_samples_leaf': 1,
    'max_features': 'log2',
    'max_depth': None
}</code></pre>

<hr>

<h2>🏆 Final Model Performance</h2>

<table>
  <tr>
    <th align="left">Metric</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>MAE</td>
    <td><strong>1.413</strong></td>
  </tr>
  <tr>
    <td>RMSE</td>
    <td><strong>2.071</strong></td>
  </tr>
  <tr>
    <td>R²</td>
    <td><strong>0.394</strong></td>
  </tr>
</table>

<p>
The tuned Random Forest explains approximately <strong>39.4%</strong> of the
variance in the held-out test data.
</p>

<hr>

<h2>⭐ Feature Importance</h2>

<table>
  <tr>
    <th align="left">Feature</th>
    <th>Importance</th>
  </tr>
  <tr><td><code>Category.Two.Defects</code></td><td>0.1261</td></tr>
  <tr><td><code>altitude_mean_meters</code></td><td>0.0831</td></tr>
  <tr><td><code>Number.of.Bags</code></td><td>0.0785</td></tr>
  <tr><td><code>Moisture</code></td><td>0.0724</td></tr>
  <tr><td><code>Harvest.Year</code></td><td>0.0550</td></tr>
  <tr><td><code>Category.One.Defects</code></td><td>0.0375</td></tr>
  <tr><td><code>altitude_range</code></td><td>0.0225</td></tr>
</table>

<hr>

<h2>🚀 FastAPI Application</h2>

<p>
The trained model and preprocessing pipeline are stored together in:
</p>

<pre><code>coffee_cupping_model_v2.pkl</code></pre>

<p>The FastAPI application performs the following workflow:</p>

<ol>
  <li>Receives coffee lot information.</li>
  <li>Creates a Pandas DataFrame.</li>
  <li>Applies the saved preprocessing pipeline.</li>
  <li>Generates a prediction using the trained Random Forest model.</li>
  <li>Returns the predicted Total Cup Points.</li>
</ol>

<h3>API Endpoint</h3>

<pre><code>POST /predict</code></pre>

<h3>Example API Response</h3>

<pre><code>{
    "predicted_total_cup_points": 88.91
}</code></pre>

<h3>Swagger Documentation</h3>

<p>
<a href="https://coffee-cupping-score-prediction.onrender.com/docs">
https://coffee-cupping-score-prediction.onrender.com/docs
</a>
</p>

<hr>

<h2>🖥️ Web Application</h2>

<p>The frontend is built using:</p>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<p>
The frontend collects coffee information, sends it to the FastAPI
<code>/predict</code> endpoint and displays the predicted score using a visual gauge.
</p>

<table>
  <tr>
    <th align="left">Predicted Score</th>
    <th align="left">Quality Category</th>
  </tr>
  <tr>
    <td>90 and above</td>
    <td><strong>Outstanding</strong></td>
  </tr>
  <tr>
    <td>85 to below 90</td>
    <td><strong>Excellent</strong></td>
  </tr>
  <tr>
    <td>80 to below 85</td>
    <td><strong>Very good — specialty grade</strong></td>
  </tr>
  <tr>
    <td>Below 80</td>
    <td><strong>Below specialty threshold</strong></td>
  </tr>
</table>

<hr>

<h2>📸 Application Screenshots</h2>

<div align="center">

<h3>Application Interface</h3>
<img src="screenshot/Screenshot%202026-09-07%20153101.png" alt="Coffee Cupping Score Prediction application" width="850">

<br><br>

<h3>Prediction Form</h3>
<img src="screenshot/Screenshot%202026-09-07%20153431.png" alt="Coffee prediction input form" width="850">

<br><br>

<h3>Prediction Result</h3>
<img src="screenshot/Screenshot%202026-09-07%20153826.png" alt="Coffee cupping prediction result" width="850">

</div>

<hr>

<h2>📁 Project Structure</h2>

<pre><code>Coffee-Cupping-Score-Prediction/
│
├── dataset/
│   └── arabica_data_cleaned.csv
│
├── screenshot/
│   ├── Screenshot 2026-09-07 153101.png
│   ├── Screenshot 2026-09-07 153431.png
│   └── Screenshot 2026-09-07 153826.png
│
├── Coffee_Quality_Database.ipynb
├── coffee_cupping_model_v2.pkl
├── main.py
├── index.html
├── script.js
├── style.css
├── requirements.txt
├── .gitignore
└── README.md
</code></pre>

<hr>

<h2>🛠️ Technologies Used</h2>

<table>
  <tr>
    <th align="left">Category</th>
    <th align="left">Technologies</th>
  </tr>
  <tr>
    <td>Programming & Data</td>
    <td>Python, Pandas, NumPy, Scikit-learn, Matplotlib</td>
  </tr>
  <tr>
    <td>Machine Learning</td>
    <td>Random Forest, Linear Regression, Gradient Boosting, Decision Tree, XGBoost, RandomizedSearchCV</td>
  </tr>
  <tr>
    <td>Backend</td>
    <td>FastAPI, Pydantic, Uvicorn, Joblib</td>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>HTML, CSS, JavaScript</td>
  </tr>
  <tr>
    <td>Deployment & Version Control</td>
    <td>Git, GitHub, Render</td>
  </tr>
</table>

<hr>

<h2>▶️ Run the Project Locally</h2>

<h3>1. Clone the Repository</h3>

<pre><code>git clone https://github.com/PavanIllal/Coffee-Cupping-Score-Prediction.git
cd Coffee-Cupping-Score-Prediction</code></pre>

<h3>2. Create a Virtual Environment</h3>

<pre><code>python -m venv venv</code></pre>

<h3>3. Activate the Virtual Environment</h3>

<p><strong>Windows:</strong></p>

<pre><code>venv\Scripts\activate</code></pre>

<h3>4. Install Dependencies</h3>

<pre><code>pip install -r requirements.txt</code></pre>

<h3>5. Start the FastAPI Server</h3>

<pre><code>uvicorn main:app --reload</code></pre>

<h3>6. Open the Application</h3>

<p>
<strong>Frontend:</strong><br>
<a href="http://127.0.0.1:8000/app">http://127.0.0.1:8000/app</a>
</p>

<p>
<strong>API Documentation:</strong><br>
<a href="http://127.0.0.1:8000/docs">http://127.0.0.1:8000/docs</a>
</p>

<hr>

<h2>🌐 Deployment</h2>

<p>
The application is deployed on <strong>Render</strong> as a Python web service.
</p>

<h3>Build Command</h3>

<pre><code>pip install -r requirements.txt</code></pre>

<h3>Start Command</h3>

<pre><code>uvicorn main:app --host 0.0.0.0 --port $PORT</code></pre>

<h3>Live Application</h3>

<p>
<a href="https://coffee-cupping-score-prediction.onrender.com">
<strong>https://coffee-cupping-score-prediction.onrender.com</strong>
</a>
</p>

<hr>

<h2>🔬 Model Reproducibility</h2>

<p>
The notebook <code>Coffee_Quality_Database.ipynb</code> contains the complete
data analysis, preprocessing, feature engineering, model development,
hyperparameter tuning, evaluation and model-saving workflow.
</p>

<p>
The trained model artifact is stored as:
</p>

<pre><code>coffee_cupping_model_v2.pkl</code></pre>

<hr>

<h2>📌 Important Note</h2>

<blockquote>
This model is intended for <strong>educational and analytical purposes</strong>.
A predicted cup score should not be considered a replacement for professional
coffee cupping or sensory evaluation.
</blockquote>

<hr>

<div align="center">

<h2>👨‍💻 Author</h2>

<p><strong>Pavan Illal</strong></p>

<p>
<a href="https://github.com/PavanIllal">GitHub Profile</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="https://github.com/PavanIllal/Coffee-Cupping-Score-Prediction">Project Repository</a>
</p>

<br>

<p>
⭐ If you found this project useful, consider giving the repository a star.
</p>

</div>

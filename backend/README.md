## SIC Backend
The backend for SIC is a Django 3.0.3 project

## Building for local development
- make sure you're in students-in-canada/backend
- `python3 -m virtualenv venv` to create your environment
- `source venv/bin/activate` to enter the virtual environment
- `pip install -r requirements.txt` to install necessary requirements in your current environment

## Starting your servers
- `cd backend/sic_project`
- `source ../venv/bin/activate`
- (first time usage) `python manage.py makemigrations`
- (first time usage) `python manage.py migrate`
- `python manage.py runserver`
- hit `localhost:8000` :)

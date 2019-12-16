# Representable
Crowdsourced redistricting tool. Draw your community of interest and make your voice heard. In early stages of development.


### 1. Create a virtual environment

```
pip install virtualenv --user
virtualenv venv
. venv/bin/activate
# when done with work:
deactivate
```
### 2. Install requirements
```
pip install -r requirements.txt
```

### 3. Add Environment variables
You can find the mapbox API key referenced below by logging into the Mapbox.com account.
```
vim ~/.bash_profile
# Add the following lines:
export DISTR_DB_NAME="..."
export DISTR_DB_USER="..."
export DISTR_DB_PASS="..."
export DISTR_MAPBOX_KEY="COPY_THIS_FROM_MAPBOX_ACCOUNT"
export DJANGO_SETTINGS_MODULE=representable.settings.dev
```
Save and launch a new terminal session.

### 4. Follow postgres, mapbox setup instructions
Go to docs/postgres, docs/geodjango, and docs/mapbox_tippecanoe for details.

### 4. Start server
```
cd representable
python manage.py migrate
python manage.py runserver
```

### 5. Helpful Heroku commands
```
git push heroku master
heroku config:set VARIABLE=value
heroku config:unset VARIABLE
```

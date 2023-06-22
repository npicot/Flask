from flask import Flask, render_template
import sqlite3 as sql
import requests


app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def hello():
    with sql.connect("database.db") as con:
        cur = con.cursor()
        nb_visitors = int(cur.execute("SELECT nb_visitors FROM visitors").fetchall()[0][0])

        nb_visitors += 1
        cur.execute('UPDATE visitors SET nb_visitors = {};'.format(nb_visitors))
        print(nb_visitors)

        api_url = 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Paris'
        response = requests.get(api_url)
        if response.status_code == 200:
            response_json = response.json()

        print(response_json)
        
            
        return render_template('CV.html', nb_visitors = nb_visitors, response_json = response_json["dateTime"])


if __name__ == "__main__":
    app.run()
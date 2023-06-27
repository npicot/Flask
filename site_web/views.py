import sqlite3 as sql
import requests
from flask import Flask, render_template, url_for


app = Flask(__name__, template_folder="templates", static_folder="static")


@app.route("/")
def hello():
    with sql.connect("database.db") as con:
        cur = con.cursor()
        nb_visitors = int(
            cur.execute("SELECT nb_visitors FROM visitors").fetchall()[0][0]
        )
        nb_visitors += 1
        cur.execute("UPDATE visitors SET nb_visitors = {};".format(nb_visitors))
        api_url = "https://api.api-ninjas.com/v1/worldtime?city=Paris"
        response = requests.get(
            api_url, headers={"X-Api-Key": "bBpuN8xpUaZyf2hBLvIQ6w==K0TJnWMgApZLHj8a"}
        )
        if response.status_code == requests.codes.ok:
            response_json = response.json()
        else:
            print("Error:", response.status_code, response.text)
        return render_template(
            "CV.html", nb_visitors=nb_visitors, response_json=response_json["datetime"]
        )


@app.route("/motiv")
def motiv():
    return render_template("motiv.html")


if __name__ == "__main__":
    app.run()

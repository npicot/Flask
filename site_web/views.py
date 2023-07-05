import sqlite3 as sql
from flask import Flask, render_template
from datetime import datetime

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

        return render_template(
            "CV.html",
            nb_visitors=nb_visitors,
            date=datetime.now().strftime("%d/%m/%Y - %H:%M")
        )


@app.route("/motiv")
def motiv():
    return render_template("motiv.html")


if __name__ == "__main__":
    app.run()

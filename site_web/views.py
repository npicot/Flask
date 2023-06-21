from flask import Flask, render_template, request
import sqlite3 as sql
from datetime import datetime

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def hello():
    with sql.connect("database.db") as con:
        cur = con.cursor()
        nb_visitors = int(cur.execute("SELECT nb_visitors FROM visitors").fetchall()[0][0])

        nb_visitors += 1
        cur.execute('UPDATE visitors SET nb_visitors = {};'.format(nb_visitors))
        print(nb_visitors)

    now = datetime.now()
    date_time = now.strftime("%d/%m/%Y, %H:%M:%S")

    return render_template('CV.html', nb_visitors = nb_visitors, date_time = date_time)


if __name__ == "__main__":
    app.run()
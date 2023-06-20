import sqlite3

conn = sqlite3.connect('database.db')

conn.execute('CREATE TABLE IF NOT EXISTS visitors (nb_visitors NUMBER);')
conn.execute('Insert into visitors values (1);')
conn.commit()
conn.close()
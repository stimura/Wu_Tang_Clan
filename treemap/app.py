import pandas as pd
import numpy as np
import requests
from keys import token
from bs4 import BeautifulSoup
from lyrics import get_lyrics


from flask import Flask, jsonify, render_template
app = Flask(__name__)

artist_name = "Wu Tang Clan"

@app.route("/")
def index():
 """Renders Tree."""
 return render_template('index.html')

@app.route('/lyrics/<song_title>')
def sample_metadata(song_title):
    lyrics = get_lyrics(song_title)
    return jsonify(lyrics)


if __name__ == "__main__":
    app.run()
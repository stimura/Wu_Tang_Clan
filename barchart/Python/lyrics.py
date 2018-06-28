import genius_api
import requests
from bs4 import BeautifulSoup

token = genius_api.api['access_token']
def get_lyrics(song_title):
    
    import requests
    from bs4 import BeautifulSoup
    artist_name = "Wu Tang Clan"
    base_url = 'https://api.genius.com'
    headers = {'Authorization': 'Bearer ' + token}
    search_url = base_url + '/search'
    data = {'q': song_title + ' ' + artist_name}
    response = requests.get(search_url, data=data, headers=headers)

    json = response.json()
    # remote_song_info = None

    url_list = []

    for hit in json['response']['hits']:
        url_response = hit['result']['url']
        url_list.append(url_response)

    url = url_list[0]

    page = requests.get(url)
    html = BeautifulSoup(page.text, 'html.parser')
    lyrics = html.find('div', class_='lyrics').get_text()
    return lyrics
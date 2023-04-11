from bs4 import BeautifulSoup
import mysql.connector
import os

mappingToS3Url = {}

def obtain_affected_rows():
    # mydb = mysql.connector.connect(
    #     host=os.environ['HOST'],
    #     user=os.environ['USER'],
    #     password=os.environ['PASSWORD'],
    #     database=os.environ['DATABASE']
    # )
    # db_client = mydb.cursor()
    # db_client.execute("SELECT * FROM playactioncontent WHERE body LIKE '%https://eusp01tedattachment0887.blob.core.windows.net%'")

    # result = db_client.fetchall()
    # return result


def obtain_new_body(body):
    soup = BeautifulSoup(body)
    for img in soup.findAll('img'):
        if img['src'] not in mappingToS3Url:
            print('Not found')
        img['src'] = mappingToS3Url[img['src']]
    return str(soup)


if __name__ == '__main__':
    affected_rows = obtain_affected_rows()
    # for row in affected_rows[:20]:
    #     print(row.id, row.body)
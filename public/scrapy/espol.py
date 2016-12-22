import scrapy
import csv
import simplejson
import simplejson as json
class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://www.fiec.espol.edu.ec/es/personal_docente',
    ]
    def parse(self, response):
        for quote in response.css('tbody > tr > .active'):
            array = quote.css('a::text').extract()
            link = quote.css('a::attr(href)').extract()
            nextt = quote.css('a::attr(href)').extract_first()
            if nextt:
                yield scrapy.Request(response.urljoin(nextt), callback=self.parse2)
        next_page = response.css('li.next >  a ::attr(href)').extract_first()
        if next_page:
            yield scrapy.Request(response.urljoin(next_page), callback=self.parse)

    def parse2(self,response):
        self.logger.info('%s page visited',response.url)
        imagen =  response.css('article.node-cv > div > div > div > img::attr(src)').extract()
        nombre = response.css('h1::text').extract()
        correo = response.css('div.field-name-field-e-mail > div.field-items > div.field-item::text').extract()
        #correo = response.css('.field-name-field-e-mail > .field-items > .even ::text').extract()
        #oficina = response.css('.field-name-field-oficina > .field-items > .even ::text').extract()
        save_array(nombre,imagen,correo)
        #save_json()

def save_array(array,link,correo):
    #f = open('file','a')
    with open("profesores.csv", "a") as text_file:
        spamwriter = csv.writer(text_file, delimiter=',',quotechar=',', quoting=csv.QUOTE_MINIMAL)
        separado = array[0].split(',')
        cor = correo[0].split(',')
        if len(cor) == 2:
            correo2 = cor[1]
        else:
            correo2 = ''
        spamwriter.writerow([separado[0].strip(),separado[1].strip(),link[0],cor[0],correo2])
        """
        for i in array:
            text_file.write(i[0].replace(",", "") + ",")
        """
    #simplejson.dump(array, f)

def save_json():
    csvfile = open('profesores.csv', 'r')
    jsonfile = open('file.json', 'w')
    profesores = []
    fieldnames = ("Nombres","Apellidos","Imagen","Correo","Correo2")
    reader = csv.DictReader( csvfile, fieldnames)
    for row in reader:
        profesores.append(row)
    json.dump(profesores, jsonfile)

import atexit
atexit.register(save_json)

"""
Read
import json

with open('strings.json') as json_data:
    d = json.load(json_data)
    print(d)
"""

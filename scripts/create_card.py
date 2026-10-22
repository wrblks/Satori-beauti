from pathlib import Path
import os
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4

ROOT=Path(__file__).resolve().parents[1]
def font_path(env, windows, linux):
    return os.getenv(env) or next(str(p) for p in [Path(windows),Path(linux)] if p.exists())
pdfmetrics.registerFont(TTFont('Body',font_path('SATORI_FONT','C:/Windows/Fonts/arial.ttf','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('Bold',font_path('SATORI_FONT_BOLD','C:/Windows/Fonts/arialbd.ttf','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf')))
out=ROOT/'downloads/karta-klienta-satori.pdf'
out.parent.mkdir(parents=True,exist_ok=True)
c=canvas.Canvas(str(out),pagesize=A4)
c.setTitle('Satori Beauti - wstępna karta klienta')
W,H=A4
def text(x,y,value,size=10,bold=False):
    c.setFillColor(HexColor('#393e35'));c.setFont('Bold' if bold else 'Body',size);c.drawString(x,y,value)
def line(y):
    c.setStrokeColor(HexColor('#c5c9bd'));c.line(45,y,W-45,y)
def heading(y,value):
    c.setFillColor(HexColor('#eff0e9'));c.rect(40,y-12,W-80,30,fill=1,stroke=0);text(50,y,value,11,True)
def start(page):
    text(45,H-50,'SATORI BEAUTI',15,True);text(45,H-79,'Wstępna karta klienta',24)
    text(45,H-101,'Do rozmowy przed wizytą • do wypełnienia na papierze',9)
    line(H-119);text(45,35,'Karta wstępna. Nie zastępuje kwalifikacji ani zgody na konkretny zabieg.',8)
    text(W-70,35,f'{page} / 2',8)
start(1)
heading(690,'01  Podstawowe informacje')
for y,label in [(650,'Imię i nazwisko'),(600,'Kontakt do ustaleń dotyczących wizyty (telefon lub e-mail)'),(550,'Data wizyty / planowany temat rozmowy')]:
    text(45,y,label);line(y-25)
heading(480,'02  Twoje potrzeby i oczekiwania')
text(45,440,'Co chcesz omówić? Co jest dla Ciebie najważniejsze?')
for y in [415,390,365]:line(y)
text(45,330,'Jak wygląda Twoja pielęgnacja? Jakich kosmetyków używasz?')
for y in [305,280,255]:line(y)
heading(205,'03  Przygotuj się do rozmowy')
for y,value in [(170,'Zabierz informacje o wcześniejszych zabiegach i reakcjach skóry.'),(149,'Pytania o zdrowie i przyjmowane preparaty omów osobiście.'),(128,'Nie odstawiaj leków samodzielnie w celu przygotowania do wizyty.'),(107,'Nie wysyłaj wypełnionej karty przez formularz na stronie.')]:text(45,y,value,10)
c.showPage();start(2)
heading(690,'04  Informacje do omówienia przed zabiegiem')
text(45,652,'Wypełnij podczas rozmowy z osobą kwalifikującą do konkretnego zabiegu.',9)
text(45,634,'Zakres pytań zależy od procedury. To nie jest pełna lista przeciwwskazań.',9)
items=[('Alergie i wcześniejsze niepożądane reakcje',590),('Przyjmowane leki, suplementy i aktualne leczenie',525),('Istotne choroby, aktualne dolegliwości lub zmiany skórne',460),('Ciąża / karmienie, jeżeli istotne dla planowanego zabiegu',395),('Wcześniejsze zabiegi: rodzaj, obszar, termin i reakcja',330)]
for label,y in items:text(45,y,label,10,True);line(y-23);line(y-43)
heading(245,'05  Ustalenia z osobą kwalifikującą')
text(45,210,'Planowany zabieg / dalsza konsultacja / odroczenie:');line(187)
text(45,162,'Dodatkowa dokumentacja, pytania i zalecenia:');line(139)
text(45,111,'Data oraz imię i nazwisko osoby prowadzącej rozmowę:');line(88)
c.save()
print(out)

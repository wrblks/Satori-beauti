# Satori Beauti

Statyczna strona PL — HTML, CSS, JavaScript, lokalne logo i 14 dokumentów szkoleniowych. Bez instalacji zależności do uruchomienia strony.

## Podgląd

Uruchom `python -m http.server 8080` w katalogu projektu i otwórz http://localhost:8080.

## Kontakt przed uruchomieniem

W `config.js` uzupełnij zweryfikowane email, phone, address i opcjonalny bookingUrl (HTTPS). Bez e-maila formularz przygotowuje wiadomość do skopiowania. Po uzupełnieniu e-maila używa mailto, otwierając klienta pocztowego. To nie jest serwerowy formularz: nie wysyła sam i nie potwierdza doręczenia. Backend można dodać po wyborze hostingu, odbiorcy i zasad obsługi danych. Nie wpisuj kluczy API w kodzie przeglądarki.

Przed zbieraniem korespondencji i kart klienta uzupełnij dane administratora, cele/podstawy przetwarzania, odbiorców, retencję i prawa osób w informacji o prywatności. Obecna strona prywatności opisuje tylko aktualne działanie techniczne.

## Treść i materiały

Nazwa od właściciela: **Satori Beauti**. Oryginalne logo ma pisownię **Satori Beauty**; pozostawiono je bez przerabiania. Do uzgodnienia finalna pisownia marki.

Certyfikaty Sandry Wróblewskiej z JS Medical Solutions dokumentują edukację. Nie potwierdzają tytułu lekarza ani dostępności usług/sprzętu. Nie użyto fikcyjnych opinii, cen i adresów. Dokument z katalogiem reklamowym Re Vitalize nie jest certyfikatem i nie został opublikowany. Daty na dokumentach październik 2026. Galeria obejmuje też wykaz zajęć i ocen.

Oferta, ceny, faktyczne kwalifikacje wykonawców i dane firmy wymagają potwierdzenia. Szczególnie procedury medyczne wymagają odrębnej weryfikacji; nie są prezentowane jako dostępna oferta. Kontekst: komunikat MZ https://www.gov.pl/web/zdrowie/komunikat-w-sprawie-wykonywania-procedur-medycyny-estetyczno-naprawczej oraz https://www.gov.pl/web/psse-polkowice/komunikat-w-sprawie-wykonywania-procedur-medycyny-estetyczno-naprawczej .

## Karta klienta

`downloads/karta-klienta-satori.pdf`: dwie strony A4 do wydruku, karta wstępna. Wymaga dopasowania i zatwierdzenia przez osobę wykonującą dane świadczenie. Nie jest kompletną kwalifikacją medyczną, zgodą na zabieg ani klauzulą RODO. Nie należy wysyłać wypełnionej karty zwykłym formularzem. Nie zawiera PESEL.

Odtworzenie PDF: `python scripts/create_card.py` (ReportLab; czcionki Arial z Windows albo DejaVu z Linux; opcjonalnie zmienne SATORI_FONT i SATORI_FONT_BOLD).

## GitHub Pages

W repozytorium Settings → Pages → Deploy from a branch → main → /(root). Docelowy adres po włączeniu Pages: https://wrblks.github.io/Satori-beauti/. Plik `.nojekyll` i względne ścieżki umożliwiają publikację bez builda. Sam zapis plików w repozytorium nie oznacza włączenia Pages.

Brak zewnętrznych fontów, trackerów, cookies aplikacji i localStorage. Serwer hostujący może zapisywać logi połączeń. Dane formularza zostają w pamięci bieżącej strony do samodzielnego wysłania programem pocztowym.

`PROMPT.md` zawiera pełny prompt wykonany dla tego projektu.

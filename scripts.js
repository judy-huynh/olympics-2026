/* ═══════════════════════════════════════════
   Where Champions Come From — Milano-Cortina 2026
   Main Application Script
   ═══════════════════════════════════════════ */

/* ── Constants ── */
const OC    = { blue:'#0081C8', yellow:'#FCB131', black:'#1a1a1a', green:'#00A651', red:'#EE334E' };
const MEDAL = { gold:'#DAA520', silver:'#808080', bronze:'#B8600A' };
const CORTINA = { lat:46.54, lng:12.14 };

/* ── Medal Data — 331 athlete-medal entries across 29 countries ── */
const countries = [
  {
    name:'Norway', code:'NOR', flag:'🇳🇴', ring:OC.blue,
    gold:18, silver:12, bronze:11,
    athletes:[
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · Skiathlon', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'klaebo-skiathlon' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · Sprint Classic', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'klaebo-sprint' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · 10km Free', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'klaebo-10km' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · Team Sprint Free', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'klaebo-teamsprint' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · 4×7.5km Relay', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'klaebo-relay' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · 50km Mass Start', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'klaebo-50km' },
      { name:'Martin Løwstrøm Nyenget', event:'Cross-Country · Skiathlon', medal:'bronze', hometown:'Lillehammer', lat:61.12, lng:10.47, slug:'nyenget-skiathlon' },
      { name:'Oskar Opstad Vike', event:'Cross-Country · Sprint Classic', medal:'bronze', hometown:'Gjøvik', lat:60.79, lng:10.69, slug:'oskar-vike' },
      { name:'Einar Hedegart', event:'Cross-Country · 10km Free', medal:'bronze', hometown:'Steinkjer', lat:64.01, lng:11.50, slug:'einar-hedegart' },
      { name:'Martin Løwstrøm Nyenget', event:'Cross-Country · 50km Mass Start', medal:'silver', hometown:'Lillehammer', lat:61.12, lng:10.47, slug:'nyenget-50km' },
      { name:'Emil Iversen', event:'Cross-Country · 50km Mass Start', medal:'bronze', hometown:'Meråker', lat:63.42, lng:11.75, slug:'emil-iversen' },
      { name:'Heidi Weng', event:'Cross-Country · Women\'s Skiathlon', medal:'bronze', hometown:'Enebakk', lat:59.73, lng:11.15, slug:'heidi-weng-skiathlon' },
      { name:'Heidi Weng', event:'Cross-Country · Women\'s 50km', medal:'silver', hometown:'Enebakk', lat:59.73, lng:11.15, slug:'heidi-weng-50km' },
      { name:'Thea Louise Stjernesund', event:'Alpine Skiing · Women\'s GS', medal:'silver', hometown:'Bærum', lat:59.89, lng:10.53, slug:'thea-stjernesund' },
      { name:'Johan-Olav Botn', event:'Biathlon · Men\'s 20km Individual', medal:'gold', hometown:'Trondheim', lat:63.43, lng:10.40, slug:'johan-olav-botn' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s 20km', medal:'bronze', hometown:'Bærum', lat:59.89, lng:10.53, slug:'laegreid-individual' },
      { name:'Vetle Sjåstad Christiansen', event:'Biathlon · Men\'s Sprint', medal:'silver', hometown:'Geilo', lat:60.53, lng:8.21, slug:'vetle-christiansen' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s Sprint', medal:'bronze', hometown:'Bærum', lat:59.89, lng:10.53, slug:'laegreid-sprint' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s Pursuit', medal:'silver', hometown:'Bærum', lat:59.89, lng:10.53, slug:'laegreid-pursuit' },
      { name:'Johannes Dale-Skjevdal', event:'Biathlon · Men\'s Mass Start', medal:'gold', hometown:'Nesttun, Bergen', lat:60.33, lng:5.35, slug:'dale-skjevdal' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s Mass Start', medal:'silver', hometown:'Bærum', lat:59.89, lng:10.53, slug:'laegreid-mass' },
      { name:'Maren Kirkeeide', event:'Biathlon · Women\'s Sprint', medal:'gold', hometown:'Skien', lat:59.21, lng:9.61, slug:'kirkeeide-sprint' },
      { name:'Maren Kirkeeide', event:'Biathlon · Women\'s Pursuit', medal:'silver', hometown:'Skien', lat:59.21, lng:9.61, slug:'kirkeeide-pursuit' },
      { name:'Maren Kirkeeide', event:'Biathlon · Women\'s Relay', medal:'bronze', hometown:'Skien', lat:59.21, lng:9.61, slug:'kirkeeide-relay' },
      { name:'Jens Lurås Oftebro', event:'Nordic Combined · NH/10km', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'oftebro-nh' },
      { name:'Jens Lurås Oftebro', event:'Nordic Combined · LH/10km', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'oftebro-lh' },
      { name:'Jens Lurås Oftebro', event:'Nordic Combined · Team Sprint', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'oftebro-team' },
      { name:'Andreas Skoglund', event:'Nordic Combined · Team Sprint', medal:'gold', hometown:'Molde', lat:62.74, lng:7.16, slug:'andreas-skoglund' },
      { name:'Anna Odine Strøm', event:'Ski Jumping · Women\'s NH', medal:'gold', hometown:'Alta', lat:69.97, lng:23.27, slug:'strom-nh' },
      { name:'Anna Odine Strøm', event:'Ski Jumping · Women\'s LH', medal:'gold', hometown:'Alta', lat:69.97, lng:23.27, slug:'strom-lh' },
      { name:'Eirin Maria Kvandal', event:'Ski Jumping · Women\'s LH', medal:'silver', hometown:'Mosjøen', lat:65.84, lng:13.19, slug:'eirin-kvandal' },
      { name:'Henrik Kristoffersen', event:'Alpine Skiing · Men\'s Slalom', medal:'bronze', hometown:'Lommedalen, Bærum', lat:59.92, lng:10.47, slug:'henrik-kristoffersen' },
      { name:'Birk Ruud', event:'Freestyle Skiing · Men\'s Slopestyle', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'birk-ruud' },
      { name:'Tormod Frostad', event:'Freestyle Skiing · Men\'s Big Air', medal:'gold', hometown:'Oslo', lat:59.91, lng:10.75, slug:'tormod-frostad' },
      { name:'Sander Eitrem', event:'Speed Skating · Men\'s 5000m', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'sander-eitrem' },
      { name:'Ragne Wiklund', event:'Speed Skating · Women\'s 1500m', medal:'silver', hometown:'Stavanger', lat:58.97, lng:5.73, slug:'wiklund-1500' },
      { name:'Ragne Wiklund', event:'Speed Skating · Women\'s 3000m', medal:'silver', hometown:'Stavanger', lat:58.97, lng:5.73, slug:'wiklund-3000' },
      { name:'Ragne Wiklund', event:'Speed Skating · Women\'s 5000m', medal:'bronze', hometown:'Stavanger', lat:58.97, lng:5.73, slug:'wiklund-5000' },
    ]
  },
  {
    name:'United States', code:'USA', flag:'🇺🇸', ring:OC.blue,
    gold:12, silver:12, bronze:9,
    athletes:[
      { name:'Mikaela Shiffrin', event:'Alpine Skiing · Women\'s Slalom', medal:'gold', hometown:'Edwards, Colorado', lat:39.64, lng:-106.59, slug:'mikaela-shiffrin' },
      { name:'Breezy Johnson', event:'Alpine Skiing · Women\'s Downhill', medal:'gold', hometown:'Jackson Hole, Wyoming', lat:43.48, lng:-110.76, slug:'breezy-johnson' },
      { name:'Ryan Cochran-Siegle', event:'Alpine Skiing · Men\'s Super-G', medal:'silver', hometown:'Starksboro, Vermont', lat:44.23, lng:-73.06, slug:'ryan-cochran-siegle' },
      { name:'Jacqueline Wiles', event:'Alpine · Women\'s Team Combined', medal:'bronze', hometown:'Aurora, Oregon', lat:45.23, lng:-122.76, slug:'jacqueline-wiles' },
      { name:'Paula Moltzan', event:'Alpine · Women\'s Team Combined', medal:'bronze', hometown:'Minneapolis, Minnesota', lat:44.98, lng:-93.27, slug:'paula-moltzan' },
      { name:'Alysa Liu', event:'Figure Skating · Women\'s Singles', medal:'gold', hometown:'Oakland, California', lat:37.80, lng:-122.27, slug:'alysa-liu' },
      { name:'Ilia Malinin', event:'Figure Skating · Team Event', medal:'gold', hometown:'Fairfax, Virginia', lat:38.85, lng:-77.31, slug:'ilia-malinin' },
      { name:'Madison Chock', event:'Figure Skating · Ice Dance', medal:'silver', hometown:'Redondo Beach, California', lat:33.85, lng:-118.39, slug:'madison-chock' },
      { name:'Evan Bates', event:'Figure Skating · Ice Dance', medal:'silver', hometown:'Ann Arbor, Michigan', lat:42.28, lng:-83.74, slug:'evan-bates' },
      { name:'Jordan Stolz', event:'Speed Skating · Men\'s 500m', medal:'gold', hometown:'Kewaskum, Wisconsin', lat:43.52, lng:-88.23, slug:'stolz-500' },
      { name:'Jordan Stolz', event:'Speed Skating · Men\'s 1000m', medal:'gold', hometown:'Kewaskum, Wisconsin', lat:43.52, lng:-88.23, slug:'stolz-1000' },
      { name:'Jordan Stolz', event:'Speed Skating · Men\'s 1500m', medal:'silver', hometown:'Kewaskum, Wisconsin', lat:43.52, lng:-88.23, slug:'stolz-1500' },
      { name:'Mia Manganello', event:'Speed Skating · Women\'s Mass Start', medal:'bronze', hometown:'Hershey, Pennsylvania', lat:40.29, lng:-76.65, slug:'mia-manganello' },
      { name:'Elana Meyers Taylor', event:'Bobsled · Women\'s Monobob', medal:'gold', hometown:'Douglasville, Georgia', lat:33.75, lng:-84.75, slug:'meyers-taylor' },
      { name:'Kaillie Humphries', event:'Bobsled · Women\'s Monobob', medal:'bronze', hometown:'Calgary, Alberta', hometownCountry:'Canada', lat:51.05, lng:-114.07, slug:'humphries-monobob' },
      { name:'Kaillie Humphries', event:'Bobsled · Women\'s 2-Woman', medal:'bronze', hometown:'Calgary, Alberta', hometownCountry:'Canada', lat:51.05, lng:-114.07, slug:'humphries-2woman' },
      { name:'Elizabeth Lemley', event:'Freestyle · Women\'s Moguls', medal:'gold', hometown:'Vail, Colorado', lat:39.64, lng:-106.37, slug:'lemley-moguls' },
      { name:'Jaelin Kauf', event:'Freestyle · Women\'s Moguls', medal:'silver', hometown:'Alta, Wyoming', lat:43.77, lng:-111.04, slug:'kauf-moguls' },
      { name:'Alex Ferreira', event:'Freestyle · Men\'s Halfpipe', medal:'gold', hometown:'Aspen, Colorado', lat:39.19, lng:-106.82, slug:'alex-ferreira' },
      { name:'Alex Hall', event:'Freestyle · Men\'s Slopestyle', medal:'silver', hometown:'Park City, Utah', lat:40.65, lng:-111.50, slug:'alex-hall' },
      { name:'Mac Forehand', event:'Freestyle · Men\'s Big Air', medal:'silver', hometown:'Vail, Colorado', lat:39.64, lng:-106.37, slug:'mac-forehand' },
      { name:'Jaelin Kauf', event:'Freestyle · Women\'s Dual Moguls', medal:'silver', hometown:'Alta, Wyoming', lat:43.77, lng:-111.04, slug:'kauf-dual' },
      { name:'Elizabeth Lemley', event:'Freestyle · Women\'s Dual Moguls', medal:'bronze', hometown:'Vail, Colorado', lat:39.64, lng:-106.37, slug:'lemley-dual' },
      { name:'Kaila Kuhn', event:'Freestyle · Mixed Team Aerials', medal:'gold', hometown:'Lake Placid, New York', lat:44.28, lng:-73.99, slug:'kaila-kuhn' },
      { name:'Connor Curran', event:'Freestyle · Mixed Team Aerials', medal:'gold', hometown:'Lake Placid, New York', lat:44.28, lng:-73.99, slug:'connor-curran' },
      { name:'Christopher Lillis', event:'Freestyle · Mixed Team Aerials', medal:'gold', hometown:'Bethesda, Maryland', lat:38.98, lng:-77.10, slug:'christopher-lillis' },
      { name:'Chloe Kim', event:'Snowboard · Women\'s Halfpipe', medal:'silver', hometown:'Torrance, California', lat:33.84, lng:-118.34, slug:'chloe-kim' },
      { name:'Jake Canter', event:'Snowboard · Men\'s Slopestyle', medal:'bronze', hometown:'Evergreen, Colorado', lat:39.63, lng:-105.32, slug:'jake-canter' },
      { name:'Ben Ogden', event:'Cross-Country · Men\'s Sprint', medal:'silver', hometown:'Landgrove, Vermont', lat:43.21, lng:-72.85, slug:'ben-ogden' },
      { name:'Jessie Diggins', event:'Cross-Country · Women\'s 10km', medal:'bronze', hometown:'Afton, Minnesota', lat:44.90, lng:-92.78, slug:'jessie-diggins' },
      { name:'Corinne Stoddard', event:'Short Track · Women\'s 1500m', medal:'bronze', hometown:'Federal Way, Washington', lat:47.32, lng:-122.31, slug:'corinne-stoddard' },
      { name:'Ashley Farquharson', event:'Luge · Women\'s Singles', medal:'bronze', hometown:'Park City, Utah', lat:40.65, lng:-111.50, slug:'ashley-farquharson' },
      { name:'Jack Hughes (Captain)', event:'Ice Hockey · Men\'s', medal:'gold', hometown:'Orlando, Florida', lat:28.54, lng:-81.38, slug:'jack-hughes' },
      { name:'Hilary Knight (Captain)', event:'Ice Hockey · Women\'s', medal:'gold', hometown:'Sun Valley, Idaho', lat:43.70, lng:-114.35, slug:'hilary-knight' },
      { name:'Dropkin', event:'Curling · Mixed Doubles', medal:'silver', hometown:'TBD', lat:40.0, lng:-90.0, slug:'dropkin-curling' },
      { name:'Thiesse', event:'Curling · Mixed Doubles', medal:'silver', hometown:'TBD', lat:44.0, lng:-93.0, slug:'thiesse-curling' },
    ]
  },
  {
    name:'Italy', code:'ITA', flag:'🇮🇹', ring:OC.green,
    gold:10, silver:6, bronze:14,
    athletes:[
      { name:'Federica Brignone', event:'Alpine Skiing · Women\'s Super-G', medal:'gold', hometown:'La Salle, Aosta Valley', lat:45.75, lng:7.07, slug:'brignone-sg' },
      { name:'Federica Brignone', event:'Alpine Skiing · Women\'s GS', medal:'gold', hometown:'La Salle, Aosta Valley', lat:45.75, lng:7.07, slug:'brignone-gs' },
      { name:'Sofia Goggia', event:'Alpine Skiing · Women\'s Downhill', medal:'bronze', hometown:'Bergamo', lat:45.70, lng:9.67, slug:'sofia-goggia' },
      { name:'Giovanni Franzoni', event:'Alpine Skiing · Men\'s Downhill', medal:'silver', hometown:'Castione della Presolana', lat:45.90, lng:10.07, slug:'giovanni-franzoni' },
      { name:'Dominik Paris', event:'Alpine Skiing · Men\'s Downhill', medal:'bronze', hometown:'Merano, South Tyrol', lat:46.67, lng:11.16, slug:'dominik-paris' },
      { name:'Francesca Lollobrigida', event:'Speed Skating · Women\'s 3000m', medal:'gold', hometown:'Frascati, Lazio', lat:41.81, lng:12.68, slug:'lollobrigida-3000' },
      { name:'Francesca Lollobrigida', event:'Speed Skating · Women\'s 5000m', medal:'gold', hometown:'Frascati, Lazio', lat:41.81, lng:12.68, slug:'lollobrigida-5000' },
      { name:'Davide Ghiotto', event:'Speed Skating · Men\'s Team Pursuit', medal:'gold', hometown:'Arzignano, Veneto', lat:45.52, lng:11.33, slug:'davide-ghiotto' },
      { name:'Andrea Giovannini', event:'Speed Skating · Men\'s Mass Start', medal:'bronze', hometown:'Baselga di Piné', lat:46.13, lng:11.24, slug:'andrea-giovannini' },
      { name:'Lisa Vittozzi', event:'Biathlon · Women\'s Pursuit', medal:'gold', hometown:'Sappada', lat:46.57, lng:12.69, slug:'lisa-vittozzi' },
      { name:'Arianna Fontana', event:'Short Track · Mixed Team Relay', medal:'gold', hometown:'Sondrio', lat:46.17, lng:9.87, slug:'arianna-fontana-relay' },
      { name:'Pietro Sighel', event:'Short Track · Mixed Team Relay', medal:'gold', hometown:'Trento', lat:46.07, lng:11.12, slug:'pietro-sighel' },
      { name:'Arianna Fontana', event:'Short Track · Women\'s 500m', medal:'silver', hometown:'Sondrio', lat:46.17, lng:9.87, slug:'arianna-fontana-500' },
      { name:'Dominik Fischnaller', event:'Luge · Men\'s Singles', medal:'bronze', hometown:'Marling, South Tyrol', lat:46.66, lng:11.15, slug:'dominik-fischnaller' },
      { name:'Emanuel Rieder', event:'Luge · Men\'s Doubles', medal:'gold', hometown:'Naturno, South Tyrol', lat:46.65, lng:11.00, slug:'emanuel-rieder' },
      { name:'Simon Kainzwaldner', event:'Luge · Men\'s Doubles', medal:'gold', hometown:'Bruneck, South Tyrol', lat:46.80, lng:11.94, slug:'simon-kainzwaldner' },
      { name:'Andrea Voetter', event:'Luge · Women\'s Doubles', medal:'gold', hometown:'Naturno, South Tyrol', lat:46.65, lng:11.00, slug:'andrea-voetter' },
      { name:'Marion Oberhofer', event:'Luge · Women\'s Doubles', medal:'gold', hometown:'Bruneck, South Tyrol', lat:46.80, lng:11.94, slug:'marion-oberhofer' },
      { name:'Simone Deromedis', event:'Freestyle · Men\'s Ski Cross', medal:'gold', hometown:'Trento', lat:46.07, lng:11.12, slug:'simone-deromedis' },
      { name:'Federico Tomasoni', event:'Freestyle · Men\'s Ski Cross', medal:'silver', hometown:'Brescia', lat:45.54, lng:10.21, slug:'federico-tomasoni' },
      { name:'Flora Tabanelli', event:'Freestyle · Women\'s Big Air', medal:'bronze', hometown:'Bologna', lat:44.49, lng:11.34, slug:'flora-tabanelli' },
      { name:'Michela Moioli', event:'Snowboard · Women\'s SBX', medal:'bronze', hometown:'Alzano Lombardo', lat:45.73, lng:9.73, slug:'michela-moioli-sbx' },
      { name:'Michela Moioli', event:'Snowboard · Mixed Team SBX', medal:'silver', hometown:'Alzano Lombardo', lat:45.73, lng:9.73, slug:'michela-moioli-mixed' },
      { name:'Lorenzo Sommariva', event:'Snowboard · Mixed Team SBX', medal:'silver', hometown:'Milan', lat:45.46, lng:9.19, slug:'lorenzo-sommariva' },
      { name:'Daniel Grassl', event:'Figure Skating · Team Event', medal:'bronze', hometown:'Merano, South Tyrol', lat:46.67, lng:11.16, slug:'daniel-grassl' },
      { name:'Elia Barp', event:'Cross-Country · Men\'s Team Sprint', medal:'bronze', hometown:'Toblach, South Tyrol', lat:46.73, lng:12.22, slug:'elia-barp' },
      { name:'Federico Pellegrino', event:'Cross-Country · Men\'s Team Sprint', medal:'bronze', hometown:'Nus, Aosta Valley', lat:45.74, lng:7.47, slug:'federico-pellegrino' },
      { name:'Lucia Dalmasso', event:'Snowboard · Women\'s PGS', medal:'bronze', hometown:'Cuneo, Piedmont', lat:44.38, lng:7.55, slug:'lucia-dalmasso' },
      { name:'Italy Team', event:'Curling · Mixed Doubles', medal:'bronze', hometown:'Cortina d\'Ampezzo', lat:46.54, lng:12.14, slug:'ita-curling-mixed' },
      { name:'Lisa Vittozzi', event:'Biathlon · Mixed Relay', medal:'silver', hometown:'Sappada', lat:46.57, lng:12.69, slug:'vittozzi-mixed-relay' },
    ]
  },
  {
    name:'Netherlands', code:'NED', flag:'🇳🇱', ring:OC.yellow,
    gold:10, silver:7, bronze:3,
    athletes:[
      { name:'Femke Kok', event:'Speed Skating · Women\'s 500m', medal:'gold', hometown:'Heerenveen', lat:52.96, lng:5.93, slug:'kok-500' },
      { name:'Jutta Leerdam', event:'Speed Skating · Women\'s 500m', medal:'silver', hometown:'The Hague', lat:52.08, lng:4.31, slug:'leerdam-500' },
      { name:'Jutta Leerdam', event:'Speed Skating · Women\'s 1000m', medal:'gold', hometown:'The Hague', lat:52.08, lng:4.31, slug:'leerdam-1000' },
      { name:'Femke Kok', event:'Speed Skating · Women\'s 1000m', medal:'silver', hometown:'Heerenveen', lat:52.96, lng:5.93, slug:'kok-1000' },
      { name:'Antoinette Rijpma-de Jong', event:'Speed Skating · Women\'s 1500m', medal:'gold', hometown:'Leeuwarden', lat:53.20, lng:5.80, slug:'rijpma-de-jong' },
      { name:'Merel Conijn', event:'Speed Skating · Women\'s 5000m', medal:'silver', hometown:'Amsterdam', lat:52.37, lng:4.90, slug:'merel-conijn' },
      { name:'Marijke Groenewoud', event:'Speed Skating · Women\'s Mass Start', medal:'gold', hometown:'Ede', lat:52.04, lng:5.66, slug:'marijke-groenewoud' },
      { name:'Jenning de Boo', event:'Speed Skating · Men\'s 500m', medal:'silver', hometown:'Heerenveen', lat:52.96, lng:5.93, slug:'de-boo-500' },
      { name:'Jenning de Boo', event:'Speed Skating · Men\'s 1000m', medal:'silver', hometown:'Heerenveen', lat:52.96, lng:5.93, slug:'de-boo-1000' },
      { name:'Kjeld Nuis', event:'Speed Skating · Men\'s 1500m', medal:'bronze', hometown:'Leiden', lat:52.16, lng:4.49, slug:'kjeld-nuis' },
      { name:'Jorrit Bergsma', event:'Speed Skating · Men\'s 10000m', medal:'bronze', hometown:'Aldeboarn', lat:53.05, lng:5.84, slug:'bergsma-10k' },
      { name:'Jorrit Bergsma', event:'Speed Skating · Men\'s Mass Start', medal:'gold', hometown:'Aldeboarn', lat:53.05, lng:5.84, slug:'bergsma-ms' },
      { name:'Xandra Velzeboer', event:'Short Track · Women\'s 500m', medal:'gold', hometown:'The Hague', lat:52.08, lng:4.31, slug:'velzeboer-500' },
      { name:'Xandra Velzeboer', event:'Short Track · Women\'s 1000m', medal:'gold', hometown:'The Hague', lat:52.08, lng:4.31, slug:'velzeboer-1000' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 1000m', medal:'gold', hometown:'Dordrecht', lat:51.81, lng:4.67, slug:'jvw-1000' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 1500m', medal:'gold', hometown:'Dordrecht', lat:51.81, lng:4.67, slug:'jvw-1500' },
      { name:'Melle van \'t Wout', event:'Short Track · Men\'s 500m', medal:'silver', hometown:'Dordrecht', lat:51.81, lng:4.67, slug:'mvw-500' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 500m', medal:'bronze', hometown:'Dordrecht', lat:51.81, lng:4.67, slug:'jvw-500' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 5000m Relay', medal:'gold', hometown:'Dordrecht', lat:51.81, lng:4.67, slug:'jvw-relay' },
    ]
  },
  {
    name:'Germany', code:'GER', flag:'🇩🇪', ring:OC.black,
    gold:8, silver:10, bronze:8,
    athletes:[
      { name:'Johannes Lochner', event:'Bobsled · 2-Man', medal:'gold', hometown:'Berchtesgaden, Bavaria', lat:47.63, lng:13.00, slug:'lochner-2man' },
      { name:'Francesco Friedrich', event:'Bobsled · 2-Man', medal:'silver', hometown:'Pirna, Saxony', lat:50.96, lng:13.94, slug:'friedrich-2man' },
      { name:'Adam Ammour', event:'Bobsled · 2-Man', medal:'bronze', hometown:'Stuttgart', lat:48.78, lng:9.18, slug:'adam-ammour' },
      { name:'Johannes Lochner', event:'Bobsled · 4-Man', medal:'gold', hometown:'Berchtesgaden, Bavaria', lat:47.63, lng:13.00, slug:'lochner-4man' },
      { name:'Francesco Friedrich', event:'Bobsled · 4-Man', medal:'silver', hometown:'Pirna, Saxony', lat:50.96, lng:13.94, slug:'friedrich-4man' },
      { name:'Laura Nolte', event:'Bobsled · Monobob', medal:'silver', hometown:'Winterberg', lat:51.20, lng:8.53, slug:'nolte-monobob' },
      { name:'Laura Nolte', event:'Bobsled · Women\'s 2-Woman', medal:'gold', hometown:'Winterberg', lat:51.20, lng:8.53, slug:'nolte-2woman' },
      { name:'Lisa Buckwitz', event:'Bobsled · Women\'s 2-Woman', medal:'silver', hometown:'Potsdam', lat:52.40, lng:13.07, slug:'lisa-buckwitz' },
      { name:'Max Langenhan', event:'Luge · Men\'s Singles', medal:'gold', hometown:'Friedrichroda, Thuringia', lat:50.86, lng:10.56, slug:'max-langenhan' },
      { name:'Julia Taubitz', event:'Luge · Women\'s Singles', medal:'gold', hometown:'Oberwiesenthal, Saxony', lat:50.42, lng:12.97, slug:'julia-taubitz' },
      { name:'Tobias Wendl', event:'Luge · Men\'s Doubles', medal:'bronze', hometown:'Berchtesgaden, Bavaria', lat:47.63, lng:13.00, slug:'tobias-wendl' },
      { name:'Dajana Eitberger', event:'Luge · Women\'s Doubles', medal:'silver', hometown:'Ilmenau, Thuringia', lat:50.69, lng:10.92, slug:'dajana-eitberger' },
      { name:'Germany Team', event:'Luge · Team Relay', medal:'gold', hometown:'Berlin', lat:52.52, lng:13.41, slug:'ger-luge-relay' },
      { name:'Axel Jungk', event:'Skeleton · Men\'s', medal:'silver', hometown:'Oberbärenburg, Saxony', lat:50.73, lng:13.73, slug:'axel-jungk' },
      { name:'Christopher Grotheer', event:'Skeleton · Men\'s', medal:'bronze', hometown:'Gera, Thuringia', lat:50.88, lng:12.08, slug:'christopher-grotheer' },
      { name:'Susanne Kreher', event:'Skeleton · Women\'s', medal:'silver', hometown:'Annaberg-Buchholz', lat:50.58, lng:13.00, slug:'susanne-kreher' },
      { name:'Jacqueline Pfeifer', event:'Skeleton · Women\'s', medal:'bronze', hometown:'Oberhof, Thuringia', lat:50.72, lng:10.73, slug:'jacqueline-pfeifer' },
      { name:'Philipp Raimund', event:'Ski Jumping · Men\'s NH', medal:'gold', hometown:'Oberstdorf, Bavaria', lat:47.41, lng:10.28, slug:'philipp-raimund' },
      { name:'Emma Aicher', event:'Alpine · Women\'s Downhill', medal:'silver', hometown:'Maribor', hometownCountry:'Slovenia', lat:46.56, lng:15.65, slug:'emma-aicher' },
      { name:'Daniela Maier', event:'Freestyle · Women\'s Ski Cross', medal:'gold', hometown:'Urach, Black Forest', lat:48.49, lng:9.40, slug:'daniela-maier' },
      { name:'Laura Gimmler', event:'Cross-Country · Women\'s Team Sprint', medal:'bronze', hometown:'Oberstdorf, Bavaria', lat:47.41, lng:10.28, slug:'laura-gimmler' },
      { name:'Coletta Rydzek', event:'Cross-Country · Women\'s Team Sprint', medal:'bronze', hometown:'Oberstdorf, Bavaria', lat:47.41, lng:10.28, slug:'coletta-rydzek' },
      { name:'Franziska Preuß', event:'Biathlon · Mixed Relay', medal:'bronze', hometown:'Wasserburg am Inn, Bavaria', lat:48.06, lng:12.23, slug:'franziska-preuss' },
    ]
  },
  {
    name:'France', code:'FRA', flag:'🇫🇷', ring:OC.blue,
    gold:8, silver:9, bronze:6,
    athletes:[
      { name:'Quentin Fillon Maillet', event:'Biathlon · Men\'s Sprint', medal:'gold', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'qfm-sprint' },
      { name:'Quentin Fillon Maillet', event:'Biathlon · Men\'s Mass Start', medal:'bronze', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'qfm-mass' },
      { name:'Quentin Fillon Maillet', event:'Biathlon · Mixed Relay', medal:'gold', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'qfm-mixed' },
      { name:'Quentin Fillon Maillet', event:'Biathlon · Men\'s Relay', medal:'gold', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'qfm-relay' },
      { name:'Éric Perrot', event:'Biathlon · Men\'s 20km Individual', medal:'silver', hometown:'Les Fourgs, Doubs', lat:46.83, lng:6.40, slug:'eric-perrot' },
      { name:'Emilien Jacquelin', event:'Biathlon · Men\'s Pursuit', medal:'bronze', hometown:'Grenoble', lat:45.19, lng:5.72, slug:'emilien-jacquelin' },
      { name:'Julia Simon', event:'Biathlon · Women\'s 15km', medal:'gold', hometown:'Albertville, Savoie', lat:45.68, lng:6.39, slug:'julia-simon-15km' },
      { name:'Lou Jeanmonnot', event:'Biathlon · Women\'s 15km', medal:'silver', hometown:'Pontarlier', lat:46.91, lng:6.35, slug:'jeanmonnot-15km' },
      { name:'Océane Michelon', event:'Biathlon · Women\'s Sprint', medal:'silver', hometown:'Prémanon, Jura', lat:46.47, lng:6.06, slug:'michelon-sprint' },
      { name:'Lou Jeanmonnot', event:'Biathlon · Women\'s Sprint', medal:'bronze', hometown:'Pontarlier', lat:46.91, lng:6.35, slug:'jeanmonnot-sprint' },
      { name:'Océane Michelon', event:'Biathlon · Women\'s Mass Start', medal:'gold', hometown:'Prémanon, Jura', lat:46.47, lng:6.06, slug:'michelon-mass' },
      { name:'Julia Simon', event:'Biathlon · Women\'s Mass Start', medal:'silver', hometown:'Albertville, Savoie', lat:45.68, lng:6.39, slug:'julia-simon-mass' },
      { name:'Julia Simon', event:'Biathlon · Women\'s Relay', medal:'gold', hometown:'Albertville, Savoie', lat:45.68, lng:6.39, slug:'julia-simon-relay' },
      { name:'Mathis Desloges', event:'Cross-Country · Men\'s Skiathlon', medal:'silver', hometown:'Les Contamines, Haute-Savoie', lat:45.82, lng:6.73, slug:'desloges-skiathlon' },
      { name:'Mathis Desloges', event:'Cross-Country · Men\'s 10km Free', medal:'silver', hometown:'Les Contamines, Haute-Savoie', lat:45.82, lng:6.73, slug:'desloges-10km' },
      { name:'Romane Miradoli', event:'Alpine · Women\'s Super-G', medal:'silver', hometown:'La Côte-Saint-André, Isère', lat:45.39, lng:5.26, slug:'romane-miradoli' },
      { name:'Laurence Fournier Beaudry', event:'Figure Skating · Ice Dance', medal:'gold', hometown:'Montréal, Québec', hometownCountry:'Canada', lat:45.50, lng:-73.57, slug:'fournier-beaudry' },
      { name:'Guillaume Cizeron', event:'Figure Skating · Ice Dance', medal:'gold', hometown:'Montbrison, Loire', lat:45.61, lng:4.07, slug:'guillaume-cizeron' },
      { name:'Perrine Laffont', event:'Freestyle · Women\'s Moguls', medal:'bronze', hometown:'Cauterets, Pyrénées', lat:42.89, lng:-0.11, slug:'perrine-laffont' },
      { name:'Emily Harrop', event:'Ski Mountaineering · Women\'s Sprint', medal:'silver', hometown:'Chamonix, Haute-Savoie', lat:45.92, lng:6.87, slug:'emily-harrop' },
      { name:'Thibault Anselmet', event:'Ski Mountaineering · Men\'s Sprint', medal:'bronze', hometown:'Bonneval-sur-Arc, Savoie', lat:45.37, lng:7.05, slug:'thibault-anselmet' },
      { name:'Emily Harrop', event:'Ski Mountaineering · Mixed Relay', medal:'gold', hometown:'Chamonix, Haute-Savoie', lat:45.92, lng:6.87, slug:'harrop-relay' },
      { name:'Thibault Anselmet', event:'Ski Mountaineering · Mixed Relay', medal:'gold', hometown:'Bonneval-sur-Arc, Savoie', lat:45.37, lng:7.05, slug:'anselmet-relay' },
    ]
  },
  {
    name:'Sweden', code:'SWE', flag:'🇸🇪', ring:OC.yellow,
    gold:8, silver:6, bronze:4,
    athletes:[
      { name:'Frida Karlsson', event:'Cross-Country · Women\'s Skiathlon', medal:'gold', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'frida-karlsson' },
      { name:'Ebba Andersson', event:'Cross-Country · Women\'s Skiathlon', medal:'silver', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'andersson-skiathlon' },
      { name:'Linn Svahn', event:'Cross-Country · Women\'s Sprint', medal:'gold', hometown:'Östersund', lat:63.18, lng:14.64, slug:'linn-svahn' },
      { name:'Jonna Sundling', event:'Cross-Country · Women\'s Sprint', medal:'silver', hometown:'Piteå', lat:65.32, lng:21.49, slug:'sundling-sprint' },
      { name:'Maja Dahlqvist', event:'Cross-Country · Women\'s Sprint', medal:'bronze', hometown:'Falun', lat:60.60, lng:15.63, slug:'dahlqvist-sprint' },
      { name:'Jonna Sundling', event:'Cross-Country · Women\'s Team Sprint', medal:'gold', hometown:'Piteå', lat:65.32, lng:21.49, slug:'sundling-teamsprint' },
      { name:'Maja Dahlqvist', event:'Cross-Country · Women\'s Team Sprint', medal:'gold', hometown:'Falun', lat:60.60, lng:15.63, slug:'dahlqvist-teamsprint' },
      { name:'Ebba Andersson', event:'Cross-Country · Women\'s 50km', medal:'gold', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'andersson-50km' },
      { name:'Sara Hector', event:'Alpine Skiing · Women\'s GS', medal:'silver', hometown:'Kungsbacka', lat:57.49, lng:12.07, slug:'sara-hector' },
      { name:'Anna Swenn Larsson', event:'Alpine · Women\'s Slalom', medal:'bronze', hometown:'Solna', lat:59.37, lng:18.00, slug:'anna-swenn-larsson' },
      { name:'Martin Ponsiluoma', event:'Biathlon · Men\'s Pursuit', medal:'gold', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'martin-ponsiluoma' },
      { name:'Sandra Näslund', event:'Freestyle · Women\'s Ski Cross', medal:'bronze', hometown:'Kramfors', lat:62.93, lng:17.77, slug:'sandra-naslund' },
      { name:'Anna Hasselborg (Skip)', event:'Curling · Women\'s', medal:'gold', hometown:'Sundsvall', lat:62.39, lng:17.31, slug:'anna-hasselborg' },
      { name:'Frida Karlsson', event:'Cross-Country · Women\'s 10km Free', medal:'gold', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'karlsson-10km' },
      { name:'Ebba Andersson', event:'Cross-Country · Women\'s 10km Free', medal:'silver', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'andersson-10km' },
      { name:'Linn Gestblom', event:'Biathlon · Women\'s Relay', medal:'silver', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'linn-gestblom' },
      { name:'Anna Magnusson', event:'Biathlon · Women\'s Relay', medal:'silver', hometown:'Ockelbo', lat:60.89, lng:16.39, slug:'anna-magnusson' },
      { name:'Elvira Öberg', event:'Biathlon · Women\'s Relay', medal:'silver', hometown:'Kiruna', lat:67.86, lng:20.22, slug:'elvira-oberg' },
      { name:'Hanna Öberg', event:'Biathlon · Women\'s Relay', medal:'silver', hometown:'Kiruna', lat:67.86, lng:20.22, slug:'hanna-oberg' },
      { name:'Isabella Wranå', event:'Curling · Mixed Doubles', medal:'gold', hometown:'Sundsvall', lat:62.39, lng:17.31, slug:'isabella-wrana' },
      { name:'Rasmus Wranå', event:'Curling · Mixed Doubles', medal:'gold', hometown:'Sundsvall', lat:62.39, lng:17.31, slug:'rasmus-wrana' },
    ]
  },
  {
    name:'Switzerland', code:'SUI', flag:'🇨🇭', ring:OC.red,
    gold:6, silver:9, bronze:8,
    athletes:[
      { name:'Franjo von Allmen', event:'Alpine · Men\'s Downhill', medal:'gold', hometown:'Adelboden', lat:46.49, lng:7.56, slug:'von-allmen-dh' },
      { name:'Franjo von Allmen', event:'Alpine · Men\'s Super-G', medal:'gold', hometown:'Adelboden', lat:46.49, lng:7.56, slug:'von-allmen-sg' },
      { name:'Franjo von Allmen', event:'Alpine · Men\'s Team Combined', medal:'gold', hometown:'Adelboden', lat:46.49, lng:7.56, slug:'von-allmen-tc' },
      { name:'Tanguy Nef', event:'Alpine · Men\'s Team Combined', medal:'gold', hometown:'Geneva', lat:46.20, lng:6.14, slug:'tanguy-nef' },
      { name:'Marco Odermatt', event:'Alpine · Men\'s Team Combined', medal:'silver', hometown:'Buochs', lat:46.97, lng:8.42, slug:'odermatt-tc' },
      { name:'Loïc Meillard', event:'Alpine · Men\'s Team Combined', medal:'silver', hometown:'Neuchâtel', lat:46.99, lng:6.93, slug:'meillard-tc' },
      { name:'Marco Odermatt', event:'Alpine · Men\'s Super-G', medal:'bronze', hometown:'Buochs', lat:46.97, lng:8.42, slug:'odermatt-sg' },
      { name:'Marco Odermatt', event:'Alpine · Men\'s Giant Slalom', medal:'silver', hometown:'Buochs', lat:46.97, lng:8.42, slug:'odermatt-gs' },
      { name:'Loïc Meillard', event:'Alpine · Men\'s Giant Slalom', medal:'bronze', hometown:'Neuchâtel', lat:46.99, lng:6.93, slug:'meillard-gs' },
      { name:'Loïc Meillard', event:'Alpine · Men\'s Slalom', medal:'gold', hometown:'Neuchâtel', lat:46.99, lng:6.93, slug:'meillard-sl' },
      { name:'Camille Rast', event:'Alpine · Women\'s Slalom', medal:'silver', hometown:'Vétroz, Valais', lat:46.22, lng:7.28, slug:'camille-rast' },
      { name:'Nadja Kaelin', event:'Cross-Country · Women\'s Team Sprint', medal:'silver', hometown:'Horw, Lucerne', lat:47.02, lng:8.31, slug:'kaelin-teamsprint' },
      { name:'Nadine Faehndrich', event:'Cross-Country · Women\'s Team Sprint', medal:'silver', hometown:'Eigenthal, Lucerne', lat:47.03, lng:8.18, slug:'nadine-faehndrich' },
      { name:'Nadja Kaelin', event:'Cross-Country · Women\'s 50km', medal:'bronze', hometown:'Horw, Lucerne', lat:47.02, lng:8.31, slug:'kaelin-50km' },
      { name:'Mathilde Gremaud', event:'Freestyle · Women\'s Slopestyle', medal:'gold', hometown:'La Roche, Fribourg', lat:46.69, lng:7.12, slug:'mathilde-gremaud' },
      { name:'Fanny Smith', event:'Freestyle · Women\'s Ski Cross', medal:'silver', hometown:'Villars-sur-Ollon', lat:46.30, lng:7.06, slug:'fanny-smith' },
      { name:'Michael Vogt', event:'Bobsled · 4-Man', medal:'bronze', hometown:'Zurich', lat:47.38, lng:8.54, slug:'michael-vogt' },
      { name:'Marianne Fatton', event:'Ski Mountaineering · Women\'s Sprint', medal:'gold', hometown:'Champéry, Valais', lat:46.18, lng:6.87, slug:'fatton-sprint' },
      { name:'Silvana Tirinzoni (Skip)', event:'Curling · Women\'s', medal:'silver', hometown:'Zurich', lat:47.38, lng:8.54, slug:'silvana-tirinzoni' },
      { name:'Switzerland Team', event:'Curling · Men\'s', medal:'bronze', hometown:'Bern', lat:46.95, lng:7.45, slug:'sui-curling-men' },
      { name:'Switzerland Team', event:'Ice Hockey · Women\'s', medal:'bronze', hometown:'Zurich', lat:47.38, lng:8.54, slug:'sui-hockey-women' },
    ]
  },
  {
    name:'Austria', code:'AUT', flag:'🇦🇹', ring:OC.red,
    gold:5, silver:8, bronze:5,
    athletes:[
      { name:'Ariane Rädler', event:'Alpine · Women\'s Team Combined', medal:'gold', hometown:'Dornbirn, Vorarlberg', lat:47.41, lng:9.74, slug:'ariane-radler' },
      { name:'Katharina Huber', event:'Alpine · Women\'s Team Combined', medal:'gold', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'katharina-huber' },
      { name:'Vincent Kriechmayr', event:'Alpine · Men\'s Team Combined', medal:'silver', hometown:'Gramastetten, Upper Austria', lat:48.38, lng:14.19, slug:'vincent-kriechmayr' },
      { name:'Manuel Feller', event:'Alpine · Men\'s Team Combined', medal:'silver', hometown:'Fieberbrunn, Tyrol', lat:47.48, lng:12.55, slug:'manuel-feller' },
      { name:'Fabio Gstrein', event:'Alpine · Men\'s Slalom', medal:'silver', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'fabio-gstrein' },
      { name:'Cornelia Hütter', event:'Alpine · Women\'s Super-G', medal:'bronze', hometown:'Admont, Styria', lat:47.57, lng:14.46, slug:'cornelia-hutter' },
      { name:'Jonas Müller', event:'Luge · Men\'s Singles', medal:'silver', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'jonas-muller' },
      { name:'Thomas Steu', event:'Luge · Men\'s Doubles', medal:'silver', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'thomas-steu' },
      { name:'Wolfgang Kindl', event:'Luge · Men\'s Doubles', medal:'silver', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'wolfgang-kindl' },
      { name:'Selina Egle', event:'Luge · Women\'s Doubles', medal:'bronze', hometown:'Rum, Tyrol', lat:47.28, lng:11.45, slug:'selina-egle' },
      { name:'Austria Team', event:'Luge · Team Relay', medal:'silver', hometown:'Innsbruck', lat:47.26, lng:11.39, slug:'aut-luge-relay' },
      { name:'Jan Hörl', event:'Ski Jumping · Men\'s Super Team LH', medal:'gold', hometown:'Bischofshofen, Salzburg', lat:47.42, lng:13.22, slug:'jan-horl' },
      { name:'Stephan Embacher', event:'Ski Jumping · Men\'s Super Team LH', medal:'gold', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'stephan-embacher' },
      { name:'Alessandro Hämmerle', event:'Snowboard · Men\'s SBX', medal:'gold', hometown:'Lustenau, Vorarlberg', lat:47.43, lng:9.66, slug:'alessandro-hammerle' },
      { name:'Jakob Dusek', event:'Snowboard · Men\'s SBX', medal:'bronze', hometown:'Vienna', lat:48.21, lng:16.37, slug:'jakob-dusek' },
      { name:'Benjamin Karl', event:'Snowboard · Men\'s PGS', medal:'gold', hometown:'St. Veit, Carinthia', lat:46.77, lng:14.36, slug:'benjamin-karl' },
      { name:'Sabine Payer', event:'Snowboard · Women\'s PGS', medal:'silver', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'sabine-payer' },
      { name:'Janine Flock', event:'Skeleton · Women\'s', medal:'gold', hometown:'Hall in Tirol', lat:47.29, lng:11.51, slug:'janine-flock' },
      { name:'Johannes Lamparter', event:'Nordic Combined · NH/10km', medal:'silver', hometown:'Rum, Tyrol', lat:47.28, lng:11.45, slug:'lamparter-nh' },
      { name:'Johannes Lamparter', event:'Nordic Combined · LH/10km', medal:'silver', hometown:'Rum, Tyrol', lat:47.28, lng:11.45, slug:'lamparter-lh' },
      { name:'Stefan Rettenegger', event:'Nordic Combined · Team Sprint', medal:'bronze', hometown:'Saalfelden, Salzburg', lat:47.43, lng:12.85, slug:'stefan-rettenegger' },
      { name:'Matěj Švancer', event:'Freestyle · Men\'s Big Air', medal:'bronze', hometown:'Prague', hometownCountry:'Czechia', lat:50.08, lng:14.44, slug:'matej-svancer' },
    ]
  },
  {
    name:'Japan', code:'JPN', flag:'🇯🇵', ring:OC.red,
    gold:5, silver:7, bronze:12,
    athletes:[
      { name:'Yuma Kagiyama', event:'Figure Skating · Men\'s Singles', medal:'silver', hometown:'Yokohama', lat:35.44, lng:139.64, slug:'yuma-kagiyama' },
      { name:'Shun Sato', event:'Figure Skating · Men\'s Singles', medal:'bronze', hometown:'Sendai', lat:38.27, lng:140.87, slug:'shun-sato' },
      { name:'Kaori Sakamoto', event:'Figure Skating · Women\'s Singles', medal:'silver', hometown:'Kobe', lat:34.69, lng:135.20, slug:'kaori-sakamoto' },
      { name:'Ami Nakai', event:'Figure Skating · Women\'s Singles', medal:'bronze', hometown:'Nagoya', lat:35.18, lng:136.91, slug:'ami-nakai' },
      { name:'Riku Miura', event:'Figure Skating · Pairs', medal:'gold', hometown:'Chiba', lat:35.61, lng:140.12, slug:'riku-miura' },
      { name:'Ryuichi Kihara', event:'Figure Skating · Pairs', medal:'gold', hometown:'Nagoya', lat:35.18, lng:136.91, slug:'ryuichi-kihara' },
      { name:'Japan Team', event:'Figure Skating · Team Event', medal:'silver', hometown:'Tokyo', lat:35.68, lng:139.69, slug:'jpn-figure-team' },
      { name:'Kira Kimura', event:'Snowboard · Men\'s Big Air', medal:'gold', hometown:'Tokyo', lat:35.68, lng:139.69, slug:'kira-kimura' },
      { name:'Ryoma Kimata', event:'Snowboard · Men\'s Big Air', medal:'silver', hometown:'Osaka', lat:34.69, lng:135.50, slug:'ryoma-kimata' },
      { name:'Kokomo Murase', event:'Snowboard · Women\'s Big Air', medal:'gold', hometown:'Gifu', lat:35.39, lng:136.72, slug:'murase-ba' },
      { name:'Yuto Totsuka', event:'Snowboard · Men\'s Halfpipe', medal:'gold', hometown:'Yokohama', lat:35.44, lng:139.64, slug:'yuto-totsuka' },
      { name:'Ryusei Yamada', event:'Snowboard · Men\'s Halfpipe', medal:'bronze', hometown:'Asahikawa, Hokkaido', lat:43.77, lng:142.37, slug:'ryusei-yamada' },
      { name:'Mitsuki Ono', event:'Snowboard · Women\'s Halfpipe', medal:'bronze', hometown:'Asahikawa, Hokkaido', lat:43.77, lng:142.37, slug:'mitsuki-ono' },
      { name:'Mari Fukada', event:'Snowboard · Women\'s Slopestyle', medal:'gold', hometown:'Niigata', lat:37.90, lng:139.02, slug:'mari-fukada' },
      { name:'Kokomo Murase', event:'Snowboard · Women\'s Slopestyle', medal:'bronze', hometown:'Gifu', lat:35.39, lng:136.72, slug:'murase-ss' },
      { name:'Taiga Hasegawa', event:'Snowboard · Men\'s Slopestyle', medal:'silver', hometown:'Niigata', lat:37.90, lng:139.02, slug:'taiga-hasegawa' },
      { name:'Miho Takagi', event:'Speed Skating · Women\'s 500m', medal:'bronze', hometown:'Memanbetsu, Hokkaido', lat:43.91, lng:144.17, slug:'takagi-500' },
      { name:'Miho Takagi', event:'Speed Skating · Women\'s 1000m', medal:'bronze', hometown:'Memanbetsu, Hokkaido', lat:43.91, lng:144.17, slug:'takagi-1000' },
      { name:'Nozomi Maruyama', event:'Ski Jumping · Women\'s NH', medal:'bronze', hometown:'Sapporo, Hokkaido', lat:43.06, lng:141.35, slug:'nozomi-maruyama' },
      { name:'Ren Nikaido', event:'Ski Jumping · Men\'s NH', medal:'bronze', hometown:'Shimokawa, Hokkaido', lat:44.30, lng:142.63, slug:'nikaido-nh' },
      { name:'Ren Nikaido', event:'Ski Jumping · Men\'s LH', medal:'silver', hometown:'Shimokawa, Hokkaido', lat:44.30, lng:142.63, slug:'nikaido-lh' },
      { name:'Ikuma Horishima', event:'Freestyle · Men\'s Moguls', medal:'bronze', hometown:'Ikeda, Gifu', lat:35.44, lng:136.57, slug:'horishima-moguls' },
      { name:'Ikuma Horishima', event:'Freestyle · Men\'s Dual Moguls', medal:'silver', hometown:'Ikeda, Gifu', lat:35.44, lng:136.57, slug:'horishima-dual' },
    ]
  },
  {
    name:'Canada', code:'CAN', flag:'🇨🇦', ring:OC.red,
    gold:5, silver:7, bronze:9,
    athletes:[
      { name:'Steven Dubois', event:'Short Track · Men\'s 500m', medal:'gold', hometown:'Lachenaie, Québec', lat:45.65, lng:-73.54, slug:'steven-dubois' },
      { name:'Courtney Sarault', event:'Short Track · Women\'s 500m', medal:'bronze', hometown:'Moncton, New Brunswick', lat:46.09, lng:-64.77, slug:'sarault-500' },
      { name:'Courtney Sarault', event:'Short Track · Women\'s 1000m', medal:'silver', hometown:'Moncton, New Brunswick', lat:46.09, lng:-64.77, slug:'sarault-1000' },
      { name:'Mikaël Kingsbury', event:'Freestyle · Men\'s Moguls', medal:'silver', hometown:'Deux-Montagnes, Québec', lat:45.54, lng:-73.89, slug:'kingsbury-moguls' },
      { name:'Mikaël Kingsbury', event:'Freestyle · Men\'s Dual Moguls', medal:'gold', hometown:'Deux-Montagnes, Québec', lat:45.54, lng:-73.89, slug:'kingsbury-dual' },
      { name:'Megan Oldham', event:'Freestyle · Women\'s Slopestyle', medal:'bronze', hometown:'Parry Sound, Ontario', lat:45.34, lng:-80.04, slug:'oldham-ss' },
      { name:'Megan Oldham', event:'Freestyle · Women\'s Big Air', medal:'gold', hometown:'Parry Sound, Ontario', lat:45.34, lng:-80.04, slug:'oldham-ba' },
      { name:'Brendan Mackay', event:'Freestyle · Men\'s Halfpipe', medal:'bronze', hometown:'Calgary, Alberta', lat:51.05, lng:-114.07, slug:'brendan-mackay' },
      { name:'Éliot Grondin', event:'Snowboard · Men\'s SBX', medal:'silver', hometown:'Sainte-Marie, Québec', lat:46.44, lng:-71.03, slug:'eliot-grondin' },
      { name:'Laurent Dubreuil', event:'Speed Skating · Men\'s 500m', medal:'bronze', hometown:'Lévis, Québec', lat:46.80, lng:-71.18, slug:'laurent-dubreuil' },
      { name:'Valérie Maltais', event:'Speed Skating · Women\'s 1500m', medal:'bronze', hometown:'La Baie, Québec', lat:48.34, lng:-70.87, slug:'maltais-1500' },
      { name:'Valérie Maltais', event:'Speed Skating · Women\'s 3000m', medal:'bronze', hometown:'La Baie, Québec', lat:48.34, lng:-70.87, slug:'maltais-3000' },
      { name:'Ivanie Blondin', event:'Speed Skating · Women\'s Mass Start', medal:'silver', hometown:'Ottawa, Ontario', lat:45.42, lng:-75.70, slug:'ivanie-blondin' },
      { name:'Canada Team', event:'Speed Skating · Women\'s Team Pursuit', medal:'gold', hometown:'Calgary, Alberta', lat:51.05, lng:-114.07, slug:'can-women-tp' },
      { name:'Piper Gilles', event:'Figure Skating · Ice Dance', medal:'bronze', hometown:'Toronto, Ontario', lat:43.65, lng:-79.38, slug:'piper-gilles' },
      { name:'Paul Poirier', event:'Figure Skating · Ice Dance', medal:'bronze', hometown:'Unionville, Ontario', lat:43.87, lng:-79.32, slug:'paul-poirier' },
      { name:'Brad Jacobs (Skip)', event:'Curling · Men\'s', medal:'gold', hometown:'Sault Ste. Marie, Ontario', lat:46.52, lng:-84.35, slug:'brad-jacobs' },
      { name:'Canada Team', event:'Curling · Women\'s', medal:'bronze', hometown:'Ottawa, Ontario', lat:45.42, lng:-75.70, slug:'can-curling-women' },
      { name:'Canada Team', event:'Ice Hockey · Men\'s', medal:'silver', hometown:'Toronto, Ontario', lat:43.65, lng:-79.38, slug:'can-hockey-men' },
      { name:'Canada Team', event:'Ice Hockey · Women\'s', medal:'silver', hometown:'Toronto, Ontario', lat:43.65, lng:-79.38, slug:'can-hockey-women' },
    ]
  },
  {
    name:'China', code:'CHN', flag:'🇨🇳', ring:OC.red,
    gold:5, silver:4, bronze:6,
    athletes:[
      { name:'Eileen Gu', event:'Freestyle · Women\'s Halfpipe', medal:'gold', hometown:'San Francisco, California', hometownCountry:'United States', lat:37.77, lng:-122.42, slug:'eileen-gu-hp' },
      { name:'Eileen Gu', event:'Freestyle · Women\'s Slopestyle', medal:'silver', hometown:'San Francisco, California', hometownCountry:'United States', lat:37.77, lng:-122.42, slug:'eileen-gu-ss' },
      { name:'Eileen Gu', event:'Freestyle · Women\'s Big Air', medal:'silver', hometown:'San Francisco, California', hometownCountry:'United States', lat:37.77, lng:-122.42, slug:'eileen-gu-ba' },
      { name:'Li Fanghui', event:'Freestyle · Women\'s Halfpipe', medal:'silver', hometown:'Beijing', lat:39.90, lng:116.40, slug:'li-fanghui' },
      { name:'Xu Mengtao', event:'Freestyle · Women\'s Aerials', medal:'gold', hometown:'Shenyang, Liaoning', lat:41.81, lng:123.43, slug:'xu-mengtao' },
      { name:'Wang Xindi', event:'Freestyle · Men\'s Aerials', medal:'gold', hometown:'Changchun, Jilin', lat:43.88, lng:125.32, slug:'wang-xindi' },
      { name:'Li Tianma', event:'Freestyle · Men\'s Aerials', medal:'bronze', hometown:'Harbin, Heilongjiang', lat:45.75, lng:126.65, slug:'li-tianma' },
      { name:'Su Yiming', event:'Snowboard · Men\'s Big Air', medal:'bronze', hometown:'Jilin City, Jilin', lat:43.88, lng:126.55, slug:'su-yiming-ba' },
      { name:'Su Yiming', event:'Snowboard · Men\'s Slopestyle', medal:'gold', hometown:'Jilin City, Jilin', lat:43.88, lng:126.55, slug:'su-yiming-ss' },
      { name:'Ning Zhongyan', event:'Speed Skating · Men\'s 1500m', medal:'gold', hometown:'Changchun, Jilin', lat:43.88, lng:125.32, slug:'ning-zhongyan-1500' },
      { name:'Ning Zhongyan', event:'Speed Skating · Men\'s 1000m', medal:'bronze', hometown:'Changchun, Jilin', lat:43.88, lng:125.32, slug:'ning-zhongyan-1000' },
      { name:'Sun Long', event:'Short Track · Men\'s 1000m', medal:'silver', hometown:'Changchun, Jilin', lat:43.88, lng:125.32, slug:'sun-long' },
    ]
  },
  { name:'South Korea', code:'KOR', flag:'🇰🇷', ring:OC.blue, gold:3, silver:4, bronze:3, athletes:[
    { name:'Kim Gil-li', event:'Short Track · Women\'s 1500m', medal:'gold', hometown:'Seoul', lat:37.57, lng:126.98, slug:'kim-gilli-1500' },
    { name:'Choi Min-jeong', event:'Short Track · Women\'s 1500m', medal:'silver', hometown:'Seoul', lat:37.57, lng:126.98, slug:'choi-minjeong' },
    { name:'Kim Gil-li', event:'Short Track · Women\'s 1000m', medal:'bronze', hometown:'Seoul', lat:37.57, lng:126.98, slug:'kim-gilli-1000' },
    { name:'South Korea Team', event:'Short Track · Women\'s 3000m Relay', medal:'gold', hometown:'Seoul', lat:37.57, lng:126.98, slug:'kor-relay-women' },
    { name:'South Korea Team', event:'Short Track · Men\'s 5000m Relay', medal:'silver', hometown:'Seoul', lat:37.57, lng:126.98, slug:'kor-relay-men' },
    { name:'Rim Jong-un', event:'Short Track · Men\'s 1000m', medal:'bronze', hometown:'Goyang', lat:37.66, lng:126.83, slug:'rim-jongun' },
    { name:'Choi Ga-on', event:'Snowboard · Women\'s Halfpipe', medal:'gold', hometown:'Seoul', lat:37.57, lng:126.98, slug:'choi-gaon' },
    { name:'Yu Seung-Eun', event:'Snowboard · Women\'s Big Air', medal:'bronze', hometown:'Seoul', lat:37.57, lng:126.98, slug:'yu-seungeun' },
    { name:'Kim Sang-Kyum', event:'Snowboard · Men\'s PGS', medal:'silver', hometown:'Seoul', lat:37.57, lng:126.98, slug:'kim-sangkyum' },
  ]},
  { name:'Australia', code:'AUS', flag:'🇦🇺', ring:OC.green, gold:3, silver:2, bronze:1, athletes:[
    { name:'Cooper Woods-Topalovic', event:'Freestyle · Men\'s Moguls', medal:'gold', hometown:'Melbourne, Victoria', lat:-37.81, lng:144.96, slug:'cooper-woods-topalovic' },
    { name:'Jakara Anthony', event:'Freestyle · Women\'s Dual Moguls', medal:'gold', hometown:'Barwon Heads, Victoria', lat:-38.27, lng:144.50, slug:'jakara-anthony' },
    { name:'Matt Graham', event:'Freestyle · Men\'s Dual Moguls', medal:'bronze', hometown:'Tuggeranong, ACT', lat:-35.42, lng:149.07, slug:'matt-graham' },
    { name:'Josie Baff', event:'Snowboard · Women\'s SBX', medal:'gold', hometown:'Sydney', lat:-33.87, lng:151.21, slug:'josie-baff' },
    { name:'Scotty James', event:'Snowboard · Men\'s Halfpipe', medal:'silver', hometown:'Warrandyte, Victoria', lat:-37.76, lng:145.23, slug:'scotty-james' },
  ]},
  { name:'Great Britain', code:'GBR', flag:'🇬🇧', ring:OC.blue, gold:3, silver:1, bronze:1, athletes:[
    { name:'Matt Weston', event:'Skeleton · Men\'s', medal:'gold', hometown:'Peterborough', lat:52.57, lng:-0.24, slug:'matt-weston' },
    { name:'Matt Weston', event:'Skeleton · Mixed Team', medal:'gold', hometown:'Peterborough', lat:52.57, lng:-0.24, slug:'weston-mixed' },
    { name:'Tabitha Stoecker', event:'Skeleton · Mixed Team', medal:'gold', hometown:'London', lat:51.51, lng:-0.13, slug:'tabitha-stoecker' },
    { name:'Charlotte Bankes', event:'Snowboard · Mixed Team SBX', medal:'gold', hometown:'Hemel Hempstead', lat:51.75, lng:-0.47, slug:'charlotte-bankes' },
    { name:'Huw Nightingale', event:'Snowboard · Mixed Team SBX', medal:'gold', hometown:'Cardiff', lat:51.48, lng:-3.18, slug:'huw-nightingale' },
    { name:'Zoe Atkin', event:'Freestyle · Women\'s Halfpipe', medal:'bronze', hometown:'Edinburgh', lat:55.95, lng:-3.19, slug:'zoe-atkin' },
    { name:'Great Britain Team', event:'Curling · Men\'s', medal:'silver', hometown:'Edinburgh', lat:55.95, lng:-3.19, slug:'gb-curling' },
  ]},
  { name:'Czechia', code:'CZE', flag:'🇨🇿', ring:OC.blue, gold:2, silver:2, bronze:1, athletes:[
    { name:'Metoděj Jílek', event:'Speed Skating · Men\'s 10000m', medal:'gold', hometown:'Prague', lat:50.08, lng:14.44, slug:'jilek-10k' },
    { name:'Metoděj Jílek', event:'Speed Skating · Men\'s 5000m', medal:'silver', hometown:'Prague', lat:50.08, lng:14.44, slug:'jilek-5k' },
    { name:'Tereza Voborníková', event:'Biathlon · Women\'s Mass Start', medal:'bronze', hometown:'Jihlava', lat:49.40, lng:15.59, slug:'vobornikova' },
    { name:'Eva Adamczyková', event:'Snowboard · Women\'s SBX', medal:'silver', hometown:'Bílá, Frýdek-Místek', lat:49.47, lng:18.44, slug:'eva-adamczykova' },
    { name:'Zuzana Maderova', event:'Snowboard · Women\'s PGS', medal:'gold', hometown:'Prague', lat:50.08, lng:14.44, slug:'zuzana-maderova' },
  ]},
  { name:'Slovenia', code:'SLO', flag:'🇸🇮', ring:OC.green, gold:2, silver:1, bronze:1, athletes:[
    { name:'Domen Prevc', event:'Ski Jumping · Men\'s LH', medal:'gold', hometown:'Kranj', lat:46.24, lng:14.35, slug:'domen-prevc' },
    { name:'Nika Prevc', event:'Ski Jumping · Women\'s NH', medal:'silver', hometown:'Kranj', lat:46.24, lng:14.35, slug:'nika-prevc-nh' },
    { name:'Nika Prevc', event:'Ski Jumping · Women\'s LH', medal:'bronze', hometown:'Kranj', lat:46.24, lng:14.35, slug:'nika-prevc-lh' },
    { name:'Slovenia Team', event:'Ski Jumping · Mixed Team NH', medal:'gold', hometown:'Ljubljana', lat:46.06, lng:14.51, slug:'slo-ski-jump-team' },
  ]},
  { name:'Spain', code:'ESP', flag:'🇪🇸', ring:OC.yellow, gold:1, silver:0, bronze:2, athletes:[
    { name:'Oriol Cardona Coll', event:'Ski Mountaineering · Men\'s Sprint', medal:'gold', hometown:'Berga, Catalonia', lat:42.10, lng:1.85, slug:'cardona-sprint' },
    { name:'Ana Alonso Rodriguez', event:'Ski Mountaineering · Women\'s Sprint', medal:'bronze', hometown:'Madrid', lat:40.42, lng:-3.70, slug:'alonso-sprint' },
    { name:'Spain Team', event:'Ski Mountaineering · Mixed Relay', medal:'bronze', hometown:'Barcelona', lat:41.39, lng:2.17, slug:'esp-skimo-relay' },
  ]},
  { name:'Brazil', code:'BRA', flag:'🇧🇷', ring:OC.green, gold:1, silver:0, bronze:0, athletes:[
    { name:'Lucas Pinheiro Braathen', event:'Alpine · Men\'s Giant Slalom', medal:'gold', hometown:'Oslo', hometownCountry:'Norway', lat:59.91, lng:10.75, slug:'lucas-pinheiro-braathen' },
  ]},
  { name:'Finland', code:'FIN', flag:'🇫🇮', ring:OC.blue, gold:0, silver:2, bronze:3, athletes:[
    { name:'Eero Hirvonen', event:'Nordic Combined · NH/10km', medal:'bronze', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'hirvonen-nh' },
    { name:'Ilkka Herola', event:'Nordic Combined · LH/10km', medal:'bronze', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'ilkka-herola' },
    { name:'Eero Hirvonen', event:'Nordic Combined · Team Sprint', medal:'silver', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'hirvonen-team' },
    { name:'Ilkka Herola', event:'Nordic Combined · Team Sprint', medal:'silver', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'herola-team' },
    { name:'Suvi Minkkinen', event:'Biathlon · Women\'s Pursuit', medal:'bronze', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'suvi-minkkinen' },
    { name:'Finland Team', event:'Ice Hockey · Men\'s', medal:'bronze', hometown:'Helsinki', lat:60.17, lng:24.94, slug:'fin-hockey' },
  ]},
  { name:'New Zealand', code:'NZL', flag:'🇳🇿', ring:OC.green, gold:0, silver:2, bronze:1, athletes:[
    { name:'Zoi Sadowski-Synnott', event:'Snowboard · Women\'s Big Air', medal:'silver', hometown:'Wanaka', lat:-44.70, lng:169.13, slug:'zoi-ss-ba' },
    { name:'Zoi Sadowski-Synnott', event:'Snowboard · Women\'s Slopestyle', medal:'silver', hometown:'Wanaka', lat:-44.70, lng:169.13, slug:'zoi-ss-ss' },
    { name:'Luca Harrington', event:'Freestyle · Men\'s Slopestyle', medal:'bronze', hometown:'Wellington', lat:-41.29, lng:174.78, slug:'luca-harrington' },
  ]},
  { name:'Poland', code:'POL', flag:'🇵🇱', ring:OC.red, gold:0, silver:2, bronze:1, athletes:[
    { name:'Kacper Tomasiak', event:'Ski Jumping · Men\'s NH', medal:'silver', hometown:'Wisła', lat:49.66, lng:18.86, slug:'tomasiak-nh' },
    { name:'Kacper Tomasiak', event:'Ski Jumping · Men\'s LH', medal:'bronze', hometown:'Wisła', lat:49.66, lng:18.86, slug:'tomasiak-lh' },
    { name:'Paweł Wąsek', event:'Ski Jumping · Men\'s Super Team LH', medal:'silver', hometown:'Wisła', lat:49.66, lng:18.86, slug:'pawel-wasek' },
  ]},
  { name:'Kazakhstan', code:'KAZ', flag:'🇰🇿', ring:OC.yellow, gold:1, silver:0, bronze:0, athletes:[
    { name:'Mikhail Shaidorov', event:'Figure Skating · Men\'s Singles', medal:'gold', hometown:'Almaty', lat:43.24, lng:76.95, slug:'mikhail-shaidorov' },
  ]},
  { name:'Georgia', code:'GEO', flag:'🇬🇪', ring:OC.yellow, gold:0, silver:1, bronze:0, athletes:[
    { name:'Anastasiia Metelkina', event:'Figure Skating · Pairs', medal:'silver', hometown:'Tbilisi', lat:41.72, lng:44.79, slug:'anastasiia-metelkina' },
    { name:'Luka Berulava', event:'Figure Skating · Pairs', medal:'silver', hometown:'Tbilisi', lat:41.72, lng:44.79, slug:'luka-berulava' },
  ]},
  { name:'Estonia', code:'EST', flag:'🇪🇪', ring:OC.blue, gold:0, silver:1, bronze:0, athletes:[
    { name:'Henry Sildaru', event:'Freestyle · Men\'s Halfpipe', medal:'silver', hometown:'Tallinn', lat:59.44, lng:24.75, slug:'henry-sildaru' },
  ]},
  { name:'Belgium', code:'BEL', flag:'🇧🇪', ring:OC.black, gold:0, silver:0, bronze:1, athletes:[
    { name:'Hanne Desmet', event:'Short Track · Mixed Team Relay', medal:'bronze', hometown:'Diest', lat:50.99, lng:5.05, slug:'hanne-desmet' },
  ]},
  { name:'Latvia', code:'LAT', flag:'🇱🇻', ring:OC.blue, gold:0, silver:1, bronze:0, athletes:[
    { name:'Elīna Ieva Bota', event:'Luge · Women\'s Singles', medal:'silver', hometown:'Riga', lat:56.95, lng:24.11, slug:'elina-bota' },
  ]},
  { name:'Bulgaria', code:'BUL', flag:'🇧🇬', ring:OC.green, gold:0, silver:0, bronze:1, athletes:[
    { name:'Lora Hristova', event:'Biathlon · Women\'s 15km', medal:'bronze', hometown:'Sofia', lat:42.70, lng:23.32, slug:'lora-hristova' },
    { name:'Tel Zamirov', event:'Snowboard · Men\'s PGS', medal:'bronze', hometown:'Sofia', lat:42.70, lng:23.32, slug:'tel-zamirov' },
  ]},
  { name:'Denmark', code:'DEN', flag:'🇩🇰', ring:OC.blue, gold:0, silver:1, bronze:0, athletes:[
    { name:'Viktor Hald Thorup', event:'Speed Skating · Men\'s Mass Start', medal:'silver', hometown:'Copenhagen', lat:55.68, lng:12.57, slug:'viktor-thorup' },
  ]},
];

/* ── Stories (ordered by public hype) ── */
const STORIES = [
  { sport:'Cross-Country Skiing', headline:'Klæbo: six golds, one man, one Games — the greatest ever', body:"Johannes Høsflot Klæbo from Trondheim won every single cross-country event he entered — six golds at a single Games. He surpassed Eric Heiden's record from Lake Placid 1980 and became the Winter Olympian with the most career golds in history.", center:[10.35, 63.41], zoom:7 },
  { sport:'Alpine Skiing', headline:"Brazil wins its first-ever Winter Olympic medal — gold", body:'Lucas Pinheiro Braathen, born in Oslo to a Brazilian mother and Norwegian father, stunned the world in Giant Slalom. The first tropical, Latin American, and South American nation to medal at a Winter Games. His dot sits in Oslo. His flag is Brazil.', center:[10.75, 59.91], zoom:6 },
  { sport:'Freestyle Skiing', headline:"Eileen Gu: three events, three medals at Milano Cotina 2026 and the most decorated freeskier ever", body:"Born and raised in San Francisco, competing for China — Gu won halfpipe gold, slopestyle silver, and big air silver at Milano Cortina 2026. Her hometown dot sits in California. She is now the most decorated Olympic freestyle skier in history with six total career medals from Beijing and Milano Cortina.", center:[-122.42, 37.77], zoom:8 },
  { sport:'Alpine Skiing · Downhill', headline:'Franjo von Allmen: three alpine golds on Olympic debut', body:'The Swiss skier from tiny Adelboden won downhill, super-G, and team combined — an extraordinary triple on his first Olympics. Switzerland dominated men\'s alpine with an astonishing medal haul.', center:[7.56, 46.49], zoom:9 },
  { sport:'Alpine Skiing · Slalom', headline:'Shiffrin ends her eight-year Olympic drought with slalom gold', body:'Mikaela Shiffrin from Edwards, Colorado won the slalom by the largest margin since 1998. Her third Olympic gold made her the most decorated American alpine skier ever.', center:[-106.59, 39.64], zoom:8 },
  { sport:'Speed Skating', headline:'Jordan Stolz: Wisconsin teen becomes double Olympic champion', body:"From Kewaskum, Wisconsin — population 4,000 — Stolz won 500m and 1000m gold plus 1500m silver. America's speed skating future lives in a small town most people can't find on a map.", center:[-88.23, 43.52], zoom:8 },
  { sport:'Short Track · 500m', headline:'The van \'t Wout brothers light up the short track', body:'Dutch brothers Jens and Melle van \'t Wout from Dordrecht combined for six short track medals at their Olympic debut — four golds, one silver, and one bronze. Jens won three golds (1000m, 1500m, 5000m relay) and bronze in the 500m. Melle took silver in the 500m and relay gold. They became the first siblings to share an Olympic short track podium together.', center:[4.67, 51.81], zoom:9 },
  { sport:'Figure Skating', headline:'Kazakhstan\'s Shaidorov shocks the world with men\'s gold', body:'Mikhail Shaidorov from Almaty delivered one of the biggest upsets in figure skating history, becoming the first Kazakh to win Olympic gold in the sport. Central Asia celebrates.', center:[76.95, 43.24], zoom:7 },
  { sport:'Skeleton', headline:'Matt Weston: double gold from Peterborough to the podium', body:'Great Britain\'s Matt Weston won men\'s skeleton and the inaugural mixed team event, both with track records. Peterborough\'s new favourite son.', center:[-0.24, 52.57], zoom:8 },
  { sport:'Ski Mountaineering', headline:'A brand-new Olympic sport is born — Spain takes gold', body:'Ski mountaineering debuted at Milano-Cortina 2026 and Spain\'s Oriol Cardona Coll won men\'s sprint gold. Born in the Pyrenees, competing in the Alps — the sport\'s spiritual home.', center:[1.85, 42.10], zoom:8 },
];

/* ═══════════════════════════════════════════
   MAP INITIALIZATION
   ═══════════════════════════════════════════ */
mapboxgl.accessToken = 'pk.eyJ1IjoiajAwYnkiLCJhIjoiY2x1bHUzbXZnMGhuczJxcG83YXY4czJ3ayJ9.S5PZpU9VDwLMjoX_0x5FDQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [12, 30],
  zoom: 1.8,
  pitch: 0,
  bearing: 0,
  projection: 'globe',
  antialias: true,
});

map.scrollZoom.disable();
map.dragRotate.enable();
map.touchZoomRotate.enable();

/* ── Globe Rotation ── */
let rotating = true;
function rotateGlobe() {
  if (!rotating) return;
  const c = map.getCenter();
  c.lng += 0.12;
  map.easeTo({ center: c, duration: 200, easing: t => t });
  requestAnimationFrame(rotateGlobe);
}

map.on('style.load', () => {
  map.setFog({
    color: 'rgba(230,225,215,1)',
    'high-color': 'rgba(200,210,230,1)',
    'horizon-blend': 0.06,
    'space-color': 'rgba(15,20,35,1)',
    'star-intensity': 0.4,
  });
  rotateGlobe();
});

/* ═══════════════════════════════════════════
   BUILD MAP LAYERS
   ═══════════════════════════════════════════ */
map.on('load', () => {
  const arcFeatures = [];
  const pointMap = new Map();
  const MEDAL_RANK = { gold: 3, silver: 2, bronze: 1 };

  countries.forEach(c => {
    c.athletes.forEach(a => {
      const steps = 80;
      const coords = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        coords.push([
          a.lng + (CORTINA.lng - a.lng) * t,
          a.lat + (CORTINA.lat - a.lat) * t,
        ]);
      }
      const medalColor = MEDAL[a.medal] || OC.blue;
      arcFeatures.push({
        type: 'Feature',
        properties: { color: medalColor, ringColor: c.ring },
        geometry: { type: 'LineString', coordinates: coords },
      });

      const key = `${a.lat},${a.lng}`;
      if (!pointMap.has(key)) {
        pointMap.set(key, {
          lat: a.lat, lng: a.lng,
          name: a.name, event: a.event, medal: a.medal,
          hometown: a.hometown, country: c.name, flag: c.flag,
          ringColor: c.ring, slug: a.slug || '',
          hometownCountry: a.hometownCountry || c.name,
          highestMedalRank: MEDAL_RANK[a.medal] || 0,
          highestMedal: a.medal,
          medalCount: 1,
        });
      } else {
        const p = pointMap.get(key);
        p.medalCount++;
        const rank = MEDAL_RANK[a.medal] || 0;
        if (rank > p.highestMedalRank) {
          p.highestMedalRank = rank;
          p.highestMedal = a.medal;
        }
      }
    });
  });

  const pointFeatures = [];
  pointMap.forEach(p => {
    const color = MEDAL[p.highestMedal] || OC.blue;
    pointFeatures.push({
      type: 'Feature',
      properties: {
        name: p.name, event: p.event, medal: p.highestMedal,
        hometown: p.hometown, country: p.country, flag: p.flag,
        color, ringColor: p.ringColor,
        slug: p.slug, hometownCountry: p.hometownCountry,
        medalCount: p.medalCount,
      },
      geometry: { type: 'Point', coordinates: [p.lng, p.lat] },
    });
  });

  pointFeatures.push({
    type: 'Feature',
    properties: {
      name: 'Milano-Cortina 2026', event: 'Host City', medal: 'host',
      hometown: "Cortina d'Ampezzo", country: 'Italy', flag: '🇮🇹',
      color: '#1a1a2e', ringColor: '#DAA520',
      medalCount: 0,
    },
    geometry: { type: 'Point', coordinates: [CORTINA.lng, CORTINA.lat] },
  });

  map.addSource('arcs', { type: 'geojson', data: { type: 'FeatureCollection', features: arcFeatures } });
  map.addSource('points', { type: 'geojson', data: { type: 'FeatureCollection', features: pointFeatures } });

  map.addLayer({ id: 'arc-lines', type: 'line', source: 'arcs', paint: { 'line-color': ['get','ringColor'], 'line-width': 1.5, 'line-opacity': 0 }, layout: { 'line-cap': 'round' } });
  map.addLayer({ id: 'arc-glow', type: 'line', source: 'arcs', paint: { 'line-color': ['get','ringColor'], 'line-width': 5, 'line-opacity': 0, 'line-blur': 5 } });

  const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <polygon points="32,4 39.5,24.5 61,24.5 43.5,38 50,59 32,46 14,59 20.5,38 3,24.5 24.5,24.5"
      fill="#E03030" stroke="#ffffff" stroke-width="3"/>
  </svg>`;
  const starImg = new Image(64, 64);
  starImg.onload = () => {
    map.addImage('host-star', starImg);
    addPointLayers();
  };
  starImg.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(starSvg);

  function addPointLayers() {
    const notHost = ['!=', ['get','medal'], 'host'];

    map.addLayer({ id: 'point-ring', type: 'circle', source: 'points', filter: notHost, paint: {
      'circle-radius': ['case', ['>=',['get','medalCount'], 4], 14, ['>=',['get','medalCount'], 2], 12, 9],
      'circle-color': ['get','color'], 'circle-opacity': 0, 'circle-blur': 1,
    }});

    map.addLayer({ id: 'point-core', type: 'circle', source: 'points', filter: notHost, paint: {
      'circle-radius': ['case', ['>=',['get','medalCount'], 4], 10, ['>=',['get','medalCount'], 2], 8, 5],
      'circle-color': ['get','color'],
      'circle-opacity': 0, 'circle-stroke-width': 2, 'circle-stroke-color': '#ffffff',
    }});

    map.addLayer({ id: 'point-label', type: 'symbol', source: 'points',
      filter: ['all', notHost, ['>=', ['get','medalCount'], 2]],
      layout: {
        'text-field': ['to-string', ['get','medalCount']],
        'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'],
        'text-size': ['case', ['>=',['get','medalCount'], 4], 12, 11],
        'text-allow-overlap': true, 'text-ignore-placement': true,
      },
      paint: { 'text-color': '#ffffff', 'text-opacity': 0 },
    });

    map.addLayer({ id: 'host-star', type: 'symbol', source: 'points',
      filter: ['==', ['get','medal'], 'host'],
      layout: { 'icon-image': 'host-star', 'icon-size': 0.45, 'icon-allow-overlap': true, 'icon-ignore-placement': true },
      paint: { 'icon-opacity': 0 },
    });

    ['point-core', 'host-star'].forEach(layer => {
      map.on('mouseenter', layer, () => { map.getCanvas().style.cursor = 'pointer'; });
      map.on('mouseleave', layer, () => { map.getCanvas().style.cursor = ''; });
    });

    map.on('click', 'point-core', (e) => { showAthleteCard(e.features[0].properties); });
    map.on('click', 'host-star', () => {
      map.flyTo({ center: [CORTINA.lng, CORTINA.lat], zoom: 10, pitch: 50, duration: 2000 });
    });
  }

  buildMedalStrip();
});

/* ═══════════════════════════════════════════
   HERO → REVEAL
   ═══════════════════════════════════════════ */
document.getElementById('hero').addEventListener('click', () => {
  document.getElementById('hero').classList.add('hidden');
  rotating = false;

  map.flyTo({ center: [10.5, 46.2], zoom: 5.2, pitch: 40, bearing: -8, duration: 3500, essential: true });

  setTimeout(() => {
    document.getElementById('stats').style.opacity = '1';
    document.getElementById('brand').style.opacity = '1';
    document.getElementById('bottom-bar').style.opacity = '1';
  }, 800);

  setTimeout(() => {
    map.setPaintProperty('arc-lines', 'line-opacity', 0.45);
    map.setPaintProperty('arc-glow', 'line-opacity', 0.1);
    map.setPaintProperty('point-ring', 'circle-opacity', 0.25);
    map.setPaintProperty('point-core', 'circle-opacity', 1);
    map.setPaintProperty('point-label', 'text-opacity', 1);
    if (map.getLayer('host-star')) map.setPaintProperty('host-star', 'icon-opacity', 1);
  }, 2000);

  setTimeout(() => { document.getElementById('stories').classList.add('visible'); }, 3500);
  setTimeout(() => { map.scrollZoom.enable(); }, 3500);
});

/* ═══════════════════════════════════════════
   COUNTRY VIEW COORDINATES
   ═══════════════════════════════════════════ */
const COUNTRY_VIEW = {
  NOR: { center: [15.0, 64.5],  zoom: 3.8 },
  USA: { center: [-98.5, 39.8], zoom: 3.2 },
  ITA: { center: [12.5, 42.5],  zoom: 5.0 },
  NED: { center: [5.3, 52.2],   zoom: 6.5 },
  GER: { center: [10.4, 51.2],  zoom: 5.0 },
  FRA: { center: [2.2, 46.6],   zoom: 5.0 },
  SWE: { center: [16.0, 62.5],  zoom: 4.0 },
  SUI: { center: [8.2, 46.8],   zoom: 7.0 },
  AUT: { center: [13.3, 47.5],  zoom: 6.0 },
  JPN: { center: [138.3, 36.5], zoom: 4.5 },
  CAN: { center: [-96.0, 56.0], zoom: 3.0 },
  CHN: { center: [104.0, 35.5], zoom: 3.5 },
  KOR: { center: [127.8, 36.0], zoom: 6.0 },
  AUS: { center: [134.0, -25.5],zoom: 3.5 },
  GBR: { center: [-3.4, 55.4],  zoom: 5.0 },
  CZE: { center: [15.5, 49.8],  zoom: 6.5 },
  SLO: { center: [14.8, 46.1],  zoom: 7.5 },
  ESP: { center: [-3.7, 40.4],  zoom: 5.0 },
  BRA: { center: [-51.9, -14.2],zoom: 3.5 },
  FIN: { center: [26.0, 64.0],  zoom: 4.2 },
  NZL: { center: [172.5, -41.3],zoom: 4.8 },
  POL: { center: [19.1, 51.9],  zoom: 5.5 },
  KAZ: { center: [67.0, 48.0],  zoom: 4.0 },
  GEO: { center: [43.4, 42.3],  zoom: 6.5 },
  EST: { center: [25.0, 58.6],  zoom: 6.5 },
  BEL: { center: [4.5, 50.5],   zoom: 7.0 },
  LAT: { center: [24.6, 57.0],  zoom: 6.5 },
  BUL: { center: [25.5, 42.7],  zoom: 6.5 },
  DEN: { center: [9.5, 56.3],   zoom: 5.8 },
};

/* ═══════════════════════════════════════════
   MEDAL STRIP
   ═══════════════════════════════════════════ */
function buildMedalStrip() {
  const strip = document.getElementById('medal-strip');
  countries.sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);
  countries.forEach(c => {
    const pill = document.createElement('div');
    pill.className = 'country-pill';
    pill.innerHTML = `
      <span class="flag">${c.flag}</span>
      <span>${c.name}</span>
      <span class="medals">
        <span class="g">${c.gold}🥇</span>
        <span class="s">${c.silver}🥈</span>
        <span class="b">${c.bronze}🥉</span>
      </span>`;
    pill.addEventListener('click', (ev) => {
      document.querySelectorAll('.country-pill').forEach(p => p.classList.remove('active'));
      ev.currentTarget.classList.add('active');
      closeCard();
      const view = COUNTRY_VIEW[c.code];
      if (view) {
        map.flyTo({ center: view.center, zoom: view.zoom, pitch: 30, duration: 2000 });
      } else if (c.athletes.length) {
        const a = c.athletes[0];
        map.flyTo({ center: [a.lng, a.lat], zoom: 5, pitch: 30, duration: 2000 });
      }
    });
    strip.appendChild(pill);
  });
}

/* ═══════════════════════════════════════════
   ATHLETE CARD
   ═══════════════════════════════════════════ */
function showAthleteCard(props) {
  const body = document.getElementById('card-body');
  body.innerHTML = '';

  const ht = props.hometown;
  let athletes = [];
  countries.forEach(c => {
    c.athletes.forEach(a => {
      if (a.hometown === ht) {
        athletes.push({ ...a, country: c.name, flag: c.flag, hometownCountry: a.hometownCountry || c.name });
      }
    });
  });

  if (!athletes.length) {
    athletes = [{
      name: props.name, event: props.event, medal: props.medal,
      hometown: props.hometown, country: props.country, flag: props.flag,
      slug: props.slug || '', hometownCountry: props.hometownCountry || props.country,
    }];
  }

  const grouped = new Map();
  athletes.forEach(a => {
    if (!grouped.has(a.name)) {
      grouped.set(a.name, { ...a, medals: [] });
    }
    const emoji = a.medal === 'gold' ? '🥇' : a.medal === 'silver' ? '🥈' : '🥉';
    const medalLabel = a.medal.charAt(0).toUpperCase() + a.medal.slice(1);
    grouped.get(a.name).medals.push({ emoji, medalLabel, event: a.event, slug: a.slug });
  });

  grouped.forEach(a => {
    const hometownCountry = a.hometownCountry || a.country;
    const linkHtml = '';

    const entry = document.createElement('div');
    entry.className = 'athlete-entry';

    if (a.medals.length === 1) {
      const m = a.medals[0];
      entry.innerHTML = `
        <div class="athlete-top">
          <span class="medal-icon" style="font-size:3rem">${m.emoji}</span>
          <div>
            <div class="athlete-name">${a.name}</div>
            <div class="athlete-event">${m.medalLabel} · ${m.event}</div>
          </div>
        </div>
        <div class="athlete-meta">
          <div class="meta-block">
            <div class="meta-label">Hometown</div>
            <div class="meta-value">${a.hometown}, ${hometownCountry}</div>
          </div>
          <div class="meta-block">
            <div class="meta-label">Representing</div>
            <div class="meta-value"><span class="meta-flag">${a.flag}</span> ${a.country}</div>
          </div>
        </div>
        ${linkHtml}`;
    } else {
      const medalIcons = a.medals.map(m => `<span class="medal-icon">${m.emoji}</span>`).join('');
      const medalItems = a.medals.map(m =>
        `<li><span class="medal-dot">${m.emoji}</span> ${m.medalLabel} · ${m.event}</li>`
      ).join('');

      entry.innerHTML = `
        <div class="athlete-header">
          <div class="athlete-medals-col">${medalIcons}</div>
          <div>
            <div class="athlete-name">${a.name}</div>
            <ul class="medal-list">${medalItems}</ul>
          </div>
        </div>
        <div class="athlete-meta">
          <div class="meta-block">
            <div class="meta-label">Hometown</div>
            <div class="meta-value">${a.hometown}, ${hometownCountry}</div>
          </div>
          <div class="meta-block">
            <div class="meta-label">Representing</div>
            <div class="meta-value"><span class="meta-flag">${a.flag}</span> ${a.country}</div>
          </div>
        </div>
        ${linkHtml}`;
    }

    body.appendChild(entry);
  });

  document.getElementById('athlete-card').classList.add('visible');
}

function closeCard() {
  document.getElementById('athlete-card').classList.remove('visible');
}

/* ── Map click to close card ── */
map.on('click', (e) => {
  const clickLayers = ['point-core'];
  if (map.getLayer('host-star')) clickLayers.push('host-star');
  const f = map.queryRenderedFeatures(e.point, { layers: clickLayers });
  if (f.length === 0) closeCard();
});

/* ── Keyboard nav ── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCard();
    map.flyTo({ center: [10, 48], zoom: 3.8, pitch: 35, bearing: -8, duration: 2000 });
  }
  if (e.key === 'ArrowRight') nextStory();
  if (e.key === 'ArrowLeft') prevStory();
});

/* ═══════════════════════════════════════════
   STORIES CAROUSEL
   ═══════════════════════════════════════════ */
let currentStory = 0;

function initStories() {
  const dots = document.getElementById('story-dots');
  STORIES.forEach((_, i) => {
    const d = document.createElement('span');
    d.addEventListener('click', () => goToStory(i));
    dots.appendChild(d);
  });
  renderStory();
}

function renderStory() {
  const s = STORIES[currentStory];
  document.getElementById('story-counter').textContent = `${currentStory + 1} / ${STORIES.length}`;
  document.getElementById('story-sport').textContent = s.sport;
  document.getElementById('story-headline').textContent = s.headline;
  document.getElementById('story-body').textContent = s.body;
  document.querySelectorAll('#story-dots span').forEach((d, i) => {
    d.classList.toggle('active', i === currentStory);
  });
}

function goToStory(i) {
  currentStory = i;
  renderStory();
  const s = STORIES[currentStory];
  map.flyTo({ center: s.center, zoom: s.zoom, pitch: 40, duration: 2500, essential: true });
}

function nextStory() { goToStory((currentStory + 1) % STORIES.length); }
function prevStory() { goToStory((currentStory - 1 + STORIES.length) % STORIES.length); }

initStories();

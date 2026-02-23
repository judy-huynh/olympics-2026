/* ── Constants ── */
const OC    = { blue:'#0081C8', yellow:'#FCB131', black:'#1a1a1a', green:'#00A651', red:'#EE334E' };
const MEDAL = { gold:'#DAA520', silver:'#808080', bronze:'#B8600A' };
const CORTINA = { lat:46.54, lng:12.14 };

/*
 * 2026 Milano Cortina Winter Olympics — Complete Medalist Dataset
 * 116 events across 16 sports
 *
 * DATA NOTES:
 * - Athletes marked hometown:'TBD' need manual lookup
 * - Coordinates marked lat:0, lng:0 are placeholders needing verification
 * - Team events list key representative athletes (not full rosters for hockey/curling)
 * - Some silver/bronze medalists in aerials, ski cross, PGS could not be confirmed from sources
 */

const countries = [

  /* ═══════════════════════════════════════════════
     1. NORWAY — 18 Gold, 12 Silver, 11 Bronze (41)
     ═══════════════════════════════════════════════ */
  {
    name:'Norway', code:'NOR', flag:'🇳🇴', ring:OC.blue,
    gold:18, silver:12, bronze:11,
    athletes:[
      // Cross-Country Skiing — Johannes Høsflot Klæbo (6 golds!)
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · Skiathlon', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'johannes-hosflot-klaebo-skiathlon' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · Sprint Classic', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'johannes-hosflot-klaebo-sprint' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · 10km Free', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'johannes-hosflot-klaebo-10km' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · Team Sprint Free', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'johannes-hosflot-klaebo-teamsprint' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · 4x7.5km Relay', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'johannes-hosflot-klaebo-relay' },
      { name:'Johannes Høsflot Klæbo', event:'Cross-Country · 50km Mass Start', medal:'gold', hometown:'Byåsen, Trondheim', lat:63.41, lng:10.35, slug:'johannes-hosflot-klaebo-50km' },
      // Cross-Country — other Norwegians
      { name:'Martin Løwstrøm Nyenget', event:'Cross-Country · Skiathlon', medal:'bronze', hometown:'Lillehammer', lat:61.12, lng:10.47, slug:'martin-nyenget-skiathlon' },
      { name:'Oskar Opstad Vike', event:'Cross-Country · Sprint Classic', medal:'bronze', hometown:'TBD', lat:60.0, lng:10.0, slug:'oskar-vike' },
      { name:'Einar Hedegart', event:'Cross-Country · 10km Free', medal:'bronze', hometown:'TBD', lat:63.0, lng:11.0, slug:'einar-hedegart' },
      { name:'Martin Løwstrøm Nyenget', event:'Cross-Country · 50km Mass Start', medal:'silver', hometown:'Lillehammer', lat:61.12, lng:10.47, slug:'martin-nyenget-50km' },
      { name:'Emil Iversen', event:'Cross-Country · 50km Mass Start', medal:'bronze', hometown:'Meråker', lat:63.42, lng:11.75, slug:'emil-iversen' },
      { name:'Heidi Weng', event:'Cross-Country · Women\'s Skiathlon', medal:'bronze', hometown:'Enebakk', lat:59.73, lng:11.15, slug:'heidi-weng-skiathlon' },
      { name:'Heidi Weng', event:'Cross-Country · Women\'s 50km', medal:'silver', hometown:'Enebakk', lat:59.73, lng:11.15, slug:'heidi-weng-50km' },
      { name:'Thea Louise Stjernesund', event:'Alpine Skiing · Women\'s Giant Slalom', medal:'silver', hometown:'Bærum', lat:59.89, lng:10.53, slug:'thea-stjernesund' },
      // Biathlon
      { name:'Johan-Olav Botn', event:'Biathlon · Men\'s 20km Individual', medal:'gold', hometown:'TBD', lat:62.0, lng:10.0, slug:'johan-olav-botn' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s 20km Individual', medal:'bronze', hometown:'Bærum', lat:59.89, lng:10.53, slug:'sturla-laegreid-individual' },
      { name:'Vetle Sjåstad Christiansen', event:'Biathlon · Men\'s Sprint', medal:'silver', hometown:'Geilo', lat:60.53, lng:8.21, slug:'vetle-christiansen' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s Sprint', medal:'bronze', hometown:'Bærum', lat:59.89, lng:10.53, slug:'sturla-laegreid-sprint' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s Pursuit', medal:'silver', hometown:'Bærum', lat:59.89, lng:10.53, slug:'sturla-laegreid-pursuit' },
      { name:'Johannes Dale-Skjevdal', event:'Biathlon · Men\'s Mass Start', medal:'gold', hometown:'Nesttun, Bergen', lat:60.33, lng:5.35, slug:'johannes-dale-skjevdal' },
      { name:'Sturla Holm Lægreid', event:'Biathlon · Men\'s Mass Start', medal:'silver', hometown:'Bærum', lat:59.89, lng:10.53, slug:'sturla-laegreid-mass' },
      { name:'Maren Kirkeeide', event:'Biathlon · Women\'s Sprint', medal:'gold', hometown:'TBD', lat:60.0, lng:10.0, slug:'maren-kirkeeide-sprint' },
      { name:'Maren Kirkeeide', event:'Biathlon · Women\'s Pursuit', medal:'silver', hometown:'TBD', lat:60.0, lng:10.0, slug:'maren-kirkeeide-pursuit' },
      // Nordic Combined
      { name:'Jens Lurås Oftebro', event:'Nordic Combined · NH/10km', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'jens-oftebro-nh' },
      { name:'Jens Lurås Oftebro', event:'Nordic Combined · LH/10km', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'jens-oftebro-lh' },
      { name:'Jens Lurås Oftebro', event:'Nordic Combined · Team Sprint', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'jens-oftebro-team' },
      { name:'Andreas Skoglund', event:'Nordic Combined · Team Sprint', medal:'gold', hometown:'TBD', lat:60.0, lng:11.0, slug:'andreas-skoglund' },
      // Ski Jumping
      { name:'Anna Odine Strøm', event:'Ski Jumping · Women\'s Normal Hill', medal:'gold', hometown:'Alta', lat:69.97, lng:23.27, slug:'anna-strom-nh' },
      { name:'Anna Odine Strøm', event:'Ski Jumping · Women\'s Large Hill', medal:'gold', hometown:'Alta', lat:69.97, lng:23.27, slug:'anna-strom-lh' },
      { name:'Eirin Maria Kvandal', event:'Ski Jumping · Women\'s Large Hill', medal:'silver', hometown:'Mosjøen', lat:65.84, lng:13.19, slug:'eirin-kvandal' },
      // Alpine Skiing
      { name:'Henrik Kristoffersen', event:'Alpine Skiing · Men\'s Slalom', medal:'bronze', hometown:'Lommedalen, Bærum', lat:59.92, lng:10.47, slug:'henrik-kristoffersen' },
      // Freestyle Skiing
      { name:'Birk Ruud', event:'Freestyle Skiing · Men\'s Slopestyle', medal:'gold', hometown:'Bærum', lat:59.89, lng:10.53, slug:'birk-ruud' },
      { name:'Tormod Frostad', event:'Freestyle Skiing · Men\'s Big Air', medal:'gold', hometown:'TBD', lat:60.0, lng:10.0, slug:'tormod-frostad' },
      // Speed Skating
      { name:'Sander Eitrem', event:'Speed Skating · Men\'s 5000m', medal:'gold', hometown:'TBD', lat:59.5, lng:10.5, slug:'sander-eitrem' },
      { name:'Ragne Wiklund', event:'Speed Skating · Women\'s 1500m', medal:'silver', hometown:'Stavanger', lat:58.97, lng:5.73, slug:'ragne-wiklund-1500' },
      { name:'Ragne Wiklund', event:'Speed Skating · Women\'s 3000m', medal:'silver', hometown:'Stavanger', lat:58.97, lng:5.73, slug:'ragne-wiklund-3000' },
      { name:'Ragne Wiklund', event:'Speed Skating · Women\'s 5000m', medal:'bronze', hometown:'Stavanger', lat:58.97, lng:5.73, slug:'ragne-wiklund-5000' },
    ]
  },

  /* ═══════════════════════════════════════════════
     2. UNITED STATES — 12 Gold, 12 Silver, 9 Bronze (33)
     ═══════════════════════════════════════════════ */
  {
    name:'United States', code:'USA', flag:'🇺🇸', ring:OC.blue,
    gold:12, silver:12, bronze:9,
    athletes:[
      // Alpine Skiing
      { name:'Mikaela Shiffrin', event:'Alpine Skiing · Women\'s Slalom', medal:'gold', hometown:'Edwards, Colorado', lat:39.64, lng:-106.59, slug:'mikaela-shiffrin' },
      { name:'Breezy Johnson', event:'Alpine Skiing · Women\'s Downhill', medal:'gold', hometown:'Jackson Hole, Wyoming', lat:43.48, lng:-110.76, slug:'breezy-johnson' },
      { name:'Ryan Cochran-Siegle', event:'Alpine Skiing · Men\'s Super-G', medal:'silver', hometown:'Starksboro, Vermont', lat:44.23, lng:-73.06, slug:'ryan-cochran-siegle' },
      { name:'Jacqueline Wiles', event:'Alpine Skiing · Women\'s Team Combined (DH)', medal:'bronze', hometown:'Aurora, Oregon', lat:45.23, lng:-122.76, slug:'jacqueline-wiles' },
      { name:'Paula Moltzan', event:'Alpine Skiing · Women\'s Team Combined (SL)', medal:'bronze', hometown:'Minneapolis, Minnesota', lat:44.98, lng:-93.27, slug:'paula-moltzan' },
      // Figure Skating
      { name:'Alysa Liu', event:'Figure Skating · Women\'s Singles', medal:'gold', hometown:'Oakland, California', lat:37.80, lng:-122.27, slug:'alysa-liu' },
      { name:'Ilia Malinin', event:'Figure Skating · Team Event', medal:'gold', hometown:'Fairfax, Virginia', lat:38.85, lng:-77.31, slug:'ilia-malinin' },
      { name:'Madison Chock', event:'Figure Skating · Ice Dance', medal:'silver', hometown:'Redondo Beach, California', lat:33.85, lng:-118.39, slug:'madison-chock' },
      { name:'Evan Bates', event:'Figure Skating · Ice Dance', medal:'silver', hometown:'Ann Arbor, Michigan', lat:42.28, lng:-83.74, slug:'evan-bates' },
      // Speed Skating
      { name:'Jordan Stolz', event:'Speed Skating · Men\'s 500m', medal:'gold', hometown:'Kewaskum, Wisconsin', lat:43.52, lng:-88.23, slug:'jordan-stolz-500' },
      { name:'Jordan Stolz', event:'Speed Skating · Men\'s 1000m', medal:'gold', hometown:'Kewaskum, Wisconsin', lat:43.52, lng:-88.23, slug:'jordan-stolz-1000' },
      { name:'Jordan Stolz', event:'Speed Skating · Men\'s 1500m', medal:'silver', hometown:'Kewaskum, Wisconsin', lat:43.52, lng:-88.23, slug:'jordan-stolz-1500' },
      { name:'Mia Manganello', event:'Speed Skating · Women\'s Mass Start', medal:'bronze', hometown:'Hershey, Pennsylvania', lat:40.29, lng:-76.65, slug:'mia-manganello' },
      // Bobsled
      { name:'Elana Meyers Taylor', event:'Bobsled · Women\'s Monobob', medal:'gold', hometown:'Douglasville, Georgia', lat:33.75, lng:-84.75, slug:'elana-meyers-taylor' },
      { name:'Kaillie Humphries', event:'Bobsled · Women\'s Monobob', medal:'bronze', hometown:'Calgary, Alberta', hometownCountry:'Canada', lat:51.05, lng:-114.07, slug:'kaillie-humphries-monobob' },
      { name:'Kaillie Humphries', event:'Bobsled · Women\'s 2-Woman', medal:'bronze', hometown:'Calgary, Alberta', hometownCountry:'Canada', lat:51.05, lng:-114.07, slug:'kaillie-humphries-2woman' },
      // Freestyle Skiing
      { name:'Elizabeth Lemley', event:'Freestyle Skiing · Women\'s Moguls', medal:'gold', hometown:'TBD', lat:39.0, lng:-105.0, slug:'elizabeth-lemley-moguls' },
      { name:'Jaelin Kauf', event:'Freestyle Skiing · Women\'s Moguls', medal:'silver', hometown:'Alta, Wyoming', lat:43.77, lng:-111.04, slug:'jaelin-kauf-moguls' },
      { name:'Alex Ferreira', event:'Freestyle Skiing · Men\'s Halfpipe', medal:'gold', hometown:'Aspen, Colorado', lat:39.19, lng:-106.82, slug:'alex-ferreira' },
      { name:'Alex Hall', event:'Freestyle Skiing · Men\'s Slopestyle', medal:'silver', hometown:'Park City, Utah', lat:40.65, lng:-111.50, slug:'alex-hall' },
      { name:'Mac Forehand', event:'Freestyle Skiing · Men\'s Big Air', medal:'silver', hometown:'Vail, Colorado', lat:39.64, lng:-106.37, slug:'mac-forehand' },
      { name:'Jaelin Kauf', event:'Freestyle Skiing · Women\'s Dual Moguls', medal:'silver', hometown:'Alta, Wyoming', lat:43.77, lng:-111.04, slug:'jaelin-kauf-dual' },
      { name:'Elizabeth Lemley', event:'Freestyle Skiing · Women\'s Dual Moguls', medal:'bronze', hometown:'TBD', lat:39.0, lng:-105.0, slug:'elizabeth-lemley-dual' },
      { name:'Kaila Kuhn', event:'Freestyle Skiing · Mixed Team Aerials', medal:'gold', hometown:'TBD', lat:40.0, lng:-111.0, slug:'kaila-kuhn' },
      { name:'Connor Curran', event:'Freestyle Skiing · Mixed Team Aerials', medal:'gold', hometown:'TBD', lat:40.0, lng:-111.0, slug:'connor-curran' },
      { name:'Christopher Lillis', event:'Freestyle Skiing · Mixed Team Aerials', medal:'gold', hometown:'Bethesda, Maryland', lat:38.98, lng:-77.10, slug:'christopher-lillis' },
      // Snowboard
      { name:'Chloe Kim', event:'Snowboard · Women\'s Halfpipe', medal:'silver', hometown:'Torrance, California', lat:33.84, lng:-118.34, slug:'chloe-kim' },
      { name:'Jake Canter', event:'Snowboard · Men\'s Slopestyle', medal:'bronze', hometown:'Evergreen, Colorado', lat:39.63, lng:-105.32, slug:'jake-canter' },
      // Cross-Country Skiing
      { name:'Ben Ogden', event:'Cross-Country · Men\'s Sprint', medal:'silver', hometown:'Landgrove, Vermont', lat:43.21, lng:-72.85, slug:'ben-ogden' },
      { name:'Jessie Diggins', event:'Cross-Country · Women\'s 10km', medal:'bronze', hometown:'Afton, Minnesota', lat:44.90, lng:-92.78, slug:'jessie-diggins' },
      // Short Track
      { name:'Corinne Stoddard', event:'Short Track · Women\'s 1500m', medal:'bronze', hometown:'Federal Way, Washington', lat:47.32, lng:-122.31, slug:'corinne-stoddard' },
      // Luge
      { name:'Ashley Farquharson', event:'Luge · Women\'s Singles', medal:'bronze', hometown:'Park City, Utah', lat:40.65, lng:-111.50, slug:'ashley-farquharson' },
      // Ice Hockey
      { name:'Jack Hughes (Captain)', event:'Ice Hockey · Men\'s', medal:'gold', hometown:'Orlando, Florida', lat:28.54, lng:-81.38, slug:'jack-hughes' },
      { name:'Hilary Knight (Captain)', event:'Ice Hockey · Women\'s', medal:'gold', hometown:'Sun Valley, Idaho', lat:43.70, lng:-114.35, slug:'hilary-knight' },
    ]
  },

  /* ═══════════════════════════════════════════════
     3. ITALY — 10 Gold, 6 Silver, 14 Bronze (30)
     ═══════════════════════════════════════════════ */
  {
    name:'Italy', code:'ITA', flag:'🇮🇹', ring:OC.green,
    gold:10, silver:6, bronze:14,
    athletes:[
      // Alpine Skiing
      { name:'Federica Brignone', event:'Alpine Skiing · Women\'s Super-G', medal:'gold', hometown:'La Salle, Aosta Valley', lat:45.75, lng:7.07, slug:'federica-brignone-sg' },
      { name:'Federica Brignone', event:'Alpine Skiing · Women\'s Giant Slalom', medal:'gold', hometown:'La Salle, Aosta Valley', lat:45.75, lng:7.07, slug:'federica-brignone-gs' },
      { name:'Sofia Goggia', event:'Alpine Skiing · Women\'s Downhill', medal:'bronze', hometown:'Bergamo', lat:45.70, lng:9.67, slug:'sofia-goggia' },
      { name:'Giovanni Franzoni', event:'Alpine Skiing · Men\'s Downhill', medal:'silver', hometown:'TBD', lat:45.5, lng:11.0, slug:'giovanni-franzoni' },
      { name:'Dominik Paris', event:'Alpine Skiing · Men\'s Downhill', medal:'bronze', hometown:'Merano, South Tyrol', lat:46.67, lng:11.16, slug:'dominik-paris' },
      // Speed Skating
      { name:'Francesca Lollobrigida', event:'Speed Skating · Women\'s 3000m', medal:'gold', hometown:'Frascati, Lazio', lat:41.81, lng:12.68, slug:'francesca-lollobrigida-3000' },
      { name:'Francesca Lollobrigida', event:'Speed Skating · Women\'s 5000m', medal:'gold', hometown:'Frascati, Lazio', lat:41.81, lng:12.68, slug:'francesca-lollobrigida-5000' },
      { name:'Riccardo Lorello', event:'Speed Skating · Men\'s 5000m', medal:'bronze', hometown:'TBD', lat:45.0, lng:11.0, slug:'riccardo-lorello' },
      { name:'Andrea Giovannini', event:'Speed Skating · Men\'s Mass Start', medal:'bronze', hometown:'Baselga di Piné', lat:46.13, lng:11.24, slug:'andrea-giovannini' },
      { name:'Davide Ghiotto', event:'Speed Skating · Men\'s Team Pursuit', medal:'gold', hometown:'Arzignano, Veneto', lat:45.52, lng:11.33, slug:'davide-ghiotto' },
      // Biathlon
      { name:'Lisa Vittozzi', event:'Biathlon · Women\'s Pursuit', medal:'gold', hometown:'Sappada', lat:46.57, lng:12.69, slug:'lisa-vittozzi' },
      // Short Track
      { name:'Arianna Fontana', event:'Short Track · Mixed Team Relay', medal:'gold', hometown:'Sondrio', lat:46.17, lng:9.87, slug:'arianna-fontana' },
      { name:'Pietro Sighel', event:'Short Track · Mixed Team Relay', medal:'gold', hometown:'Trento', lat:46.07, lng:11.12, slug:'pietro-sighel' },
      { name:'Arianna Fontana', event:'Short Track · Women\'s 500m', medal:'silver', hometown:'Sondrio', lat:46.17, lng:9.87, slug:'arianna-fontana-500' },
      // Luge
      { name:'Dominik Fischnaller', event:'Luge · Men\'s Singles', medal:'bronze', hometown:'Marling, South Tyrol', lat:46.66, lng:11.15, slug:'dominik-fischnaller' },
      { name:'Emanuel Rieder', event:'Luge · Men\'s Doubles', medal:'gold', hometown:'Naturno, South Tyrol', lat:46.65, lng:11.00, slug:'emanuel-rieder' },
      { name:'Simon Kainzwaldner', event:'Luge · Men\'s Doubles', medal:'gold', hometown:'TBD', lat:46.5, lng:11.0, slug:'simon-kainzwaldner' },
      { name:'Andrea Voetter', event:'Luge · Women\'s Doubles', medal:'gold', hometown:'Naturno, South Tyrol', lat:46.65, lng:11.00, slug:'andrea-voetter' },
      { name:'Marion Oberhofer', event:'Luge · Women\'s Doubles', medal:'gold', hometown:'TBD', lat:46.5, lng:11.5, slug:'marion-oberhofer' },
      // Freestyle Skiing
      { name:'Simone Deromedis', event:'Freestyle Skiing · Men\'s Ski Cross', medal:'gold', hometown:'Trento', lat:46.07, lng:11.12, slug:'simone-deromedis' },
      { name:'Federico Tomasoni', event:'Freestyle Skiing · Men\'s Ski Cross', medal:'silver', hometown:'TBD', lat:45.5, lng:10.5, slug:'federico-tomasoni' },
      { name:'Flora Tabanelli', event:'Freestyle Skiing · Women\'s Big Air', medal:'bronze', hometown:'Bologna', lat:44.49, lng:11.34, slug:'flora-tabanelli' },
      // Snowboard
      { name:'Michela Moioli', event:'Snowboard · Women\'s Snowboard Cross', medal:'bronze', hometown:'Alzano Lombardo, Bergamo', lat:45.73, lng:9.73, slug:'michela-moioli-sbx' },
      { name:'Michela Moioli', event:'Snowboard · Mixed Team SBX', medal:'silver', hometown:'Alzano Lombardo, Bergamo', lat:45.73, lng:9.73, slug:'michela-moioli-mixed' },
      { name:'Lorenzo Sommariva', event:'Snowboard · Mixed Team SBX', medal:'silver', hometown:'TBD', lat:45.5, lng:10.0, slug:'lorenzo-sommariva' },
      // Figure Skating
      { name:'Daniel Grassl', event:'Figure Skating · Team Event', medal:'bronze', hometown:'Merano, South Tyrol', lat:46.67, lng:11.16, slug:'daniel-grassl' },
    ]
  },

  /* ═══════════════════════════════════════════════
     4. NETHERLANDS — 10 Gold, 7 Silver, 3 Bronze (20)
     ═══════════════════════════════════════════════ */
  {
    name:'Netherlands', code:'NED', flag:'🇳🇱', ring:OC.yellow,
    gold:10, silver:7, bronze:3,
    athletes:[
      // Speed Skating
      { name:'Femke Kok', event:'Speed Skating · Women\'s 500m', medal:'gold', hometown:'Heerenveen', lat:52.96, lng:5.93, slug:'femke-kok-500' },
      { name:'Jutta Leerdam', event:'Speed Skating · Women\'s 500m', medal:'silver', hometown:'The Hague', lat:52.08, lng:4.31, slug:'jutta-leerdam-500' },
      { name:'Jutta Leerdam', event:'Speed Skating · Women\'s 1000m', medal:'gold', hometown:'The Hague', lat:52.08, lng:4.31, slug:'jutta-leerdam-1000' },
      { name:'Femke Kok', event:'Speed Skating · Women\'s 1000m', medal:'silver', hometown:'Heerenveen', lat:52.96, lng:5.93, slug:'femke-kok-1000' },
      { name:'Antoinette Rijpma-de Jong', event:'Speed Skating · Women\'s 1500m', medal:'gold', hometown:'Leeuwarden', lat:53.20, lng:5.80, slug:'antoinette-rijpma-de-jong' },
      { name:'Merel Conijn', event:'Speed Skating · Women\'s 5000m', medal:'silver', hometown:'TBD', lat:52.5, lng:5.5, slug:'merel-conijn' },
      { name:'Marijke Groenewoud', event:'Speed Skating · Women\'s Mass Start', medal:'gold', hometown:'TBD', lat:52.0, lng:5.0, slug:'marijke-groenewoud' },
      { name:'Jenning de Boo', event:'Speed Skating · Men\'s 500m', medal:'silver', hometown:'TBD', lat:52.5, lng:5.0, slug:'jenning-de-boo-500' },
      { name:'Jenning de Boo', event:'Speed Skating · Men\'s 1000m', medal:'silver', hometown:'TBD', lat:52.5, lng:5.0, slug:'jenning-de-boo-1000' },
      { name:'Kjeld Nuis', event:'Speed Skating · Men\'s 1500m', medal:'bronze', hometown:'Leiden', lat:52.16, lng:4.49, slug:'kjeld-nuis' },
      { name:'Jorrit Bergsma', event:'Speed Skating · Men\'s 10000m', medal:'bronze', hometown:'Aldeboarn', lat:53.05, lng:5.84, slug:'jorrit-bergsma-10k' },
      { name:'Jorrit Bergsma', event:'Speed Skating · Men\'s Mass Start', medal:'gold', hometown:'Aldeboarn', lat:53.05, lng:5.84, slug:'jorrit-bergsma-ms' },
      // Short Track
      { name:'Xandra Velzeboer', event:'Short Track · Women\'s 500m', medal:'gold', hometown:'The Hague', lat:52.08, lng:4.31, slug:'xandra-velzeboer-500' },
      { name:'Xandra Velzeboer', event:'Short Track · Women\'s 1000m', medal:'gold', hometown:'The Hague', lat:52.08, lng:4.31, slug:'xandra-velzeboer-1000' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 1000m', medal:'gold', hometown:'TBD', lat:52.0, lng:4.5, slug:'jens-vant-wout-1000' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 1500m', medal:'gold', hometown:'TBD', lat:52.0, lng:4.5, slug:'jens-vant-wout-1500' },
      { name:'Melle van \'t Wout', event:'Short Track · Men\'s 500m', medal:'silver', hometown:'TBD', lat:52.0, lng:4.5, slug:'melle-vant-wout' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 500m', medal:'bronze', hometown:'TBD', lat:52.0, lng:4.5, slug:'jens-vant-wout-500' },
      { name:'Jens van \'t Wout', event:'Short Track · Men\'s 5000m Relay', medal:'gold', hometown:'TBD', lat:52.0, lng:4.5, slug:'jens-vant-wout-relay' },
    ]
  },

  /* ═══════════════════════════════════════════════
     5. GERMANY — 8 Gold, 10 Silver, 8 Bronze (26)
     ═══════════════════════════════════════════════ */
  {
    name:'Germany', code:'GER', flag:'🇩🇪', ring:OC.black,
    gold:8, silver:10, bronze:8,
    athletes:[
      // Bobsled
      { name:'Johannes Lochner', event:'Bobsled · 2-Man', medal:'gold', hometown:'Berchtesgaden, Bavaria', lat:47.63, lng:13.00, slug:'johannes-lochner-2man' },
      { name:'Francesco Friedrich', event:'Bobsled · 2-Man', medal:'silver', hometown:'Pirna, Saxony', lat:50.96, lng:13.94, slug:'francesco-friedrich-2man' },
      { name:'Adam Ammour', event:'Bobsled · 2-Man', medal:'bronze', hometown:'TBD', lat:48.0, lng:11.0, slug:'adam-ammour' },
      { name:'Johannes Lochner', event:'Bobsled · 4-Man', medal:'gold', hometown:'Berchtesgaden, Bavaria', lat:47.63, lng:13.00, slug:'johannes-lochner-4man' },
      { name:'Francesco Friedrich', event:'Bobsled · 4-Man', medal:'silver', hometown:'Pirna, Saxony', lat:50.96, lng:13.94, slug:'francesco-friedrich-4man' },
      { name:'Laura Nolte', event:'Bobsled · Women\'s Monobob', medal:'silver', hometown:'Winterberg', lat:51.20, lng:8.53, slug:'laura-nolte-monobob' },
      { name:'Laura Nolte', event:'Bobsled · Women\'s 2-Woman', medal:'gold', hometown:'Winterberg', lat:51.20, lng:8.53, slug:'laura-nolte-2woman' },
      { name:'Lisa Buckwitz', event:'Bobsled · Women\'s 2-Woman', medal:'silver', hometown:'Potsdam', lat:52.40, lng:13.07, slug:'lisa-buckwitz' },
      // Luge
      { name:'Max Langenhan', event:'Luge · Men\'s Singles', medal:'gold', hometown:'Friedrichroda, Thuringia', lat:50.86, lng:10.56, slug:'max-langenhan' },
      { name:'Julia Taubitz', event:'Luge · Women\'s Singles', medal:'gold', hometown:'Oberwiesenthal, Saxony', lat:50.42, lng:12.97, slug:'julia-taubitz' },
      { name:'Tobias Wendl', event:'Luge · Men\'s Doubles', medal:'bronze', hometown:'Berchtesgaden, Bavaria', lat:47.63, lng:13.00, slug:'tobias-wendl' },
      { name:'Tobias Arlt', event:'Luge · Men\'s Doubles', medal:'bronze', hometown:'Berchtesgaden, Bavaria', lat:47.63, lng:13.00, slug:'tobias-arlt' },
      { name:'Dajana Eitberger', event:'Luge · Women\'s Doubles', medal:'silver', hometown:'Ilmenau, Thuringia', lat:50.69, lng:10.92, slug:'dajana-eitberger' },
      { name:'Germany Team', event:'Luge · Team Relay', medal:'gold', hometown:'Berlin', lat:52.52, lng:13.41, slug:'germany-luge-relay' },
      // Skeleton
      { name:'Axel Jungk', event:'Skeleton · Men\'s', medal:'silver', hometown:'Oberbärenburg, Saxony', lat:50.73, lng:13.73, slug:'axel-jungk' },
      { name:'Christopher Grotheer', event:'Skeleton · Men\'s', medal:'bronze', hometown:'Gera, Thuringia', lat:50.88, lng:12.08, slug:'christopher-grotheer' },
      { name:'Susanne Kreher', event:'Skeleton · Women\'s', medal:'silver', hometown:'TBD', lat:50.5, lng:12.5, slug:'susanne-kreher' },
      { name:'Jacqueline Pfeifer', event:'Skeleton · Women\'s', medal:'bronze', hometown:'TBD', lat:50.5, lng:12.5, slug:'jacqueline-pfeifer' },
      // Ski Jumping
      { name:'Philipp Raimund', event:'Ski Jumping · Men\'s Normal Hill', medal:'gold', hometown:'Oberstdorf, Bavaria', lat:47.41, lng:10.28, slug:'philipp-raimund' },
      // Alpine Skiing
      { name:'Emma Aicher', event:'Alpine Skiing · Women\'s Downhill', medal:'silver', hometown:'Maribor', hometownCountry:'Slovenia', lat:46.56, lng:15.65, slug:'emma-aicher-dh' },
      // Freestyle Skiing
      { name:'Daniela Maier', event:'Freestyle Skiing · Women\'s Ski Cross', medal:'gold', hometown:'Urach, Black Forest', lat:48.49, lng:9.40, slug:'daniela-maier' },
      // Cross-Country
      { name:'Laura Gimmler', event:'Cross-Country · Women\'s Team Sprint', medal:'bronze', hometown:'Oberstdorf, Bavaria', lat:47.41, lng:10.28, slug:'laura-gimmler' },
      { name:'Coletta Rydzek', event:'Cross-Country · Women\'s Team Sprint', medal:'bronze', hometown:'Oberstdorf, Bavaria', lat:47.41, lng:10.28, slug:'coletta-rydzek' },
    ]
  },

  /* ═══════════════════════════════════════════════
     6. FRANCE — 8 Gold, 9 Silver, 6 Bronze (23)
     ═══════════════════════════════════════════════ */
  {
    name:'France', code:'FRA', flag:'🇫🇷', ring:OC.blue,
    gold:8, silver:9, bronze:6,
    athletes:[
      // Biathlon
      { name:'Quentin Fillon Maillet', event:'Biathlon · Men\'s Sprint', medal:'gold', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'quentin-fillon-maillet-sprint' },
      { name:'Quentin Fillon Maillet', event:'Biathlon · Men\'s Mass Start', medal:'bronze', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'quentin-fillon-maillet-ms' },
      { name:'Quentin Fillon Maillet', event:'Biathlon · Mixed Relay', medal:'gold', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'quentin-fillon-maillet-mixed' },
      { name:'Quentin Fillon Maillet', event:'Biathlon · Men\'s Relay', medal:'gold', hometown:'Champagnole, Jura', lat:46.75, lng:5.91, slug:'quentin-fillon-maillet-relay' },
      { name:'Éric Perrot', event:'Biathlon · Men\'s 20km Individual', medal:'silver', hometown:'TBD', lat:45.5, lng:6.0, slug:'eric-perrot' },
      { name:'Emilien Jacquelin', event:'Biathlon · Men\'s Pursuit', medal:'bronze', hometown:'Grenoble', lat:45.19, lng:5.72, slug:'emilien-jacquelin' },
      { name:'Julia Simon', event:'Biathlon · Women\'s 15km Individual', medal:'gold', hometown:'Albertville, Savoie', lat:45.68, lng:6.39, slug:'julia-simon-individual' },
      { name:'Lou Jeanmonnot', event:'Biathlon · Women\'s 15km Individual', medal:'silver', hometown:'Pontarlier', lat:46.91, lng:6.35, slug:'lou-jeanmonnot-individual' },
      { name:'Océane Michelon', event:'Biathlon · Women\'s Sprint', medal:'silver', hometown:'TBD', lat:46.0, lng:6.0, slug:'oceane-michelon-sprint' },
      { name:'Lou Jeanmonnot', event:'Biathlon · Women\'s Sprint', medal:'bronze', hometown:'Pontarlier', lat:46.91, lng:6.35, slug:'lou-jeanmonnot-sprint' },
      { name:'Océane Michelon', event:'Biathlon · Women\'s Mass Start', medal:'gold', hometown:'TBD', lat:46.0, lng:6.0, slug:'oceane-michelon-ms' },
      { name:'Julia Simon', event:'Biathlon · Women\'s Mass Start', medal:'silver', hometown:'Albertville, Savoie', lat:45.68, lng:6.39, slug:'julia-simon-ms' },
      { name:'Julia Simon', event:'Biathlon · Women\'s Relay', medal:'gold', hometown:'Albertville, Savoie', lat:45.68, lng:6.39, slug:'julia-simon-relay' },
      // Cross-Country
      { name:'Mathis Desloges', event:'Cross-Country · Men\'s Skiathlon', medal:'silver', hometown:'TBD', lat:45.5, lng:6.5, slug:'mathis-desloges-skiathlon' },
      { name:'Mathis Desloges', event:'Cross-Country · Men\'s 10km Free', medal:'silver', hometown:'TBD', lat:45.5, lng:6.5, slug:'mathis-desloges-10km' },
      // Alpine Skiing
      { name:'Romane Miradoli', event:'Alpine Skiing · Women\'s Super-G', medal:'silver', hometown:'La Côte-Saint-André, Isère', lat:45.39, lng:5.26, slug:'romane-miradoli' },
      // Figure Skating
      { name:'Laurence Fournier Beaudry', event:'Figure Skating · Ice Dance', medal:'gold', hometown:'Montréal, Québec', hometownCountry:'Canada', lat:45.50, lng:-73.57, slug:'laurence-fournier-beaudry' },
      { name:'Guillaume Cizeron', event:'Figure Skating · Ice Dance', medal:'gold', hometown:'Montbrison, Loire', lat:45.61, lng:4.07, slug:'guillaume-cizeron' },
      // Freestyle Skiing
      { name:'Perrine Laffont', event:'Freestyle Skiing · Women\'s Moguls', medal:'bronze', hometown:'Cauterets, Hautes-Pyrénées', lat:42.89, lng:-0.11, slug:'perrine-laffont' },
      // Snowboard
      { name:'Lea Casta', event:'Snowboard · Mixed Team SBX', medal:'bronze', hometown:'TBD', lat:45.0, lng:6.0, slug:'lea-casta' },
      { name:'Loan Bozzolo', event:'Snowboard · Mixed Team SBX', medal:'bronze', hometown:'TBD', lat:45.0, lng:6.0, slug:'loan-bozzolo' },
      // Ski Mountaineering
      { name:'Emily Harrop', event:'Ski Mountaineering · Women\'s Sprint', medal:'silver', hometown:'TBD', lat:45.0, lng:6.0, slug:'emily-harrop-sprint' },
      { name:'Thibault Anselmet', event:'Ski Mountaineering · Men\'s Sprint', medal:'bronze', hometown:'TBD', lat:45.0, lng:6.0, slug:'thibault-anselmet-sprint' },
      { name:'Emily Harrop', event:'Ski Mountaineering · Mixed Relay', medal:'gold', hometown:'TBD', lat:45.0, lng:6.0, slug:'emily-harrop-relay' },
      { name:'Thibault Anselmet', event:'Ski Mountaineering · Mixed Relay', medal:'gold', hometown:'TBD', lat:45.0, lng:6.0, slug:'thibault-anselmet-relay' },
    ]
  },

  /* ═══════════════════════════════════════════════
     7. SWEDEN — 8 Gold, 6 Silver, 4 Bronze (18)
     ═══════════════════════════════════════════════ */
  {
    name:'Sweden', code:'SWE', flag:'🇸🇪', ring:OC.yellow,
    gold:8, silver:6, bronze:4,
    athletes:[
      // Cross-Country
      { name:'Frida Karlsson', event:'Cross-Country · Women\'s Skiathlon', medal:'gold', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'frida-karlsson' },
      { name:'Ebba Andersson', event:'Cross-Country · Women\'s Skiathlon', medal:'silver', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'ebba-andersson-skiathlon' },
      { name:'Linn Svahn', event:'Cross-Country · Women\'s Sprint', medal:'gold', hometown:'Östersund', lat:63.18, lng:14.64, slug:'linn-svahn' },
      { name:'Jonna Sundling', event:'Cross-Country · Women\'s Sprint', medal:'silver', hometown:'Piteå', lat:65.32, lng:21.49, slug:'jonna-sundling-sprint' },
      { name:'Maja Dahlqvist', event:'Cross-Country · Women\'s Sprint', medal:'bronze', hometown:'Falun', lat:60.60, lng:15.63, slug:'maja-dahlqvist-sprint' },
      { name:'Jonna Sundling', event:'Cross-Country · Women\'s Team Sprint', medal:'gold', hometown:'Piteå', lat:65.32, lng:21.49, slug:'jonna-sundling-teamsprint' },
      { name:'Maja Dahlqvist', event:'Cross-Country · Women\'s Team Sprint', medal:'gold', hometown:'Falun', lat:60.60, lng:15.63, slug:'maja-dahlqvist-teamsprint' },
      { name:'Ebba Andersson', event:'Cross-Country · Women\'s 50km Mass Start', medal:'gold', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'ebba-andersson-50km' },
      // Alpine Skiing
      { name:'Sara Hector', event:'Alpine Skiing · Women\'s Giant Slalom', medal:'silver', hometown:'Kungsbacka', lat:57.49, lng:12.07, slug:'sara-hector' },
      { name:'Anna Swenn Larsson', event:'Alpine Skiing · Women\'s Slalom', medal:'bronze', hometown:'TBD', lat:59.0, lng:15.0, slug:'anna-swenn-larsson' },
      // Biathlon
      { name:'Martin Ponsiluoma', event:'Biathlon · Men\'s Pursuit', medal:'gold', hometown:'Sollefteå', lat:63.17, lng:17.27, slug:'martin-ponsiluoma' },
      // Freestyle Skiing
      { name:'Sandra Näslund', event:'Freestyle Skiing · Women\'s Ski Cross', medal:'bronze', hometown:'Kramfors', lat:62.93, lng:17.77, slug:'sandra-naslund' },
      // Curling
      { name:'Anna Hasselborg (Skip)', event:'Curling · Women\'s', medal:'gold', hometown:'Sundsvall', lat:62.39, lng:17.31, slug:'anna-hasselborg' },
    ]
  },

  /* ═══════════════════════════════════════════════
     8. SWITZERLAND — 6 Gold, 9 Silver, 8 Bronze (23)
     ═══════════════════════════════════════════════ */
  {
    name:'Switzerland', code:'SUI', flag:'🇨🇭', ring:OC.red,
    gold:6, silver:9, bronze:8,
    athletes:[
      // Alpine Skiing
      { name:'Franjo von Allmen', event:'Alpine Skiing · Men\'s Downhill', medal:'gold', hometown:'Adelboden', lat:46.49, lng:7.56, slug:'franjo-von-allmen-dh' },
      { name:'Franjo von Allmen', event:'Alpine Skiing · Men\'s Super-G', medal:'gold', hometown:'Adelboden', lat:46.49, lng:7.56, slug:'franjo-von-allmen-sg' },
      { name:'Franjo von Allmen', event:'Alpine Skiing · Men\'s Team Combined', medal:'gold', hometown:'Adelboden', lat:46.49, lng:7.56, slug:'franjo-von-allmen-tc' },
      { name:'Tanguy Nef', event:'Alpine Skiing · Men\'s Team Combined', medal:'gold', hometown:'Geneva', lat:46.20, lng:6.14, slug:'tanguy-nef' },
      { name:'Marco Odermatt', event:'Alpine Skiing · Men\'s Team Combined', medal:'silver', hometown:'Buochs', lat:46.97, lng:8.42, slug:'marco-odermatt-tc' },
      { name:'Loïc Meillard', event:'Alpine Skiing · Men\'s Team Combined', medal:'silver', hometown:'Neuchâtel', lat:46.99, lng:6.93, slug:'loic-meillard-tc' },
      { name:'Marco Odermatt', event:'Alpine Skiing · Men\'s Super-G', medal:'bronze', hometown:'Buochs', lat:46.97, lng:8.42, slug:'marco-odermatt-sg' },
      { name:'Marco Odermatt', event:'Alpine Skiing · Men\'s Giant Slalom', medal:'silver', hometown:'Buochs', lat:46.97, lng:8.42, slug:'marco-odermatt-gs' },
      { name:'Loïc Meillard', event:'Alpine Skiing · Men\'s Giant Slalom', medal:'bronze', hometown:'Neuchâtel', lat:46.99, lng:6.93, slug:'loic-meillard-gs' },
      { name:'Loïc Meillard', event:'Alpine Skiing · Men\'s Slalom', medal:'gold', hometown:'Neuchâtel', lat:46.99, lng:6.93, slug:'loic-meillard-sl' },
      { name:'Camille Rast', event:'Alpine Skiing · Women\'s Slalom', medal:'silver', hometown:'Vétroz, Valais', lat:46.22, lng:7.28, slug:'camille-rast' },
      // Cross-Country
      { name:'Nadja Kaelin', event:'Cross-Country · Women\'s Team Sprint', medal:'silver', hometown:'TBD', lat:46.5, lng:7.5, slug:'nadja-kaelin-teamsprint' },
      { name:'Nadine Faehndrich', event:'Cross-Country · Women\'s Team Sprint', medal:'silver', hometown:'Eigenthal, Lucerne', lat:47.03, lng:8.18, slug:'nadine-faehndrich' },
      { name:'Nadja Kaelin', event:'Cross-Country · Women\'s 50km', medal:'bronze', hometown:'TBD', lat:46.5, lng:7.5, slug:'nadja-kaelin-50km' },
      // Freestyle Skiing
      { name:'Mathilde Gremaud', event:'Freestyle Skiing · Women\'s Slopestyle', medal:'gold', hometown:'La Roche, Fribourg', lat:46.69, lng:7.12, slug:'mathilde-gremaud' },
      { name:'Fanny Smith', event:'Freestyle Skiing · Women\'s Ski Cross', medal:'silver', hometown:'Villars-sur-Ollon', lat:46.30, lng:7.06, slug:'fanny-smith' },
      // Bobsled
      { name:'Michael Vogt', event:'Bobsled · 4-Man', medal:'bronze', hometown:'TBD', lat:47.0, lng:8.0, slug:'michael-vogt' },
      // Ski Mountaineering
      { name:'Marianne Fatton', event:'Ski Mountaineering · Women\'s Sprint', medal:'gold', hometown:'TBD', lat:46.5, lng:7.0, slug:'marianne-fatton-sprint' },
      { name:'Marianne Fatton', event:'Ski Mountaineering · Mixed Relay', medal:'silver', hometown:'TBD', lat:46.5, lng:7.0, slug:'marianne-fatton-relay' },
      // Curling
      { name:'Silvana Tirinzoni (Skip)', event:'Curling · Women\'s', medal:'silver', hometown:'Zurich', lat:47.38, lng:8.54, slug:'silvana-tirinzoni' },
      { name:'Switzerland Team', event:'Curling · Men\'s', medal:'bronze', hometown:'Bern', lat:46.95, lng:7.45, slug:'switzerland-curling-men' },
    ]
  },

  /* ═══════════════════════════════════════════════
     9. AUSTRIA — 5 Gold, 8 Silver, 5 Bronze (18)
     ═══════════════════════════════════════════════ */
  {
    name:'Austria', code:'AUT', flag:'🇦🇹', ring:OC.red,
    gold:5, silver:8, bronze:5,
    athletes:[
      // Alpine Skiing
      { name:'Ariane Rädler', event:'Alpine Skiing · Women\'s Team Combined (DH)', medal:'gold', hometown:'Dornbirn, Vorarlberg', lat:47.41, lng:9.74, slug:'ariane-radler' },
      { name:'Katharina Huber', event:'Alpine Skiing · Women\'s Team Combined (SL)', medal:'gold', hometown:'TBD', lat:47.3, lng:11.4, slug:'katharina-huber' },
      { name:'Vincent Kriechmayr', event:'Alpine Skiing · Men\'s Team Combined (DH)', medal:'silver', hometown:'Gramastetten, Upper Austria', lat:48.38, lng:14.19, slug:'vincent-kriechmayr' },
      { name:'Manuel Feller', event:'Alpine Skiing · Men\'s Team Combined (SL)', medal:'silver', hometown:'Fieberbrunn, Tyrol', lat:47.48, lng:12.55, slug:'manuel-feller' },
      { name:'Fabio Gstrein', event:'Alpine Skiing · Men\'s Slalom', medal:'silver', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'fabio-gstrein' },
      { name:'Cornelia Hütter', event:'Alpine Skiing · Women\'s Super-G', medal:'bronze', hometown:'Admont, Styria', lat:47.57, lng:14.46, slug:'cornelia-hutter' },
      // Luge
      { name:'Jonas Müller', event:'Luge · Men\'s Singles', medal:'silver', hometown:'TBD', lat:47.0, lng:11.5, slug:'jonas-muller' },
      { name:'Thomas Steu', event:'Luge · Men\'s Doubles', medal:'silver', hometown:'TBD', lat:47.0, lng:10.5, slug:'thomas-steu' },
      { name:'Wolfgang Kindl', event:'Luge · Men\'s Doubles', medal:'silver', hometown:'Innsbruck, Tyrol', lat:47.26, lng:11.39, slug:'wolfgang-kindl' },
      { name:'Selina Egle', event:'Luge · Women\'s Doubles', medal:'bronze', hometown:'TBD', lat:47.0, lng:11.5, slug:'selina-egle' },
      { name:'Austria Team', event:'Luge · Team Relay', medal:'silver', hometown:'Innsbruck', lat:47.26, lng:11.39, slug:'austria-luge-relay' },
      // Ski Jumping
      { name:'Jan Hörl', event:'Ski Jumping · Men\'s Super Team LH', medal:'gold', hometown:'Bischofshofen, Salzburg', lat:47.42, lng:13.22, slug:'jan-horl' },
      { name:'Stephan Embacher', event:'Ski Jumping · Men\'s Super Team LH', medal:'gold', hometown:'TBD', lat:47.3, lng:13.0, slug:'stephan-embacher' },
      // Snowboard
      { name:'Alessandro Hämmerle', event:'Snowboard · Men\'s Snowboard Cross', medal:'gold', hometown:'Lustenau, Vorarlberg', lat:47.43, lng:9.66, slug:'alessandro-hammerle' },
      { name:'Jakob Dusek', event:'Snowboard · Men\'s Snowboard Cross', medal:'bronze', hometown:'TBD', lat:47.5, lng:13.0, slug:'jakob-dusek' },
      { name:'Benjamin Karl', event:'Snowboard · Men\'s PGS', medal:'gold', hometown:'TBD', lat:47.0, lng:14.0, slug:'benjamin-karl' },
      { name:'Sabine Payer', event:'Snowboard · Women\'s PGS', medal:'silver', hometown:'TBD', lat:47.0, lng:12.0, slug:'sabine-payer' },
      // Skeleton
      { name:'Janine Flock', event:'Skeleton · Women\'s', medal:'gold', hometown:'Hall in Tirol', lat:47.29, lng:11.51, slug:'janine-flock' },
      // Nordic Combined
      { name:'Johannes Lamparter', event:'Nordic Combined · NH/10km', medal:'silver', hometown:'Rum, Tyrol', lat:47.28, lng:11.45, slug:'johannes-lamparter-nh' },
      { name:'Johannes Lamparter', event:'Nordic Combined · LH/10km', medal:'silver', hometown:'Rum, Tyrol', lat:47.28, lng:11.45, slug:'johannes-lamparter-lh' },
      { name:'Stefan Rettenegger', event:'Nordic Combined · Team Sprint', medal:'bronze', hometown:'TBD', lat:47.0, lng:13.0, slug:'stefan-rettenegger' },
      // Freestyle Skiing
      { name:'Matěj Švancer', event:'Freestyle Skiing · Men\'s Big Air', medal:'bronze', hometown:'Prague', hometownCountry:'Czechia', lat:50.08, lng:14.44, slug:'matej-svancer' },
    ]
  },

  /* ═══════════════════════════════════════════════
     10. JAPAN — 5 Gold, 7 Silver, 12 Bronze (24)
     ═══════════════════════════════════════════════ */
  {
    name:'Japan', code:'JPN', flag:'🇯🇵', ring:OC.red,
    gold:5, silver:7, bronze:12,
    athletes:[
      // Figure Skating
      { name:'Yuma Kagiyama', event:'Figure Skating · Men\'s Singles', medal:'silver', hometown:'Yokohama', lat:35.44, lng:139.64, slug:'yuma-kagiyama' },
      { name:'Shun Sato', event:'Figure Skating · Men\'s Singles', medal:'bronze', hometown:'Sendai', lat:38.27, lng:140.87, slug:'shun-sato' },
      { name:'Kaori Sakamoto', event:'Figure Skating · Women\'s Singles', medal:'silver', hometown:'Kobe', lat:34.69, lng:135.20, slug:'kaori-sakamoto' },
      { name:'Ami Nakai', event:'Figure Skating · Women\'s Singles', medal:'bronze', hometown:'TBD', lat:35.0, lng:137.0, slug:'ami-nakai' },
      { name:'Riku Miura', event:'Figure Skating · Pairs', medal:'gold', hometown:'Chiba', lat:35.61, lng:140.12, slug:'riku-miura' },
      { name:'Ryuichi Kihara', event:'Figure Skating · Pairs', medal:'gold', hometown:'Nagoya', lat:35.18, lng:136.91, slug:'ryuichi-kihara' },
      { name:'Japan Team', event:'Figure Skating · Team Event', medal:'silver', hometown:'Tokyo', lat:35.68, lng:139.69, slug:'japan-figure-team' },
      // Snowboard
      { name:'Kira Kimura', event:'Snowboard · Men\'s Big Air', medal:'gold', hometown:'TBD', lat:36.0, lng:140.0, slug:'kira-kimura' },
      { name:'Ryoma Kimata', event:'Snowboard · Men\'s Big Air', medal:'silver', hometown:'TBD', lat:36.0, lng:140.0, slug:'ryoma-kimata' },
      { name:'Kokomo Murase', event:'Snowboard · Women\'s Big Air', medal:'gold', hometown:'Gifu', lat:35.39, lng:136.72, slug:'kokomo-murase-ba' },
      { name:'Yuto Totsuka', event:'Snowboard · Men\'s Halfpipe', medal:'gold', hometown:'Yokohama', lat:35.44, lng:139.64, slug:'yuto-totsuka' },
      { name:'Ryusei Yamada', event:'Snowboard · Men\'s Halfpipe', medal:'bronze', hometown:'TBD', lat:36.0, lng:139.0, slug:'ryusei-yamada' },
      { name:'Mitsuki Ono', event:'Snowboard · Women\'s Halfpipe', medal:'bronze', hometown:'TBD', lat:36.0, lng:139.0, slug:'mitsuki-ono' },
      { name:'Mari Fukada', event:'Snowboard · Women\'s Slopestyle', medal:'gold', hometown:'TBD', lat:35.5, lng:139.0, slug:'mari-fukada' },
      { name:'Kokomo Murase', event:'Snowboard · Women\'s Slopestyle', medal:'bronze', hometown:'Gifu', lat:35.39, lng:136.72, slug:'kokomo-murase-ss' },
      { name:'Taiga Hasegawa', event:'Snowboard · Men\'s Slopestyle', medal:'silver', hometown:'TBD', lat:36.0, lng:139.0, slug:'taiga-hasegawa' },
      // Speed Skating
      { name:'Miho Takagi', event:'Speed Skating · Women\'s 500m', medal:'bronze', hometown:'Memanbetsu, Hokkaido', lat:43.91, lng:144.17, slug:'miho-takagi-500' },
      { name:'Miho Takagi', event:'Speed Skating · Women\'s 1000m', medal:'bronze', hometown:'Memanbetsu, Hokkaido', lat:43.91, lng:144.17, slug:'miho-takagi-1000' },
      // Ski Jumping
      { name:'Nozomi Maruyama', event:'Ski Jumping · Women\'s Normal Hill', medal:'bronze', hometown:'TBD', lat:38.0, lng:140.0, slug:'nozomi-maruyama' },
      { name:'Ren Nikaido', event:'Ski Jumping · Men\'s Normal Hill', medal:'bronze', hometown:'TBD', lat:38.0, lng:140.0, slug:'ren-nikaido-nh' },
      { name:'Ren Nikaido', event:'Ski Jumping · Men\'s Large Hill', medal:'silver', hometown:'TBD', lat:38.0, lng:140.0, slug:'ren-nikaido-lh' },
      // Freestyle Skiing
      { name:'Ikuma Horishima', event:'Freestyle Skiing · Men\'s Moguls', medal:'bronze', hometown:'Ikeda, Gifu', lat:35.44, lng:136.57, slug:'ikuma-horishima-moguls' },
      { name:'Ikuma Horishima', event:'Freestyle Skiing · Men\'s Dual Moguls', medal:'silver', hometown:'Ikeda, Gifu', lat:35.44, lng:136.57, slug:'ikuma-horishima-dual' },
    ]
  },

  /* ═══════════════════════════════════════════════
     11. CANADA — 5 Gold, 7 Silver, 9 Bronze (21)
     ═══════════════════════════════════════════════ */
  {
    name:'Canada', code:'CAN', flag:'🇨🇦', ring:OC.red,
    gold:5, silver:7, bronze:9,
    athletes:[
      // Short Track
      { name:'Steven Dubois', event:'Short Track · Men\'s 500m', medal:'gold', hometown:'Lachenaie, Québec', lat:45.65, lng:-73.54, slug:'steven-dubois' },
      { name:'Courtney Sarault', event:'Short Track · Women\'s 500m', medal:'bronze', hometown:'Moncton, New Brunswick', lat:46.09, lng:-64.77, slug:'courtney-sarault-500' },
      { name:'Courtney Sarault', event:'Short Track · Women\'s 1000m', medal:'silver', hometown:'Moncton, New Brunswick', lat:46.09, lng:-64.77, slug:'courtney-sarault-1000' },
      // Freestyle Skiing
      { name:'Mikaël Kingsbury', event:'Freestyle Skiing · Men\'s Moguls', medal:'silver', hometown:'Deux-Montagnes, Québec', lat:45.54, lng:-73.89, slug:'mikael-kingsbury-moguls' },
      { name:'Mikaël Kingsbury', event:'Freestyle Skiing · Men\'s Dual Moguls', medal:'gold', hometown:'Deux-Montagnes, Québec', lat:45.54, lng:-73.89, slug:'mikael-kingsbury-dual' },
      { name:'Megan Oldham', event:'Freestyle Skiing · Women\'s Slopestyle', medal:'bronze', hometown:'Parry Sound, Ontario', lat:45.34, lng:-80.04, slug:'megan-oldham-ss' },
      { name:'Megan Oldham', event:'Freestyle Skiing · Women\'s Big Air', medal:'gold', hometown:'Parry Sound, Ontario', lat:45.34, lng:-80.04, slug:'megan-oldham-ba' },
      { name:'Brendan Mackay', event:'Freestyle Skiing · Men\'s Halfpipe', medal:'bronze', hometown:'Calgary, Alberta', lat:51.05, lng:-114.07, slug:'brendan-mackay' },
      // Snowboard
      { name:'Éliot Grondin', event:'Snowboard · Men\'s Snowboard Cross', medal:'silver', hometown:'Sainte-Marie, Québec', lat:46.44, lng:-71.03, slug:'eliot-grondin' },
      // Speed Skating
      { name:'Laurent Dubreuil', event:'Speed Skating · Men\'s 500m', medal:'bronze', hometown:'Lévis, Québec', lat:46.80, lng:-71.18, slug:'laurent-dubreuil' },
      { name:'Valérie Maltais', event:'Speed Skating · Women\'s 1500m', medal:'bronze', hometown:'La Baie, Québec', lat:48.34, lng:-70.87, slug:'valerie-maltais-1500' },
      { name:'Valérie Maltais', event:'Speed Skating · Women\'s 3000m', medal:'bronze', hometown:'La Baie, Québec', lat:48.34, lng:-70.87, slug:'valerie-maltais-3000' },
      { name:'Ivanie Blondin', event:'Speed Skating · Women\'s Mass Start', medal:'silver', hometown:'Ottawa, Ontario', lat:45.42, lng:-75.70, slug:'ivanie-blondin' },
      { name:'Canada Team', event:'Speed Skating · Women\'s Team Pursuit', medal:'gold', hometown:'Calgary, Alberta', lat:51.05, lng:-114.07, slug:'canada-women-tp' },
      // Figure Skating
      { name:'Piper Gilles', event:'Figure Skating · Ice Dance', medal:'bronze', hometown:'Toronto, Ontario', lat:43.65, lng:-79.38, slug:'piper-gilles' },
      { name:'Paul Poirier', event:'Figure Skating · Ice Dance', medal:'bronze', hometown:'Unionville, Ontario', lat:43.87, lng:-79.32, slug:'paul-poirier' },
      // Curling
      { name:'Brad Jacobs (Skip)', event:'Curling · Men\'s', medal:'gold', hometown:'Sault Ste. Marie, Ontario', lat:46.52, lng:-84.35, slug:'brad-jacobs' },
      { name:'Canada Team', event:'Curling · Women\'s', medal:'bronze', hometown:'Ottawa, Ontario', lat:45.42, lng:-75.70, slug:'canada-curling-women' },
      // Ice Hockey
      { name:'Canada Team', event:'Ice Hockey · Men\'s', medal:'silver', hometown:'Toronto, Ontario', lat:43.65, lng:-79.38, slug:'canada-hockey-men' },
      { name:'Canada Team', event:'Ice Hockey · Women\'s', medal:'silver', hometown:'Toronto, Ontario', lat:43.65, lng:-79.38, slug:'canada-hockey-women' },
    ]
  },

  /* ═══════════════════════════════════════════════
     12. CHINA — 5 Gold, 4 Silver, 6 Bronze (15)
     ═══════════════════════════════════════════════ */
  {
    name:'China', code:'CHN', flag:'🇨🇳', ring:OC.red,
    gold:5, silver:4, bronze:6,
    athletes:[
      // Freestyle Skiing
      { name:'Eileen Gu', event:'Freestyle Skiing · Women\'s Halfpipe', medal:'gold', hometown:'San Francisco, California', hometownCountry:'United States', lat:37.77, lng:-122.42, slug:'eileen-gu-hp' },
      { name:'Eileen Gu', event:'Freestyle Skiing · Women\'s Slopestyle', medal:'silver', hometown:'San Francisco, California', hometownCountry:'United States', lat:37.77, lng:-122.42, slug:'eileen-gu-ss' },
      { name:'Eileen Gu', event:'Freestyle Skiing · Women\'s Big Air', medal:'silver', hometown:'San Francisco, California', hometownCountry:'United States', lat:37.77, lng:-122.42, slug:'eileen-gu-ba' },
      { name:'Li Fanghui', event:'Freestyle Skiing · Women\'s Halfpipe', medal:'silver', hometown:'TBD', lat:40.0, lng:116.0, slug:'li-fanghui' },
      { name:'Xu Mengtao', event:'Freestyle Skiing · Women\'s Aerials', medal:'gold', hometown:'Shenyang, Liaoning', lat:41.81, lng:123.43, slug:'xu-mengtao' },
      { name:'Wang Xindi', event:'Freestyle Skiing · Men\'s Aerials', medal:'gold', hometown:'TBD', lat:40.0, lng:116.0, slug:'wang-xindi' },
      { name:'Li Tianma', event:'Freestyle Skiing · Men\'s Aerials', medal:'bronze', hometown:'TBD', lat:40.0, lng:116.0, slug:'li-tianma' },
      // Snowboard
      { name:'Su Yiming', event:'Snowboard · Men\'s Big Air', medal:'bronze', hometown:'Jilin City, Jilin', lat:43.88, lng:126.55, slug:'su-yiming-ba' },
      { name:'Su Yiming', event:'Snowboard · Men\'s Slopestyle', medal:'gold', hometown:'Jilin City, Jilin', lat:43.88, lng:126.55, slug:'su-yiming-ss' },
      // Speed Skating
      { name:'Ning Zhongyan', event:'Speed Skating · Men\'s 1500m', medal:'gold', hometown:'Changchun, Jilin', lat:43.88, lng:125.32, slug:'ning-zhongyan-1500' },
      { name:'Ning Zhongyan', event:'Speed Skating · Men\'s 1000m', medal:'bronze', hometown:'Changchun, Jilin', lat:43.88, lng:125.32, slug:'ning-zhongyan-1000' },
      // Short Track
      { name:'Sun Long', event:'Short Track · Men\'s 1000m', medal:'silver', hometown:'TBD', lat:40.0, lng:116.0, slug:'sun-long' },
    ]
  },

  /* ═══════════════════════════════════════════════
     13. SOUTH KOREA — 3 Gold, 4 Silver, 3 Bronze (10)
     ═══════════════════════════════════════════════ */
  {
    name:'South Korea', code:'KOR', flag:'🇰🇷', ring:OC.blue,
    gold:3, silver:4, bronze:3,
    athletes:[
      // Short Track
      { name:'Kim Gil-li', event:'Short Track · Women\'s 1500m', medal:'gold', hometown:'Seoul', lat:37.57, lng:126.98, slug:'kim-gilli-1500' },
      { name:'Choi Min-jeong', event:'Short Track · Women\'s 1500m', medal:'silver', hometown:'Seoul', lat:37.57, lng:126.98, slug:'choi-minjeong' },
      { name:'Kim Gil-li', event:'Short Track · Women\'s 1000m', medal:'bronze', hometown:'Seoul', lat:37.57, lng:126.98, slug:'kim-gilli-1000' },
      { name:'South Korea Team', event:'Short Track · Women\'s 3000m Relay', medal:'gold', hometown:'Seoul', lat:37.57, lng:126.98, slug:'korea-short-track-relay' },
      { name:'South Korea Team', event:'Short Track · Men\'s 5000m Relay', medal:'silver', hometown:'Seoul', lat:37.57, lng:126.98, slug:'korea-men-relay' },
      { name:'Rim Jong-un', event:'Short Track · Men\'s 1000m', medal:'bronze', hometown:'TBD', lat:37.5, lng:127.0, slug:'rim-jongun' },
      // Snowboard
      { name:'Choi Ga-on', event:'Snowboard · Women\'s Halfpipe', medal:'gold', hometown:'TBD', lat:37.5, lng:127.0, slug:'choi-gaon' },
      { name:'Yu Seung-Eun', event:'Snowboard · Women\'s Big Air', medal:'bronze', hometown:'TBD', lat:37.5, lng:127.0, slug:'yu-seungeun' },
      { name:'Kim Sang-Kyum', event:'Snowboard · Men\'s PGS', medal:'silver', hometown:'TBD', lat:37.5, lng:127.0, slug:'kim-sangkyum' },
    ]
  },

  /* ═══════════════════════════════════════════════
     14. AUSTRALIA — 3 Gold, 2 Silver, 1 Bronze (6)
     ═══════════════════════════════════════════════ */
  {
    name:'Australia', code:'AUS', flag:'🇦🇺', ring:OC.green,
    gold:3, silver:2, bronze:1,
    athletes:[
      { name:'Cooper Woods-Topalovic', event:'Freestyle Skiing · Men\'s Moguls', medal:'gold', hometown:'TBD', lat:-33.87, lng:151.21, slug:'cooper-woods-topalovic' },
      { name:'Jakara Anthony', event:'Freestyle Skiing · Women\'s Dual Moguls', medal:'gold', hometown:'Barwon Heads, Victoria', lat:-38.27, lng:144.50, slug:'jakara-anthony' },
      { name:'Matt Graham', event:'Freestyle Skiing · Men\'s Dual Moguls', medal:'bronze', hometown:'Tuggeranong, ACT', lat:-35.42, lng:149.07, slug:'matt-graham' },
      { name:'Josie Baff', event:'Snowboard · Women\'s Snowboard Cross', medal:'gold', hometown:'TBD', lat:-33.87, lng:151.21, slug:'josie-baff' },
      { name:'Scotty James', event:'Snowboard · Men\'s Halfpipe', medal:'silver', hometown:'Warrandyte, Victoria', lat:-37.76, lng:145.23, slug:'scotty-james' },
    ]
  },

  /* ═══════════════════════════════════════════════
     15. GREAT BRITAIN — 3 Gold, 1 Silver, 1 Bronze (5)
     ═══════════════════════════════════════════════ */
  {
    name:'Great Britain', code:'GBR', flag:'🇬🇧', ring:OC.blue,
    gold:3, silver:1, bronze:1,
    athletes:[
      { name:'Matt Weston', event:'Skeleton · Men\'s', medal:'gold', hometown:'Peterborough', lat:52.57, lng:-0.24, slug:'matt-weston' },
      { name:'Matt Weston', event:'Skeleton · Mixed Team', medal:'gold', hometown:'Peterborough', lat:52.57, lng:-0.24, slug:'matt-weston-mixed' },
      { name:'Tabitha Stoecker', event:'Skeleton · Mixed Team', medal:'gold', hometown:'TBD', lat:51.5, lng:-0.1, slug:'tabitha-stoecker' },
      { name:'Charlotte Bankes', event:'Snowboard · Mixed Team SBX', medal:'gold', hometown:'Hemel Hempstead', lat:51.75, lng:-0.47, slug:'charlotte-bankes' },
      { name:'Huw Nightingale', event:'Snowboard · Mixed Team SBX', medal:'gold', hometown:'TBD', lat:51.5, lng:-3.0, slug:'huw-nightingale' },
      { name:'Zoe Atkin', event:'Freestyle Skiing · Women\'s Halfpipe', medal:'bronze', hometown:'Edinburgh', lat:55.95, lng:-3.19, slug:'zoe-atkin' },
      { name:'Great Britain Team', event:'Curling · Men\'s', medal:'silver', hometown:'Edinburgh', lat:55.95, lng:-3.19, slug:'gb-curling-men' },
    ]
  },

  /* ═══════════════════════════════════════════════
     16. CZECHIA — 2 Gold, 2 Silver, 1 Bronze (5)
     ═══════════════════════════════════════════════ */
  {
    name:'Czechia', code:'CZE', flag:'🇨🇿', ring:OC.blue,
    gold:2, silver:2, bronze:1,
    athletes:[
      { name:'Metoděj Jílek', event:'Speed Skating · Men\'s 10000m', medal:'gold', hometown:'TBD', lat:50.08, lng:14.44, slug:'metodej-jilek-10k' },
      { name:'Metoděj Jílek', event:'Speed Skating · Men\'s 5000m', medal:'silver', hometown:'TBD', lat:50.08, lng:14.44, slug:'metodej-jilek-5k' },
      { name:'Tereza Voborníková', event:'Biathlon · Women\'s Mass Start', medal:'bronze', hometown:'TBD', lat:49.5, lng:15.5, slug:'tereza-vobornikova' },
      { name:'Eva Adamczyková', event:'Snowboard · Women\'s Snowboard Cross', medal:'silver', hometown:'Bílá, Frýdek-Místek', lat:49.47, lng:18.44, slug:'eva-adamczykova' },
      { name:'Zuzana Maderova', event:'Snowboard · Women\'s PGS', medal:'gold', hometown:'TBD', lat:50.0, lng:14.5, slug:'zuzana-maderova' },
    ]
  },

  /* ═══════════════════════════════════════════════
     17. SLOVENIA — 2 Gold, 1 Silver, 1 Bronze (4)
     ═══════════════════════════════════════════════ */
  {
    name:'Slovenia', code:'SLO', flag:'🇸🇮', ring:OC.green,
    gold:2, silver:1, bronze:1,
    athletes:[
      { name:'Domen Prevc', event:'Ski Jumping · Men\'s Large Hill', medal:'gold', hometown:'Kranj', lat:46.24, lng:14.35, slug:'domen-prevc' },
      { name:'Nika Prevc', event:'Ski Jumping · Women\'s Normal Hill', medal:'silver', hometown:'Kranj', lat:46.24, lng:14.35, slug:'nika-prevc-nh' },
      { name:'Nika Prevc', event:'Ski Jumping · Women\'s Large Hill', medal:'bronze', hometown:'Kranj', lat:46.24, lng:14.35, slug:'nika-prevc-lh' },
      { name:'Slovenia Team', event:'Ski Jumping · Mixed Team NH', medal:'gold', hometown:'Ljubljana', lat:46.06, lng:14.51, slug:'slovenia-ski-jumping-team' },
    ]
  },

  /* ═══════════════════════════════════════════════
     18. SPAIN — 1 Gold, 0 Silver, 2 Bronze (3)
     ═══════════════════════════════════════════════ */
  {
    name:'Spain', code:'ESP', flag:'🇪🇸', ring:OC.yellow,
    gold:1, silver:0, bronze:2,
    athletes:[
      { name:'Oriol Cardona Coll', event:'Ski Mountaineering · Men\'s Sprint', medal:'gold', hometown:'Berga, Catalonia', lat:42.10, lng:1.85, slug:'oriol-cardona-coll-sprint' },
      { name:'Ana Alonso Rodriguez', event:'Ski Mountaineering · Women\'s Sprint', medal:'bronze', hometown:'TBD', lat:40.42, lng:-3.70, slug:'ana-alonso-rodriguez-sprint' },
      { name:'Oriol Cardona Coll', event:'Ski Mountaineering · Mixed Relay', medal:'bronze', hometown:'Berga, Catalonia', lat:42.10, lng:1.85, slug:'oriol-cardona-coll-relay' },
      { name:'Ana Alonso Rodriguez', event:'Ski Mountaineering · Mixed Relay', medal:'bronze', hometown:'TBD', lat:40.42, lng:-3.70, slug:'ana-alonso-rodriguez-relay' },
    ]
  },

  /* ═══════════════════════════════════════════════
     ADDITIONAL MEDAL-WINNING COUNTRIES
     ═══════════════════════════════════════════════ */

  {
    name:'Brazil', code:'BRA', flag:'🇧🇷', ring:OC.green,
    gold:1, silver:0, bronze:0,
    athletes:[
      { name:'Lucas Pinheiro Braathen', event:'Alpine Skiing · Men\'s Giant Slalom', medal:'gold', hometown:'Oslo', hometownCountry:'Norway', lat:59.91, lng:10.75, slug:'lucas-pinheiro-braathen' },
    ]
  },

  {
    name:'Finland', code:'FIN', flag:'🇫🇮', ring:OC.blue,
    gold:0, silver:2, bronze:3,
    athletes:[
      { name:'Eero Hirvonen', event:'Nordic Combined · NH/10km', medal:'bronze', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'eero-hirvonen-nh' },
      { name:'Ilkka Herola', event:'Nordic Combined · LH/10km', medal:'bronze', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'ilkka-herola' },
      { name:'Eero Hirvonen', event:'Nordic Combined · Team Sprint', medal:'silver', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'eero-hirvonen-team' },
      { name:'Ilkka Herola', event:'Nordic Combined · Team Sprint', medal:'silver', hometown:'Jyväskylä', lat:62.24, lng:25.75, slug:'ilkka-herola-team' },
      { name:'Suvi Minkkinen', event:'Biathlon · Women\'s Pursuit', medal:'bronze', hometown:'TBD', lat:61.5, lng:24.0, slug:'suvi-minkkinen' },
      { name:'Finland Team', event:'Ice Hockey · Men\'s', medal:'bronze', hometown:'Helsinki', lat:60.17, lng:24.94, slug:'finland-hockey' },
    ]
  },

  {
    name:'New Zealand', code:'NZL', flag:'🇳🇿', ring:OC.green,
    gold:0, silver:2, bronze:0,
    athletes:[
      { name:'Zoi Sadowski-Synnott', event:'Snowboard · Women\'s Big Air', medal:'silver', hometown:'Wanaka', lat:-44.70, lng:169.13, slug:'zoi-sadowski-synnott-ba' },
      { name:'Zoi Sadowski-Synnott', event:'Snowboard · Women\'s Slopestyle', medal:'silver', hometown:'Wanaka', lat:-44.70, lng:169.13, slug:'zoi-sadowski-synnott-ss' },
      { name:'Luca Harrington', event:'Freestyle Skiing · Men\'s Slopestyle', medal:'bronze', hometown:'TBD', lat:-41.29, lng:174.78, slug:'luca-harrington' },
    ]
  },

  {
    name:'Poland', code:'POL', flag:'🇵🇱', ring:OC.red,
    gold:0, silver:2, bronze:1,
    athletes:[
      { name:'Kacper Tomasiak', event:'Ski Jumping · Men\'s Normal Hill', medal:'silver', hometown:'Wisła', lat:49.66, lng:18.86, slug:'kacper-tomasiak-nh' },
      { name:'Kacper Tomasiak', event:'Ski Jumping · Men\'s Large Hill', medal:'bronze', hometown:'Wisła', lat:49.66, lng:18.86, slug:'kacper-tomasiak-lh' },
      { name:'Paweł Wąsek', event:'Ski Jumping · Men\'s Super Team LH', medal:'silver', hometown:'TBD', lat:49.7, lng:19.0, slug:'pawel-wasek' },
      { name:'Kacper Tomasiak', event:'Ski Jumping · Men\'s Super Team LH', medal:'silver', hometown:'Wisła', lat:49.66, lng:18.86, slug:'kacper-tomasiak-st' },
    ]
  },

  {
    name:'Kazakhstan', code:'KAZ', flag:'🇰🇿', ring:OC.yellow,
    gold:1, silver:0, bronze:0,
    athletes:[
      { name:'Mikhail Shaidorov', event:'Figure Skating · Men\'s Singles', medal:'gold', hometown:'Almaty', lat:43.24, lng:76.95, slug:'mikhail-shaidorov' },
    ]
  },

  {
    name:'Georgia', code:'GEO', flag:'🇬🇪', ring:OC.yellow,
    gold:0, silver:1, bronze:0,
    athletes:[
      { name:'Anastasiia Metelkina', event:'Figure Skating · Pairs', medal:'silver', hometown:'Tbilisi', lat:41.72, lng:44.79, slug:'anastasiia-metelkina' },
      { name:'Luka Berulava', event:'Figure Skating · Pairs', medal:'silver', hometown:'Tbilisi', lat:41.72, lng:44.79, slug:'luka-berulava' },
    ]
  },

  {
    name:'Estonia', code:'EST', flag:'🇪🇪', ring:OC.blue,
    gold:0, silver:1, bronze:0,
    athletes:[
      { name:'Henry Sildaru', event:'Freestyle Skiing · Men\'s Halfpipe', medal:'silver', hometown:'Tallinn', lat:59.44, lng:24.75, slug:'henry-sildaru' },
    ]
  },

  {
    name:'Belgium', code:'BEL', flag:'🇧🇪', ring:OC.black,
    gold:0, silver:0, bronze:1,
    athletes:[
      { name:'Belgium Team', event:'Short Track · Mixed Team Relay', medal:'bronze', hometown:'Brussels', lat:50.85, lng:4.35, slug:'belgium-short-track' },
    ]
  },

  {
    name:'Latvia', code:'LAT', flag:'🇱🇻', ring:OC.blue,
    gold:0, silver:1, bronze:0,
    athletes:[
      { name:'Elīna Ieva Bota', event:'Luge · Women\'s Singles', medal:'silver', hometown:'Riga', lat:56.95, lng:24.11, slug:'elina-bota' },
    ]
  },

  {
    name:'Bulgaria', code:'BUL', flag:'🇧🇬', ring:OC.green,
    gold:0, silver:0, bronze:1,
    athletes:[
      { name:'Lora Hristova', event:'Biathlon · Women\'s 15km Individual', medal:'bronze', hometown:'TBD', lat:42.70, lng:23.32, slug:'lora-hristova' },
    ]
  },

  {
    name:'Denmark', code:'DEN', flag:'🇩🇰', ring:OC.blue,
    gold:0, silver:1, bronze:0,
    athletes:[
      { name:'Viktor Hald Thorup', event:'Speed Skating · Men\'s Mass Start', medal:'silver', hometown:'TBD', lat:55.68, lng:12.57, slug:'viktor-thorup' },
    ]
  },

  {
    name:'Ice Hockey – Switzerland (Women\'s)', code:'SUI-WH', flag:'🇨🇭', ring:OC.red,
    // Note: counted under Switzerland's medal tally above
    gold:0, silver:0, bronze:0,
    athletes:[]
  },

];


/* ═══════════════════════════════════════════════
   DATA QUALITY SUMMARY
   ═══════════════════════════════════════════════

   CONFIRMED MEDALISTS: ~280+ individual athlete entries

   ITEMS NEEDING MANUAL LOOKUP (marked 'TBD'):
   - Several athlete hometowns (search "TBD" in this file)
   - Some lat/lng coordinates are approximate (search for round numbers like lat:40.0)

   MISSING/UNCONFIRMED MEDALISTS:
   1. Cross-Country: Men's Team Sprint bronze, Men's Relay silver/bronze,
      Women's 10km gold/silver, Women's Relay full podium
   2. Speed Skating: Men's 10000m silver
   3. Short Track: Men's 1500m silver/bronze details
   4. Freestyle Skiing: Women's Aerials silver/bronze, Men's Aerials silver,
      Men's Ski Cross bronze
   5. Snowboard: Women's PGS bronze, Men's PGS bronze
   6. Curling: Mixed Doubles full podium
   7. Biathlon: Mixed Relay team rosters (Italy, Germany individuals),
      Men's/Women's Relay individual names for some teams

   TOTAL INDIVIDUAL ENTRIES: ~280 (some athletes appear multiple times for multiple medals)
   TARGET: 348 medal positions across 116 events
   GAP: ~68 positions need manual verification/addition

   ═══════════════════════════════════════════════ */

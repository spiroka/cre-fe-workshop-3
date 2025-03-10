class StarWarsApp {
  static loadingIndicator = '<p class="text-stone-50">Loading...</p>';

  init() {
  }

  showVehicleLoadingIndicator() {
    document.getElementById('vehicles').innerHTML = StarWarsApp.loadingIndicator;
  }

  showStarshipLoadingIndicator() {
    document.getElementById('starships').innerHTML = StarWarsApp.loadingIndicator;
  }
}

const app = new StarWarsApp();
app.init();

import { loadVehicles, loadStarships, renderVehicle } from './vehicle.js';

class StarWarsApp {
  static loadingIndicator = '<p class="text-stone-50">Loading...</p>';

  async init() {
    this.showVehicleLoadingIndicator();
    this.showStarshipLoadingIndicator();

    const [vehiclesResult, starshipsResult] = await Promise.allSettled([
      loadVehicles(),
      loadStarships(),
    ]);

    if (vehiclesResult.status === 'fulfilled') {
      this.showVehicles(vehiclesResult.value);
    } else {
      console.error(vehiclesResult.reason);
    }

    if (starshipsResult.status === 'fulfilled') {
      this.showStarships(starshipsResult.value);
    } else {
      console.error(starshipsResult.reason);
    }
  }

  showVehicles(vehicles) {
    const vehicleElements = vehicles.map(renderVehicle);
    document.getElementById('vehicles').replaceChildren(...vehicleElements);
  }

  showStarships(starships) {
    const starshipElements = starships.map(renderVehicle);
    document.getElementById('starships').replaceChildren(...starshipElements);
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

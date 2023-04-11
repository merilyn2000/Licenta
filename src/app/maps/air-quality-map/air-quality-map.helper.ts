export class AirQualityMapHelper {
  static getLevelColor(lastData: string): string {
    if (+lastData >= 0 && +lastData < 50) {
      return 'green';
    } else if (+lastData > 50 && +lastData < 100) {
      return 'yellow';
    } else if (+lastData > 100 && +lastData < 150) {
      return 'orange';
    } else if (+lastData > 150 && +lastData < 200) {
      return 'FireBrick';
    } else if (+lastData > 200 && +lastData < 300) {
      return 'DeepPink';
    } else {
      return 'purple';
    }
  }

  static getLevelText(lastData: string): string {
    if (+lastData >= 0 && +lastData < 50) {
      return `<center style="background-color: rgba(0,128,0, .7)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Good</h2>
              </center>`;
    } else if (+lastData > 50 && +lastData < 100) {
      return `<center style="background-color: rgba(255,255,0, .7)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Moderate</h2>
                </center>`;
    } else if (+lastData > 100 && +lastData < 150) {
      return `<center style="background-color: rgba(255,165,0, .7)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Unhealthy for sensitive groups</h2>
                </center>`;
    } else if (+lastData > 150 && +lastData < 200) {
      return `<center style="background-color: rgba(178,34,34, .7)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Unhealthy</h2>
                </center>`;
    } else if (+lastData > 200 && +lastData < 300) {
      return `<center style="background-color: rgba(255,20,147, .7)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Very unhealthy</h2>
                </center>`;
    } else {
      return `<center style="background-color: rgba(128,0,128, .7)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Hazardous</h2>
                </center>`;
    }
  }

  static getLevelImage(lastData: string): string {
    if (+lastData >= 0 && +lastData < 50) {
      return `<img src="/assets/images/good.jpg" height="150px" width="200px"/>`;
    } else if (+lastData > 50 && +lastData < 100) {
      return `<img src="/assets/images/moderate.jpg" height="150px" width="200px"/>`;
    } else if (+lastData > 100 && +lastData < 150) {
      return `<img src="/assets/images/unhealthy_forSensitiveGroups.jpg" height="150px" width="200px"/>`;
    } else if (+lastData > 150 && +lastData < 200) {
      return `<img src="/assets/images/unhealthy.jpg" height="150px" width="200px"/>`;
    } else if (+lastData > 200 && +lastData < 300) {
      return `<img src="/assets/images/very_unhealthy.jpg" height="150px" width="200px"/>`;
    } else {
      return `<img src="/assets/images/hazardous.jpg" height="150px" width="200px"/>`;
    }
  }
}

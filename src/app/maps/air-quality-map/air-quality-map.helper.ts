export class AirQualityMapHelper {
  static getQualityIndexColor(lastData: string): string {
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

  static getQualityIndexText(lastData: string): string {
    if (+lastData >= 0 && +lastData < 50) {
      return `<center style="background-color: rgba(0,128,0, 0.4)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Good</h2>
              </center>`;
    } else if (+lastData > 50 && +lastData < 100) {
      return `<center style="background-color: rgba(255,255,0, 0.4)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Moderate</h2>
                </center>`;
    } else if (+lastData > 100 && +lastData < 150) {
      return `<center style="background-color: rgba(255,165,0, 0.4)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Unhealthy for sensitive groups</h2>
                </center>`;
    } else if (+lastData > 150 && +lastData < 200) {
      return `<center style="background-color: rgba(178,34,34, 0.4)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Unhealthy</h2>
                </center>`;
    } else if (+lastData > 200 && +lastData < 300) {
      return `<center style="background-color: rgba(255,20,147, 0.4)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Very unhealthy</h2>
                </center>`;
    } else {
      return `<center style="background-color: rgba(128,0,128, 0.4)">
                <h1> Air quality index value : </h1>
                <h2>${lastData} - Hazardous</h2>
                </center>`;
    }
  }

  static getQualityIndexImage(lastData: string): string {
    if (+lastData >= 0 && +lastData < 50) {
      return `<center><img src="/assets/images/good.jpg" height="170px" height="170px" width="230px"/></center>`;
    } else if (+lastData > 50 && +lastData < 100) {
      return `<center><img src="/assets/images/moderate.jpg" height="150px" height="170px" width="230px"/></center>`;
    } else if (+lastData > 100 && +lastData < 150) {
      return `<center><img src="/assets/images/unhealthy_forSensitiveGroups.jpg" height="170px" width="230px"/></center>`;
    } else if (+lastData > 150 && +lastData < 200) {
      return `<center><img src="/assets/images/unhealthy.jpg" height="150px" height="170px" width="230px"/></center>`;
    } else if (+lastData > 200 && +lastData < 300) {
      return `<center><img src="/assets/images/very_unhealthy.jpg" height="150px" height="170px" width="230px"/></center>`;
    } else {
      return `<center><img src="/assets/images/hazardous.jpg" height="150px" height="170px" width="230px"/></center>`;
    }
  }

  static getQualityIndexDescription(lastData: string): string {
    if (+lastData >= 0 && +lastData < 50)
      return '<h3><strong>Air quality is considered satisfactory, and air pollution poses little or no risk</h3></strong>';
    else if (+lastData > 50 && +lastData < 100)
      return '<h3><strong>Air quality is acceptable. However, for some pollutans there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution</h3></strong>';
    else if (+lastData > 100 && +lastData < 150)
      return '<h3><strong>Members of sensitive groups may experience health effects. The general public is not likely to be affected</h3></strong>';
    else if (+lastData > 150 && +lastData < 200)
      return '<h3><strong>Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects</h3></strong>';
    else if (+lastData > 200 && +lastData < 300)
      return '<h3><strong>Health warnings of emergency conditions. The entire population is more likely to be affected</h3></strong>';
    else
      return '<h3><strong>Health alert: everyone may experience more serios health effects</h3></strong>';
  }
}

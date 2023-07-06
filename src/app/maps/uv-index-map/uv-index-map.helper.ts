export class UvIndexMapHelper {
  static getUVIndexColor(lastData: string): string {
    if (+lastData >= 0 && +lastData <= 2) {
      return 'green';
    } else if (+lastData >= 3 && +lastData <= 5) {
      return 'yellow';
    } else if (+lastData >= 6 && +lastData <= 7) {
      return 'orange';
    } else if (+lastData >= 8 && +lastData <= 10) {
      return 'red';
    } else {
      return 'purple';
    }
  }

  static getUVIndexText(lastData: string): string {
    if (+lastData >= 0 && +lastData <= 2) {
      return `<center style="background-color: rgba(0,255,0, 0.4)">
                  <h1> UV index value : </h1>
                  <h2>${lastData} - Low</h2>
                </center>`;
    } else if (+lastData >= 3 && +lastData <= 5) {
      return `<center style="background-color: rgba(255,255,0, 0.4)">
                  <h1> UV index value : </h1>
                  <h2>${lastData} - Moderate</h2>
                  </center>`;
    } else if (+lastData >= 6 && +lastData <= 7) {
      return `<center style="background-color: rgba(255,165,0, 0.4)">
                  <h1> UV index value : </h1>
                  <h2>${lastData} - High</h2>
                  </center>`;
    } else if (+lastData >= 8 && +lastData <= 10) {
      return `<center style="background-color: rgba(255,0,0, 0.4)">
                  <h1> UV index value : </h1>
                  <h2>${lastData} - Very high</h2>
                  </center>`;
    } else {
      return `<center style="background-color: rgba(128,0,128, 0.4)">
                  <h1> UV index value : </h1>
                  <h2>${lastData} - Extreme</h2>
                  </center>`;
    }
  }

  static getUVIndexImage(lastData: string): string {
    if (+lastData >= 0 && +lastData <= 2) {
      return `<center>
      <h2

                  style="color: green"
                >
                  <strong>NO PROTECTION REQUIRED</strong>
                </h2><img src="/assets/images/low.png" height="150px" width="200px"/></center>`;
    } else if (+lastData >= 3 && +lastData <= 5) {
      return `<center><h2

      style="color: coral"
    >
      <strong>PROTECTION REQUIRED</strong>
    </h2><img src="/assets/images/moderate.png" height="150px" width="200px"/></center>`;
    } else if (+lastData >= 6 && +lastData <= 7) {
      return `<center><h2

      style="color: coral"
    >
      <strong>PROTECTION REQUIRED</strong>
    </h2><img src="/assets/images/high.png" height="150px" width="200px"/></center>`;
    } else if (+lastData >= 8 && +lastData <= 10) {
      return `<center>
    <h2 style="color: crimson">
      <strong>EXTRA PROTECTION REQUIRED</strong>
    </h2><img src="/assets/images/very_high.png" height="150px" width="200px"/>
    </center>`;
    } else {
      return `<center>
      <h2 style="color: crimson">
      <strong>EXTRA PROTECTION REQUIRED</strong>
    </h2><img src="/assets/images/extreme.png" height="150px" width="200px"/>
    </center>`;
    }
  }

  static getUVIndexDescription(lastData: string): string {
    if (+lastData >= 0 && +lastData <= 2)
      return '<h3><strong>Unless outdoors for extended periods, or near reflective surfaces such as snow or water.</h3></strong>';
    else if (+lastData >= 3 && +lastData <= 5)
      return '<h3><strong>Slip on clothing. Slop on sunscreen, use sun protection factor ( SPF ) 30 for adults and 50 for children. Slap on a wide brimmed hat.</h3></strong>';
    else if (+lastData >= 6 && +lastData <= 7)
      return '<h3><strong>Seek shade during midday hours. Slide on sunglasses, wraparound are best.</h3></strong>';
    else if (+lastData >= 8 && +lastData <= 10)
      return '<h3><strong>Avoid being outside during midday hours. Make sure you seek shade.</h3></strong>';
    else
      return '<h3><strong>Always wear sunscreen and protective clothing i.e. shirt, hat and sunglasses.</h3></strong>';
  }
}

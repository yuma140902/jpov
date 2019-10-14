import { JpoJson } from './jpo-json';

export class JpoTableEntry {
  areaName: string;
  numberStr: string;
  number: number;

  private static getFirstKey(json: object): string {
    for (let key in json) {
      return key;
    }
  }

  static parse(jpojson: JpoJson): JpoTableEntry[] {
    const table = new Array<JpoTableEntry>();
    const prefectureName = this.getFirstKey(jpojson);
    const prefecture = jpojson[prefectureName];
    table.push({ areaName: prefectureName, numberStr: prefecture.number_str, number: prefecture.number });

    for (let cityName in prefecture.cities) {
      console.log("city name: " + cityName);
      const city = prefecture.cities[cityName];
      table.push({ areaName: cityName, numberStr: city.number_str, number: city.number });

      for (let areaName in city.areas) {
        const area = city.areas[areaName];
        table.push({ areaName: cityName + areaName, numberStr: area.number_str, number: area.number });
      }
    }

    return table;
  }
}

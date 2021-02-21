import { Injectable } from '@nestjs/common';
import { AtmInterface } from '../../interface/atm.interface';
import { AtmEntity } from '../../../domain/entity/atm.entity';

@Injectable()
export class AtmServiceRepository implements AtmInterface{
  async searchAtmNear(lat: string, lon: string, accuracy: number): Promise<AtmEntity[]> {
    const list: AtmEntity[] = [
      {
        "address": {
          "street": "Jonagoldstraat",
          "housenumber": "57",
          "postalcode": "6515 EN",
          "city": "Nijmegen",
          "geoLocation": {
            "lat": "51.879227",
            "lng": "5.837548"
          }
        },
        "distance": 0,
        "openingHours": [
          {
            "dayOfWeek": 2,
            "hours": [
              {
                "hourFrom": "08:00",
                "hourTo": "21:00"
              }
            ]
          },
          {
            "dayOfWeek": 3,
            "hours": [
              {
                "hourFrom": "08:00",
                "hourTo": "21:00"
              }
            ]
          },
          {
            "dayOfWeek": 4,
            "hours": [
              {
                "hourFrom": "08:00",
                "hourTo": "21:00"
              }
            ]
          },
          {
            "dayOfWeek": 5,
            "hours": [
              {
                "hourFrom": "08:00",
                "hourTo": "21:00"
              }
            ]
          },
          {
            "dayOfWeek": 6,
            "hours": [
              {
                "hourFrom": "08:00",
                "hourTo": "21:00"
              }
            ]
          },
          {
            "dayOfWeek": 7,
            "hours": [
              {
                "hourFrom": "08:00",
                "hourTo": "21:00"
              }
            ]
          },
          {
            "dayOfWeek": 1,
            "hours": [
              {
                "hourFrom": "12:00",
                "hourTo": "21:00"
              }
            ]
          }
        ],
        "functionality": "Geldautomaat",
        "type": "GELDMAAT"
      },
      {
        "address": {
          "street": "Pastoor Ossestraat",
          "housenumber": "19",
          "postalcode": "7627 PJ",
          "city": "Bornerbroek",
          "geoLocation": {
            "lat": "52.310178",
            "lng": "6.655367"
          }
        },
        "distance": 0,
        "openingHours": [
          {
            "dayOfWeek": 2,
            "hours": [
              {
                "hourFrom": "07:00",
                "hourTo": "23:00"
              }
            ]
          },
          {
            "dayOfWeek": 3,
            "hours": [
              {
                "hourFrom": "07:00",
                "hourTo": "23:00"
              }
            ]
          },
          {
            "dayOfWeek": 4,
            "hours": [
              {
                "hourFrom": "07:00",
                "hourTo": "23:00"
              }
            ]
          },
          {
            "dayOfWeek": 5,
            "hours": [
              {
                "hourFrom": "07:00",
                "hourTo": "23:00"
              }
            ]
          },
          {
            "dayOfWeek": 6,
            "hours": [
              {
                "hourFrom": "07:00",
                "hourTo": "23:00"
              }
            ]
          },
          {
            "dayOfWeek": 7,
            "hours": [
              {
                "hourFrom": "07:00",
                "hourTo": "23:00"
              }
            ]
          },
          {
            "dayOfWeek": 1,
            "hours": [
              {
                "hourFrom": "07:00",
                "hourTo": "23:00"
              }
            ]
          }
        ],
        "functionality": "Geldautomaat",
        "type": "GELDMAAT"
      }
    ];
    return list;
  }
}

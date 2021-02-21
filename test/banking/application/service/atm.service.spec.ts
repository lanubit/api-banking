import { GetAtmDto } from '../../../../src/banking/domain/dto/get-atm.dto';
import { AtmService } from '../../../../src/banking/domain/application/service/atm.service';
import { AtmModel } from '../../../../src/banking/domain/model/atm.model';
import { AtmServiceRepository } from '../../../../src/banking/infrastructure/repository/service/atm.service.repository';
import { Test } from '@nestjs/testing';

describe('AtmService', () => {
  let atmService: AtmService;
  let atmModel: AtmModel;
  let atmServiceRepository: AtmServiceRepository;

  const result = [
    {
      address: {
        street: 'Jonagoldstraat',
        housenumber: '57',
        postalcode: '6515 EN',
        city: 'Nijmegen',
        geoLocation: {
          lat: '51.879227',
          lng: '5.837548',
        },
      },
      distance: 0,
      openingHours: [
        {
          dayOfWeek: 2,
          hours: [
            {
              hourFrom: '08:00',
              hourTo: '21:00',
            },
          ],
        },
        {
          dayOfWeek: 3,
          hours: [
            {
              hourFrom: '08:00',
              hourTo: '21:00',
            },
          ],
        },
        {
          dayOfWeek: 4,
          hours: [
            {
              hourFrom: '08:00',
              hourTo: '21:00',
            },
          ],
        },
        {
          dayOfWeek: 5,
          hours: [
            {
              hourFrom: '08:00',
              hourTo: '21:00',
            },
          ],
        },
        {
          dayOfWeek: 6,
          hours: [
            {
              hourFrom: '08:00',
              hourTo: '21:00',
            },
          ],
        },
        {
          dayOfWeek: 7,
          hours: [
            {
              hourFrom: '08:00',
              hourTo: '21:00',
            },
          ],
        },
        {
          dayOfWeek: 1,
          hours: [
            {
              hourFrom: '12:00',
              hourTo: '21:00',
            },
          ],
        },
      ],
      functionality: 'Geldautomaat',
      type: 'GELDMAAT',
    },
  ];

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AtmService, AtmModel, AtmServiceRepository],
    }).compile();

    atmService = moduleRef.get<AtmService>(AtmService);
    atmModel = moduleRef.get<AtmModel>(AtmModel);
    atmServiceRepository = moduleRef.get<AtmServiceRepository>(
      AtmServiceRepository,
    );

    jest
      .spyOn(atmModel, 'searchAtmNear')
      .mockImplementation(async () => result);
    jest
      .spyOn(atmServiceRepository, 'searchAtmNear')
      .mockImplementation(async () => result);
  });

  describe('getMany', () => {
    it('Result success', async () => {
      const atmDto: GetAtmDto = {
        lat: '51.879227',
        lon: '51.879227',
        accuracy: 8,
      };

      jest.spyOn(atmService, 'getMany').mockImplementation( async () => result);
      const response = await atmService.getMany(atmDto);
      expect(response).toBe(result);
    });
  });
});